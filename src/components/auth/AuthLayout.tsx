import type { ReactNode } from "react";
import Logo from "./Logo";


interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}


export default function AuthLayout({
  children,
  title,
  description
}: AuthLayoutProps) {


  return (

    <div
      className="
        min-h-screen
        bg-white
        flex
        items-center
        justify-center
        px-6
        py-10
      "
    >


      <div
        className="
          w-full
          max-w-6xl
          grid
          md:grid-cols-2
          gap-12
          lg:gap-20
          items-center
        "
      >



        {/* Mobile Logo */}

        <div
          className="
            md:hidden
            mb-4
          "
        >

          <Logo />

        </div>





        {/* Left Section */}

        <div
          className="
            hidden
            md:block
          "
        >


          <Logo />



          <h2
            className="
              mt-10
              text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              tracking-tight
              text-black
            "
          >

            Learning

            <br />

            without


            <span
              className="
                text-blue-600
              "
            >

              {" "}
              barriers.

            </span>


          </h2>





          <p
            className="
              mt-6
              text-lg
              text-gray-500
              max-w-md
              leading-8
            "
          >

            A simple and accessible learning
            platform designed to support
            every learner.

          </p>





          {/* Illustration */}

          <div
            className="
              mt-10
              max-w-md
              h-52
              rounded-3xl
              bg-gray-50
              border
              border-gray-100
              flex
              items-center
              justify-center
              relative
              overflow-hidden
            "
          >


            <div
              className="
                absolute
                w-48
                h-48
                bg-blue-200
                rounded-full
                blur-3xl
                opacity-70
              "
            />



            <div
              className="
                relative
                text-center
              "
            >


              <div
                className="
                  text-6xl
                "
              >

                🎓

              </div>



              <p
                className="
                  mt-4
                  font-semibold
                  text-gray-700
                "
              >

                Learning for everyone

              </p>



            </div>


          </div>







          {/* Features */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >


            <span
              className="
                px-4
                py-2
                rounded-full
                bg-gray-100
                text-sm
                text-gray-700
              "
            >

              ♿ Accessible

            </span>




            <span
              className="
                px-4
                py-2
                rounded-full
                bg-gray-100
                text-sm
                text-gray-700
              "
            >

              🎧 Voice Support

            </span>





            <span
              className="
                px-4
                py-2
                rounded-full
                bg-gray-100
                text-sm
                text-gray-700
              "
            >

              🤖 Smart Learning

            </span>



          </div>



        </div>









        {/* Form Card */}

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-[32px]
            p-8
            md:p-12
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          "
        >



          <h1
            className="
              text-3xl
              md:text-4xl
              font-bold
              tracking-tight
              text-black
            "
          >

            {title}

          </h1>





          <p
            className="
              mt-3
              text-gray-500
              leading-7
            "
          >

            {description}

          </p>





          <div
            className="
              mt-8
            "
          >

            {children}

          </div>




        </div>



      </div>


    </div>

  );

}