import {
  Home,
  BookOpen,
  Accessibility,
  Settings,
  LogOut
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


export default function Sidebar() {


  const navigate = useNavigate();

  const { logout } = useAuth();



  async function handleLogout(){

    await logout();

    navigate("/login");

  }



  const menu = [

    {
      name:"Dashboard",
      icon:<Home size={20}/>,
      path:"/dashboard"
    },

    {
      name:"Courses",
      icon:<BookOpen size={20}/>,
      path:"#"
    },

    {
      name:"Reader",
      icon:<Accessibility size={20}/>,
      path:"#"
    },

    {
      name:"Settings",
      icon:<Settings size={20}/>,
      path:"#"
    }

  ];




  return (

    <aside

      className="
        w-72
        min-h-screen
        bg-white
        border-r
        border-gray-200
        p-6
        flex
        flex-col
      "

    >


      {/* Logo */}

      <div className="
        mb-10
      ">

        <h1 className="
          text-2xl
          font-bold
          text-black
        ">
          EduAccess
        </h1>


        <p className="
          text-sm
          text-gray-500
        ">
          Accessible Learning
        </p>


      </div>





      {/* Navigation */}

      <nav className="
        space-y-3
        flex-1
      ">


        {
          menu.map((item)=>(

            <button

              key={item.name}

              onClick={()=>navigate(item.path)}

              className="
                w-full
                flex
                items-center
                gap-4
                px-4
                py-3
                rounded-xl
                text-gray-700
                hover:bg-gray-100
                transition
              "

            >

              {item.icon}


              <span>
                {item.name}
              </span>


            </button>


          ))
        }


      </nav>






      {/* Logout */}

      <button

        onClick={handleLogout}

        className="
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-xl
          bg-black
          text-white
          hover:bg-gray-800
          transition
        "

      >

        <LogOut size={20}/>

        Logout


      </button>




    </aside>

  );

}