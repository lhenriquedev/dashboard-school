import { Session, User } from "@supabase/supabase-js";
import { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
  const [user, setUser] = useState<any | null>({} as User);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const signInUser = async (email: string, password: string) => {
    setIsLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast("Email ou senha estão incorretos!", {
        type: "error",
      });
      return;
    }

    setUser(data.user);

    navigate("/");
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
