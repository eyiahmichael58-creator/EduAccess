import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function MyCourses() {


  const navigate = useNavigate();


  const [computingProgress, setComputingProgress] =
    useState(0);





  useEffect(()=>{


    function calculateProgress(){


      const lesson1 =
        localStorage.getItem(
          "lesson1Completed"
        );


      const lesson2 =
        localStorage.getItem(
          "lesson2Completed"
        );



      let completedLessons = 0;



      if(lesson1 === "true"){

        completedLessons++;

      }



      if(lesson2 === "true"){

        completedLessons++;

      }



      const progress =
        (completedLessons / 2) * 100;



      setComputingProgress(progress);


    }



    calculateProgress();



  },[]);






  return (

    <div className="min-h-screen bg-gray-50 p-8">


      <div className="max-w-6xl mx-auto">



        <h1 className="text-3xl font-bold mb-2">

          My Courses

        </h1>




        <p className="text-gray-500 mb-8">

          Continue learning from where you left off.

        </p>







        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">





          {/* Course 1 */}


          <div className="
            bg-white
            rounded-3xl
            border
            border-gray-200
            p-6
          ">



            <BookOpen
              size={34}
              className="mb-4 text-blue-600"
            />




            <h2 className="text-xl font-semibold">

              Introduction to Computing

            </h2>




            <p className="text-gray-500 mt-2">

              Learn computer fundamentals and digital literacy.

            </p>







            <div className="mt-5">


              <div className="
                flex
                justify-between
                text-sm
                mb-2
              ">

                <span>
                  Progress
                </span>


                <span>

                  {computingProgress}%

                </span>


              </div>






              <div className="
                w-full
                bg-gray-200
                rounded-full
                h-3
              ">


                <div

                  className="
                    bg-blue-600
                    h-3
                    rounded-full
                  "


                  style={{

                    width:`${computingProgress}%`

                  }}


                />



              </div>


            </div>








            <button

              onClick={() =>
                navigate("/courses/computing")
              }


              className="
                mt-6
                w-full
                bg-black
                text-white
                rounded-xl
                py-3
                flex
                justify-center
                items-center
                gap-2
              "

            >

              Continue Learning

              <ArrowRight size={18}/>


            </button>




          </div>









          {/* Course 2 */}


          <div className="
            bg-white
            rounded-3xl
            border
            border-gray-200
            p-6
          ">




            <Clock

              size={34}

              className="mb-4 text-green-600"

            />





            <h2 className="text-xl font-semibold">

              Database Systems

            </h2>





            <p className="text-gray-500 mt-2">

              Learn SQL, relational databases and data modeling.

            </p>






            <div className="mt-5">


              <div className="
                flex
                justify-between
                text-sm
                mb-2
              ">


                <span>
                  Progress
                </span>


                <span>
                  45%
                </span>


              </div>






              <div className="
                w-full
                bg-gray-200
                rounded-full
                h-3
              ">


                <div

                  className="
                    bg-green-600
                    h-3
                    rounded-full
                  "


                  style={{

                    width:"45%"

                  }}


                />


              </div>



            </div>







            <button

              onClick={() =>
                navigate("/courses/database")
              }


              className="
                mt-6
                w-full
                bg-black
                text-white
                rounded-xl
                py-3
                flex
                justify-center
                items-center
                gap-2
              "

            >

              Continue Learning

              <ArrowRight size={18}/>


            </button>




          </div>






        </div>


      </div>


    </div>

  );

}