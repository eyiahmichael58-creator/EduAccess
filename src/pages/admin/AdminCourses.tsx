import { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import { supabase } from "../../lib/supabase";



export default function AdminCourses(){


  const [courses,setCourses] = useState<any[]>([]);


  const [title,setTitle] = useState("");

  const [description,setDescription] = useState("");





  async function fetchCourses(){


    const { data, error } = await supabase

      .from("courses")

      .select("*")

      .order("created_at", {
        ascending:false
      });



    if(error){

      console.log(error);

      return;

    }



    setCourses(data || []);


  }






  useEffect(()=>{

    fetchCourses();

  },[]);








  async function createCourse(){


    if(!title || !description){

      alert("Please fill all fields");

      return;

    }




    const { error } = await supabase

      .from("courses")

      .insert({

        title,

        description

      });




    if(error){

      console.log(error);

      alert("Course creation failed");

      return;

    }




    setTitle("");

    setDescription("");



    fetchCourses();


  }







  return (

    <div className="
      min-h-screen
      bg-gray-50
      p-8
    ">


      <div className="
        max-w-5xl
        mx-auto
      ">



        <h1 className="
          text-3xl
          font-bold
          mb-8
        ">

          Admin Course Management

        </h1>






        <div className="
          bg-white
          rounded-3xl
          border
          p-6
          mb-8
        ">



          <h2 className="
            text-xl
            font-bold
            mb-5
          ">

            Create New Course

          </h2>






          <input

            value={title}

            onChange={(e)=>
              setTitle(e.target.value)
            }

            placeholder="Course title"

            className="
              w-full
              border
              rounded-xl
              p-3
              mb-4
            "

          />






          <textarea

            value={description}

            onChange={(e)=>
              setDescription(e.target.value)
            }

            placeholder="Course description"

            className="
              w-full
              border
              rounded-xl
              p-3
              mb-4
            "

          />







          <button

            onClick={createCourse}

            className="
              bg-black
              text-white
              px-6
              py-3
              rounded-xl
              flex
              items-center
              gap-2
            "

          >

            <PlusCircle size={20}/>

            Create Course


          </button>



        </div>









        <div className="
          grid
          md:grid-cols-2
          gap-6
        ">



          {
            courses.map((course)=>(


              <div

                key={course.id}

                className="
                  bg-white
                  border
                  rounded-3xl
                  p-6
                "

              >


                <h3 className="
                  text-xl
                  font-bold
                ">

                  {course.title}

                </h3>




                <p className="
                  text-gray-500
                  mt-2
                ">

                  {course.description}

                </p>


              </div>


            ))
          }



        </div>



      </div>


    </div>

  );

}