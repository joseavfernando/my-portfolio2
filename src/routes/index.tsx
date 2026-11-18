import { Route, Routes  } from "react-router-dom"

import HomePage from "@/pages/HomePage"
import ProjectDetails from "@/components/ProjectDetails"
import Login from "@/pages/admin/Login"
import AdminLayout from "@/components/admin/adminLayout"
import PrivateRoute from "@/components/admin/PrivateRoute"
import Dashboard from "@/pages/admin/Dashboard"
import ProjectsManager from "@/pages/admin/ProjectsManager"
import LinksManager from "@/pages/admin/LinksManager"
import Messages from "@/pages/admin/Messages"
import Settings from "@/pages/admin/Settings"
import NotFound from "@/pages/NotFound"



export default function AppRoutes(){

    return (

  <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetails />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />

          <Route path="/admin" element={<PrivateRoute />}>
            <Route element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="projects" element={<ProjectsManager />} />
              <Route path="links" element={<LinksManager />} />
              <Route path="messages" element={<Messages />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

    );

}