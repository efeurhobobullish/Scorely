import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { Header } from "@/components/ui";

export default function Login() {
  return (
    <>
      <Header />

      <div className="min-h-[calc(100dvh-72px)] flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-background border border-line rounded-2xl p-8 shadow-sm">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-main">Welcome back</h1>
            <p className="text-sm text-muted mt-1">
              Sign in to continue to{" "}
              <span className="font-medium text-main">Scorely</span>
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-main mb-1">
                Email address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full h-12 pl-10 pr-4 rounded-xl border border-line bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-main mb-1">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-12 pl-10 pr-4 rounded-xl border border-line bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-muted">
                <input
                  type="checkbox"
                  className="rounded border-line text-primary focus:ring-primary"
                />
                Remember me
              </label>

              <Link
                to="/auth/forgot-password"
                className="text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-12 rounded-full bg-primary text-white font-semibold hover:opacity-90 transition"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted">
              Don’t have an account?{" "}
              <Link
                to="/auth/register"
                className="text-primary font-medium hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}