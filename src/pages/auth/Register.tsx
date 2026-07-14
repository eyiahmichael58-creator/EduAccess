import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import InputField from "../../components/auth/InputField";
import PrimaryButton from "../../components/auth/PrimaryButton";

import { registerUser } from "../../services/auth";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const result = await registerUser(
        formData.email.trim(),
        formData.password,
        formData.full_name.trim(),
        formData.role
      );

      console.log("Registration Result:", result);

      if (result?.user) {
        setSuccess("Account created successfully! Redirecting to login...");

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setError("Unable to create account. Please try again.");
      }
    } catch (err: any) {
      console.error("Registration Error:", err);

      setError(
        err?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      title="Create Account"
      description="Start your accessible learning journey today."
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <InputField
          label="Full Name"
          name="full_name"
          placeholder="Enter your full name"
          value={formData.full_name}
          onChange={handleChange}
          icon={<User size={20} />}
        />

        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          icon={<Mail size={20} />}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          icon={<Lock size={20} />}
        />

        <p className="text-xs text-gray-500 -mt-3">
          Password must contain at least 6 characters.
        </p>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-800">
            Account Type
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="
              w-full
              h-14
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              px-5
              text-gray-700
              outline-none
              transition
              focus:bg-white
              focus:border-black
            "
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
            {success}
          </div>
        )}

        <PrimaryButton loading={loading}>
          Create Account
        </PrimaryButton>

        <p className="text-center text-sm text-gray-500">
          Already have an account?

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="ml-2 font-semibold text-black underline underline-offset-4 hover:text-blue-600 transition"
          >
            Login
          </button>
        </p>
      </form>
    </AuthLayout>
  );
}