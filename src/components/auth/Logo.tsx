import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";


function Logo(){

  return (

    <motion.div
      initial={{
        opacity:0,
        y:-10
      }}

      animate={{
        opacity:1,
        y:0
      }}

      className="
        flex
        items-center
        gap-3
      "
    >

      <div
        className="
          w-12
          h-12
          rounded-2xl
          bg-blue-600
          flex
          items-center
          justify-center
        "
      >

        <GraduationCap
          className="text-white"
          size={24}
        />

      </div>


      <div>

        <h1 className="text-2xl font-bold">
          EduAccess
        </h1>

        <p className="text-sm text-gray-500">
          Accessible Learning Platform
        </p>

      </div>


    </motion.div>

  );

}


export default Logo;