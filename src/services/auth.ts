import { supabase } from "../lib/supabase";

export type UserRole = "student" | "teacher" | "admin";

export interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  role: UserRole;
  disability_type?: string | null;
  avatar_url?: string | null;
}