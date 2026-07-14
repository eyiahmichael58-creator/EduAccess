import { useAuth } from "../../context/AuthContext";


export default function Header(){


  const { user } = useAuth();



  const name =
    user?.user_metadata?.full_name || "User";



  return (

    <header

      className="
        h-20
        bg-white
        border-b
        border-gray-200
        px-8
        flex
        items-center
        justify-between
      "

    >


      <div>

        <h2 className="
          text-2xl
          font-bold
        ">

          Welcome back, {name} 👋

        </h2>


        <p className="
          text-gray-500
        ">

          Continue learning today

        </p>


      </div>




      <div

        className="
          w-12
          h-12
          rounded-full
          bg-black
          text-white
          flex
          items-center
          justify-center
          font-bold
        "

      >

        {name.charAt(0).toUpperCase()}


      </div>



    </header>

  );

}