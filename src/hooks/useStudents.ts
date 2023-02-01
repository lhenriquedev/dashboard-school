import { useEffect, useState } from "react";
import supabase from "../supabase";

import { StudentProps } from "../@types/types";

const useStudent = () => {
  const [data, setData] = useState<StudentProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getStudent = async () => {
    try {
      const { data: students, error } = await supabase
        .from("students")
        .select("*", { count: "exact" })
        .limit(10)
        .order("id", { ascending: false });

      if (!error) {
        setData(students);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  useEffect(() => {
    getStudent();
  }, []);

  return { data, setData, isLoading };
};

export default useStudent;
