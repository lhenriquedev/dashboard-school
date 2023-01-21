import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Profile } from "./pages/Profile";
import { Student } from "./pages/Students";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="students" element={<Student />} />
      </Route>
    </Routes>
  );
}
