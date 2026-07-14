import {
  Volume2,
  Mic,
  Type,
  Contrast
} from "lucide-react";


interface AccessibilityCardProps {

  icon: React.ReactNode;

  title: string;

  description: string;

}



export default function AccessibilityCard({

  icon,

  title,

  description

}: AccessibilityCardProps) {


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
        cursor-pointer
      "

    >


      <div

        className="
          w-12
          h-12
          rounded-2xl
          bg-gray-100
          flex
          items-center
          justify-center
          text-black
        "

      >

        {icon}


      </div>





      <h3

        className="
          mt-5
          font-bold
          text-lg
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
          leading-6
        "

      >

        {description}


      </p>



    </div>


  );

}






export function AccessibilityTools(){


  return (

    <div>


      <h2

        className="
          text-2xl
          font-bold
          mb-6
        "

      >

        Accessibility Tools

      </h2>





      <div

        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
        "

      >


        <AccessibilityCard

          icon={<Volume2 size={24}/>}

          title="Text To Speech"

          description="Convert lessons and documents into audio."

        />




        <AccessibilityCard

          icon={<Mic size={24}/>}

          title="Voice Learning"

          description="Navigate and interact using your voice."

        />




        <AccessibilityCard

          icon={<Type size={24}/>}

          title="Text Control"

          description="Adjust text size for comfortable reading."

        />




        <AccessibilityCard

          icon={<Contrast size={24}/>}

          title="High Contrast"

          description="Improve visibility with accessibility modes."

        />



      </div>



    </div>

  );

}