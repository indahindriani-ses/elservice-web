import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import InputText from "../inputs/InputText";
import InputPassword from "../inputs/InputPassword";
import LoginButton from "../buttons/ButtonLogin";

export default function LoginForm() {
  const { login, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
    } catch (err) {
      // Error sudah ditangani di useAuth hook
      console.error("Login error:", err);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-gray-600">Please login to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <InputText
          label="Email"
          value={email}
          onValueChange={setEmail}
          placeholder="Enter your email"
        />

        <InputPassword
          label="Password"
          value={password}
          onValueChange={setPassword}
          placeholder="Enter your password"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
              Forgot password?
            </a>
          </div>
        </div>

        <LoginButton
          label={loading ? "Logging in..." : "Login"}
          onClick={handleSubmit}
          type="submit" 
          disabled={loading}
        />
      </form>
    </div>
  );
}