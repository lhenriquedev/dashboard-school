import { Session, User } from "@supabase/supabase-js";
import { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase";

interface UserProviderProps {
  children: React.ReactNode;
}

interface UserContextProps {
  user: User;
  isLoading: boolean;
  signOutUser: () => void;
  signInUser: (email: string, password: string) => void;
}

const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<any | null>({} as User);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const signInUser = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) {
      setSession(data.session);
      setUser(data.user);

      navigate("/");
    }
    setIsLoading(false);
  };

  const signOutUser = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const getUserData = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!session || !user) {
      navigate("/login");
    }

    getUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading, signOutUser, signInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(UserContext);
};
