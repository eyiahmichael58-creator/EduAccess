import {
  Database,
  PlayCircle
} from "lucide-react";


import { useNavigate } from "react-router-dom";



export default function DatabaseDetails(){


  const navigate = useNavigate();



  return (

    <div className="
      min-h-screen
      bg-gray-50
      p-8
    ">


      <div className="
        max-w-5xl
        mx-auto
        bg-white
        rounded-3xl
        border
        p-8
      ">



        <div className="
          flex
          items-center
          gap-4
          mb-6
        ">


          <Database size={40}/>



          <div>


            <h1 className="
              text-3xl
              font-bold
            ">

              Database Systems

            </h1>


            <p className="text-gray-500">

              Learn SQL, relational databases and data modelling.

            </p>


          </div>


        </div>





        <h2 className="
          text-xl
          font-bold
          mb-4
        ">

          Course Lessons

        </h2>





        <div className="
          flex
          justify-between
          items-center
          p-5
          rounded-2xl
          bg-gray-50
          border
        ">


          <div>

            <h3 className="font-semibold">

              Lesson 1: Introduction to Databases

            </h3>


            <p className="text-sm text-gray-500">

              Learn database concepts and SQL basics.

            </p>


          </div>





          <button

            onClick={() =>
              navigate("/courses/database/lesson/1")
            }


            className="
              flex
              items-center
              gap-2
              bg-black
              text-white
              px-5
              py-3
              rounded-xl
            "

          >

            <PlayCircle size={18}/>

            Start


          </button>



        </div>





      </div>


    </div>

  );

}