import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import axios from "axios";

const Loginpage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const Submithandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        
       
        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }

        if (!email.includes("@")) {
            setError("Please enter a valid email address");
            return;
        }

        setIsLoading(true);
        
        try {
            const response = await axios.post(
                "http://localhost:3000/login",
                {
                    email,
                    password,
                    role: "user" 
                },
                {
                    withCredentials: true, 
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

         
            if (response.status === 200 || response.status === 302) {
                navigate("/");
                window.location.reload(); // Reload to update auth state
            }
        } catch (err: any) {
            if (err.response?.status === 401) {
                setError("Invalid email or password. Please try again.");
            } else if (err.response?.data) {
                setError(err.response.data);
            } else {
                setError("An error occurred. Please try again later.");
            }
            console.error("Login error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-rose-50 px-4 py-12">
            <div className="w-full max-w-md">
                {/* Logo/Header */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-block">
                        <h1 className="text-3xl font-bold text-rose-600 mb-2">airbnb</h1>
                    </Link>
                    <h2 className="text-2xl font-semibold text-gray-900">Welcome back</h2>
                    <p className="text-gray-600 mt-1">Log in to your account</p>
                </div>

                {/* Login Form */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                    <form onSubmit={Submithandler} className="space-y-5">
                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-10 h-12 border-gray-300 focus:border-rose-500 focus:ring-rose-500 rounded-lg"
                                    disabled={isLoading}
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pl-10 pr-10 h-12 border-gray-300 focus:border-rose-500 focus:ring-rose-500 rounded-lg"
                                    disabled={isLoading}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    disabled={isLoading}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password Link */}
                        <div className="text-right">
                            <Link
                                to="/forgot-password"
                                className="text-sm text-rose-600 hover:text-rose-700 font-medium transition-colors"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Logging in...
                                </span>
                            ) : (
                                "Log in"
                            )}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">or</span>
                        </div>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <Link
                                to="/signup"
                                className="text-rose-600 hover:text-rose-700 font-semibold transition-colors"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>By continuing, you agree to Airbnb's Terms of Service and Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Loginpage;