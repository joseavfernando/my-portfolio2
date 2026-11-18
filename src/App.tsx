import { useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer";
import AppRoutes from "./routes";


function App(){
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return(
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <AppRoutes />
        {!isAdminRoute && < Footer/>}
      </div>
    </AuthProvider>
  )
}

export default App;