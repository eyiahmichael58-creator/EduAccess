import {
  PlayCircle,
  Volume2,
  CheckCircle
} from "lucide-react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Lesson(){


  const { lessonId } = useParams();


  const [completed,setCompleted] = useState(false);



  const lessonData:any = {


    "1": {

      title:"Lesson 1: Computer Fundamentals",

      description:
      "Learn the basic concepts of computers, their components and how they work.",

      notes:
      "A computer is an electronic device that receives input, processes data, stores information and produces output. Computers are made up of hardware and software components."

    },



    "2": {

      title:"Lesson 2: Hardware Components",

      description:
      "Learn about the main parts that make up a computer system.",

      notes:
      "Hardware refers to the physical parts of a computer such as the CPU, monitor, keyboard, mouse and storage devices."

    }


  };





  const lesson =
    lessonData[lessonId || "1"];





  useEffect(()=>{


    const saved =
      localStorage.getItem(
        `lesson${lessonId}Completed`
      );


    if(saved==="true"){

      setCompleted(true);

    }


  },[lessonId]);








  function readLesson(){


    const text =
      document.body.innerText;


    const speech =
      new SpeechSynthesisUtterance(text);


    speech.lang="en-US";


    window.speechSynthesis.speak(
      speech
    );


  }







  function completeLesson(){


    setCompleted(true);


    localStorage.setItem(

      `lesson${lessonId}Completed`,

      "true"

    );


  }






  function resetLesson(){


    localStorage.removeItem(

      `lesson${lessonId}Completed`

    );


    setCompleted(false);


  }








  return (

    <div className="min-h-screen bg-gray-50 p-8">


      <div className="
        max-w-5xl
        mx-auto
        bg-white
        rounded-3xl
        border
        p-8
      ">



        <h1 className="text-3xl font-bold mb-4">

          {lesson.title}

        </h1>




        <p className="text-gray-500 mb-8">

          {lesson.description}

        </p>





        <div className="
          bg-black
          h-64
          rounded-3xl
          flex
          items-center
          justify-center
          text-white
          mb-8
        ">


          <PlayCircle size={60}/>


        </div>






        <div className="
          bg-gray-50
          rounded-2xl
          p-6
          mb-6
        ">


          <h2 className="text-xl font-bold mb-3">

            Lesson Notes

          </h2>



          <p className="text-gray-600 leading-7">

            {lesson.notes}

          </p>


        </div>








        <button

          onClick={readLesson}

          className="
            w-full
            bg-gray-100
            py-4
            rounded-xl
            flex
            justify-center
            items-center
            gap-3
            mb-4
          "

        >

          <Volume2 size={20}/>

          Read Lesson Aloud


        </button>







        <button

          onClick={completeLesson}

          disabled={completed}

          className={`
            w-full
            py-4
            rounded-xl
            text-white
            flex
            justify-center
            items-center
            gap-3

            ${
              completed
              ?
              "bg-green-600"
              :
              "bg-black"
            }

          `}

        >

          <CheckCircle size={20}/>


          {

            completed
            ?
            "Lesson Completed ✓"
            :
            "Mark Lesson Complete"

          }


        </button>






        {
          completed && (

            <button

              onClick={resetLesson}

              className="
                mt-3
                w-full
                py-3
                rounded-xl
                bg-red-100
                text-red-700
              "

            >

              Reset Completion

            </button>

          )
        }




      </div>


    </div>

  );

}