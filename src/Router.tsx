import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Profile } from "./pages/Profile";
import { AddStudent } from "./pages/Students/AddStudent";
import { Student } from "./pages/Students";
import { EditStudent } from "./pages/Students/EditStudent";
import { Login } from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <DefaultLayout />
          </PrivateRoute>
        }
      >
        <Route path="profile" element={<Profile />} />
        <Route path="students" element={<Student />} />
        <Route path="add-student" element={<AddStudent />} />
        <Route path="students/:id" element={<EditStudent />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}
