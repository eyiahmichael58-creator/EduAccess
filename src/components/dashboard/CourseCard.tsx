interface CourseCardProps {
  title: string;
  progress: number;
  lessons: number;
}


export default function CourseCard({
  title,
  progress,
  lessons
}: CourseCardProps) {


  return (

    <div

      className="
        bg-white
        border
        border-gray-200
        rounded-3xl
        p-6
        hover:shadow-lg
        transition
      "

    >


      {/* Course Icon */}

      <div

        className="
          w-12
          h-12
          rounded-2xl
          bg-black
          text-white
          flex
          items-center
          justify-center
          font-bold
          text-xl
        "

      >

        📚

      </div>





      {/* Title */}

      <h3

        className="
          mt-5
          text-xl
          font-bold
          text-black
        "

      >

        {title}

      </h3>





      <p

        className="
          mt-2
          text-sm
          text-gray-500
        "

      >

        {lessons} lessons available

      </p>






      {/* Progress */}

      <div className="mt-6">


        <div

          className="
            flex
            justify-between
            text-sm
            mb-2
          "

        >

          <span className="text-gray-500">

            Progress

          </span>


          <span className="font-semibold">

            {progress}%

          </span>


        </div>





        <div

          className="
            h-3
            bg-gray-100
            rounded-full
            overflow-hidden
          "

        >

          <div

            className="
              h-full
              bg-black
              rounded-full
              transition-all
            "

            style={{
              width:`${progress}%`
            }}

          />


        </div>



      </div>







      {/* Button */}

      <button

        className="
          mt-6
          w-full
          h-12
          rounded-2xl
          bg-black
          text-white
          font-semibold
          hover:bg-gray-800
          transition
        "

      >

        Continue Learning

      </button>




    </div>


  );

}