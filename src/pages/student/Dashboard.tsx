import {
  BookOpen,
  Accessibility,
  Volume2
} from "lucide-react";


import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import DashboardCard from "../../components/dashboard/DashboardCard";
import AccessibilityPanel from "../../components/accessibility/AccessibilityPanel";



export default function Dashboard() {


  return (

    <div
      className="
        min-h-screen
        bg-gray-50
        flex
      "
    >



      {/* Sidebar */}

      <Sidebar />






      {/* Main Content */}

      <div
        className="
          flex-1
        "
      >



        {/* Header */}

        <Header />






        <main
          className="
            p-8
          "
        >




          {/* Dashboard Cards */}

          <div
            className="
              grid
              md:grid-cols-3
              gap-6
            "
          >



            <DashboardCard

              title="My Courses"

              description="
                Access your enrolled courses
                and continue learning.
              "

              icon={
                <BookOpen size={32}/>
              }

            />





            <DashboardCard

              title="Accessibility Tools"

              description="
                Customize your learning
                experience.
              "

              icon={
                <Accessibility size={32}/>
              }

            />





            <DashboardCard

              title="Voice Learning"

              description="
                Learn using text-to-speech
                and voice support.
              "

              icon={
                <Volume2 size={32}/>
              }

            />



          </div>








          {/* Accessibility Section */}

          <div
            className="
              mt-10
              grid
              md:grid-cols-2
              gap-6
            "
          >



            {/* Accessibility Panel */}

            <AccessibilityPanel />






            {/* Recent Activity */}

            <div

              className="
                bg-white
                rounded-3xl
                border
                border-gray-200
                p-8
              "

            >


              <h2

                className="
                  text-2xl
                  font-bold
                  text-black
                "

              >

                Recent Activity

              </h2>



              <p

                className="
                  mt-3
                  text-gray-500
                  leading-7
                "

              >

                Your learning activities,
                completed lessons and progress
                will appear here.

              </p>



            </div>



          </div>






        </main>



      </div>



    </div>

  );

}