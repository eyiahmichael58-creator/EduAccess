import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/student/Dashboard";
import MyCourses from "../pages/student/MyCourses";
import CourseDetails from "../pages/student/CourseDetails";
import Lesson from "../pages/student/Lesson";

import AdminCourses from "../pages/admin/AdminCourses";

import ProtectedRoute from "../components/auth/ProtectedRoute";



export default function AppRoutes() {

  return (

    <Routes>


      <Route
        path="/"
        element={<Home />}
      />



      <Route
        path="/login"
        element={<Login />}
      />



      <Route
        path="/register"
        element={<Register />}
      />






      {/* Student Dashboard */}

      <Route

        path="/dashboard"

        element={

          <ProtectedRoute>

            <Dashboard />

          </ProtectedRoute>

        }

      />








      {/* Student Courses */}

      <Route

        path="/courses"

        element={

          <ProtectedRoute>

            <MyCourses />

          </ProtectedRoute>

        }

      />








      {/* Course Details */}

      <Route

        path="/courses/:id"

        element={

          <ProtectedRoute>

            <CourseDetails />

          </ProtectedRoute>

        }

      />








      {/* Lesson Page */}

      <Route

        path="/courses/computing/lesson/:lessonId"

        element={

          <ProtectedRoute>

            <Lesson />

          </ProtectedRoute>

        }

      />








      {/* Admin Course Management */}

      <Route

        path="/admin/courses"

        element={

          <ProtectedRoute>

            <AdminCourses />

          </ProtectedRoute>

        }

      />



    </Routes>

  );

}