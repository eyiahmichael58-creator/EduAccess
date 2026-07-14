import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock
} from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import InputField from "../../components/auth/InputField";
import PrimaryButton from "../../components/auth/PrimaryButton";

import { loginUser } from "../../services/auth";


export default function Login() {


  const navigate = useNavigate();



  const [formData,setFormData] = useState({

    email:"",
    password:""

  });



  const [loading,setLoading] = useState(false);

  const [error,setError] = useState("");





  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ){

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  }







  async function handleSubmit(
    e: React.FormEvent
  ){

    e.preventDefault();


    setLoading(true);

    setError("");



    try{


      await loginUser(

        formData.email,

        formData.password

      );



      navigate("/dashboard");



    }
    catch(err:any){


      setError(err.message);


    }
    finally{


      setLoading(false);


    }


  }








  return (


    <AuthLayout

      title="Welcome Back"

      description="Login to continue your accessible learning journey."

    >




      <form

        onSubmit={handleSubmit}

        className="
          space-y-6
        "

      >





        <InputField

          label="Email Address"

          name="email"

          type="email"

          placeholder="Enter your email address"

          value={formData.email}

          onChange={handleChange}

          icon={<Mail size={20}/>}

        />







        <InputField

          label="Password"

          name="password"

          type="password"

          placeholder="Enter your password"

          value={formData.password}

          onChange={handleChange}

          icon={<Lock size={20}/>}

        />







        {
          error &&

          <div

            className="
              rounded-xl
              bg-red-50
              border
              border-red-200
              p-3
              text-sm
              text-red-700
            "

          >

            {error}

          </div>

        }








        <div

          className="
            flex
            justify-end
          "

        >

          <button

            type="button"

            className="
              text-sm
              text-gray-500
              hover:text-black
            "

          >

            Forgot password?

          </button>


        </div>







        <PrimaryButton

          loading={loading}

        >

          Login

        </PrimaryButton>







        <p

          className="
            text-center
            text-sm
            text-gray-500
          "

        >

          Don't have an account?


          <button

            type="button"

            onClick={()=>navigate("/register")}

            className="
              ml-2
              text-black
              font-semibold
              underline
              underline-offset-4
            "

          >

            Create Account

          </button>


        </p>






      </form>



    </AuthLayout>


  );

}