import { useState } from "react";
import type { ReactNode } from "react";
import { Eye, EyeOff } from "lucide-react";


interface InputFieldProps {

  label: string;

  name: string;

  type?: string;

  placeholder: string;

  value: string;

  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;

  icon?: ReactNode;

}



export default function InputField({

  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  icon

}: InputFieldProps) {


  const [showPassword,setShowPassword] = useState(false);



  const inputType =
    type === "password" && showPassword
    ? "text"
    : type;



  return (

    <div className="space-y-2">


      <label

        htmlFor={name}

        className="
          text-sm
          font-medium
          text-gray-800
        "

      >

        {label}

      </label>




      <div className="relative">


        {/* Left Icon */}

        {icon && (

          <div

            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-400
            "

          >

            {icon}

          </div>

        )}






        <input

          id={name}

          name={name}

          type={inputType}

          placeholder={placeholder}

          value={value}

          onChange={onChange}

          required

          className={`
            w-full
            h-14
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            text-gray-900
            outline-none
            transition
            focus:border-black
            focus:bg-white
            ${icon ? "pl-12" : "px-5"}
            ${type==="password" ? "pr-12" : ""}
          `}

        />






        {/* Password Toggle */}

        {
          type === "password" && (

            <button

              type="button"

              onClick={()=>setShowPassword(!showPassword)}

              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-gray-400
                hover:text-black
              "

            >

              {
                showPassword
                ?
                <EyeOff size={20}/>
                :
                <Eye size={20}/>
              }


            </button>

          )

        }



      </div>


    </div>

  );

}