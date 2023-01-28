export interface StudentProps {
  id: number;
  image?: string;
  name: string;
  age: number;
  school: string;
  registry: string;
  district: string;
  street: string;
  phone: string;
  status: string;
}

export interface FormDataProps {
  age: string;
  district: string;
  city: string;
  document: string;
  name: string;
  phone: string;
  school: string;
  street: string;
  status: string;
}
