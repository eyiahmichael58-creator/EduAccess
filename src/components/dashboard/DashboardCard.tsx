import { useNavigate } from "react-router-dom";


interface Props {

  title: string;

  description: string;

  icon: React.ReactNode;

}



export default function DashboardCard({

  title,

  description,

  icon

}: Props) {



  const navigate = useNavigate();




  function handleClick(){


    if(title === "My Courses"){

      navigate("/courses");

    }


  }






  return (

    <div


      onClick={handleClick}


      className={`
        bg-white
        border
        border-gray-200
        rounded-3xl
        p-6
        hover:shadow-lg
        transition
        cursor-pointer
      `}


    >



      <div

        className="
          mb-4
          text-black
        "

      >

        {icon}

      </div>





      <h3

        className="
          text-xl
          font-bold
        "

      >

        {title}

      </h3>






      <p

        className="
          mt-2
          text-gray-500
        "

      >

        {description}

      </p>





    </div>

  );

}