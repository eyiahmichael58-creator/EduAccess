import { supabase } from "../lib/supabase";


// Register user

export async function registerUser(
  email: string,
  password: string,
  full_name: string,
  role: string = "student"
) {

  const { data, error } =
    await supabase.auth.signUp({

      email,

      password,

      options: {

        data: {

          full_name,

          role,

        },

      },

    });


  if (error) {

    throw error;

  }


  return data;

}



// Login user

export async function loginUser(
  email: string,
  password: string
) {

  const { data, error } =
    await supabase.auth.signInWithPassword({

      email,

      password,

    });


  if(error){

    throw error;

  }


  return data;

}



// Logout user

export async function logoutUser(){

  const { error } =
    await supabase.auth.signOut();


  if(error){

    throw error;

  }

}