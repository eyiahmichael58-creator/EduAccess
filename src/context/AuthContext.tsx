import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import type {
  Session,
  User
} from "@supabase/supabase-js";

import { supabase } from "../lib/supabase";



interface AuthContextType {

  user: User | null;

  session: Session | null;

  loading: boolean;

  logout: () => Promise<void>;

}



export const AuthContext =
  createContext<AuthContextType | undefined>(undefined);





export function AuthProvider({
  children
}:{
  children: React.ReactNode;
}) {


  const [user,setUser] = useState<User | null>(null);

  const [session,setSession] = useState<Session | null>(null);

  const [loading,setLoading] = useState(true);





  useEffect(()=>{


    async function getInitialSession(){


      const {
        data
      } = await supabase.auth.getSession();



      setSession(
        data.session
      );


      setUser(
        data.session?.user ?? null
      );


      setLoading(false);


    }



    getInitialSession();





    const {
      data:{
        subscription
      }

    } = supabase.auth.onAuthStateChange(

      (_event, session)=>{


        setSession(session);


        setUser(
          session?.user ?? null
        );


        setLoading(false);


      }

    );





    return ()=>{

      subscription.unsubscribe();

    };



  },[]);







  async function logout(){


    const {
      error
    } = await supabase.auth.signOut();



    if(error){

      throw error;

    }



    setUser(null);

    setSession(null);


  }








  return (

    <AuthContext.Provider

      value={{

        user,

        session,

        loading,

        logout

      }}

    >

      {children}

    </AuthContext.Provider>

  );

}








// Custom Hook

export function useAuth(){


  const context =
    useContext(AuthContext);




  if(!context){


    throw new Error(

      "useAuth must be used inside AuthProvider"

    );


  }




  return context;


}