import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { HomeScreenContent } from "./HomeScreenContent";
import {
  projectId,
  publicAnonKey,
} from "../utils/supabase/info";

// Import the Lattmat logo and auth UI image
import imgLattmat2 from "../imports/figma:asset/368080d9df66133b0a78eb531bbeff0043586346.png";
import authUIImage from "figma:asset/1ebf5b8d95824edc05dbf05d01ae1a0a22581808.png";

interface AuthenticationPageProps {
  onClose: () => void;
  onSuccess: (userData: {
    name: string;
    email?: string;
    phone?: string;
  }) => void;
}

export function AuthenticationPage({
  onClose,
  onSuccess,
}: AuthenticationPageProps) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
  });
  const [showNameInput, setShowNameInput] = useState(false);
  const [googleUserData, setGoogleUserData] = useState<{
    email: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [nameInputValue, setNameInputValue] = useState("");

  // Initialize Supabase client for frontend use
  const supabase = createClient(
    `https://${projectId}.supabase.co`,
    publicAnonKey,
  );

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePhoneSignUp = async () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.password
    ) {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      // Call the backend signup endpoint
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-ecf3a44f/signup`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: `${formData.phone}@lattmat.temp`, // Use phone as email for signup
            password: formData.password,
            name: formData.name,
            phone: formData.phone,
          }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Signup failed");
      }

      const data = await response.json();
      console.log("Phone signup successful:", data);

      onSuccess({
        name: formData.name,
        phone: formData.phone,
      });
    } catch (error) {
      console.error("Phone signup error:", error);
      alert(
        `Signup failed: ${error instanceof Error ? error.message : "Please try again."}`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneSignIn = async () => {
    if (!formData.phone || !formData.password) {
      alert("Please fill in phone number and password");
      return;
    }

    setIsLoading(true);

    try {
      // Use Supabase auth to sign in with phone as email
      const { data, error } =
        await supabase.auth.signInWithPassword({
          email: `${formData.phone}@lattmat.temp`,
          password: formData.password,
        });

      if (error) {
        throw error;
      }

      console.log("Phone sign in successful:", data);

      // Get user metadata which should contain the name
      const userName = data.user?.user_metadata?.name || "User";

      onSuccess({
        name: userName,
        phone: formData.phone,
      });
    } catch (error) {
      console.error("Phone signin error:", error);
      alert(
        `Sign in failed: ${error instanceof Error ? error.message : "Please try again."}`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setIsLoading(true);

    try {
      console.log("Initiating Google OAuth...");

      // Use Supabase's Google OAuth
      const { data, error } =
        await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: window.location.origin,
          },
        });

      if (error) {
        throw error;
      }

      console.log("Google OAuth initiated successfully:", data);

      // Note: The actual authentication will happen via redirect
      // We'll handle the session check in a useEffect or similar
    } catch (error) {
      console.error("Google auth error:", error);
      alert(
        `Google authentication failed: ${error instanceof Error ? error.message : "Please try again."}`,
      );
      setIsLoading(false);
    }
  };

  // Check for existing session on component mount
  useState(() => {
    const checkSession = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error) {
          console.error("Session check error:", error);
          return;
        }

        if (session?.user) {
          console.log("Found existing session:", session.user);

          // Check if user has a name in metadata
          const userName = session.user.user_metadata?.name;
          const userEmail = session.user.email;

          if (userName) {
            // User has a name, complete the authentication
            onSuccess({
              name: userName,
              email: userEmail,
            });
          } else if (userEmail) {
            // User doesn't have a name yet, show name input
            setGoogleUserData({ email: userEmail });
            setShowNameInput(true);
          }
        }
      } catch (error) {
        console.error("Error checking session:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();
  });

  const handleNameSubmit = async () => {
    if (!nameInputValue.trim()) {
      alert("Please enter your name");
      return;
    }

    setIsLoading(true);

    try {
      // Update user metadata with the name
      const { error } = await supabase.auth.updateUser({
        data: { name: nameInputValue.trim() },
      });

      if (error) {
        throw error;
      }

      console.log("User name updated successfully");

      if (googleUserData) {
        onSuccess({
          name: nameInputValue.trim(),
          email: googleUserData.email,
        });
      }
    } catch (error) {
      console.error("Error updating user name:", error);
      alert(
        `Failed to save name: ${error instanceof Error ? error.message : "Please try again."}`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToAuth = () => {
    setShowNameInput(false);
    setGoogleUserData(null);
    setNameInputValue("");
  };

  const handleSubmit = () => {
    if (isSignUp) {
      handlePhoneSignUp();
    } else {
      handlePhoneSignIn();
    }
  };

  return (
    <>
      <div className="min-h-screen relative flex items-center justify-center px-4 py-8 animate-in fade-in duration-300">
        {/* Background Home Screen */}
        <div className="absolute inset-0 z-0">
          <HomeScreenContent />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.21)] bg-opacity-25"></div>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full relative z-10 animate-in zoom-in-95 duration-300 border border-white/20">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Header Tabs - Hide when showing name input */}
          {!showNameInput && (
            <div className="flex bg-gray-50">
              <button
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-4 px-6 text-center transition-all duration-200 font-medium ${
                  isSignUp
                    ? "text-white bg-blue-700 shadow-lg"
                    : "text-blue-700 bg-gray-50 hover:bg-blue-50"
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-4 px-6 text-center transition-all duration-200 font-medium ${
                  !isSignUp
                    ? "text-white bg-blue-700 shadow-lg"
                    : "text-blue-700 bg-gray-50 hover:bg-blue-50"
                }`}
              >
                Log In
              </button>
            </div>
          )}

          {/* Content */}
          <div className="p-8">
            {showNameInput ? (
              /* Name Input Card */
              <div>
                {/* Header with back button */}
                <div className="flex items-center mb-6">
                  <button
                    onClick={handleBackToAuth}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-3"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <h3 className="text-lg font-medium text-gray-900">
                    Complete Your Profile
                  </h3>
                </div>

                {/* Welcome Content */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-blue-700 text-xl font-medium mb-2">
                    Welcome to Lattmat!
                  </h2>
                  <p className="text-gray-600">
                    Please enter your name to complete your
                    profile
                  </p>
                </div>

                {/* Name Input */}
                <div className="mb-6">
                  <label className="block text-gray-800 text-base font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={nameInputValue}
                    onChange={(e) =>
                      setNameInputValue(e.target.value)
                    }
                    onKeyPress={(e) =>
                      e.key === "Enter" && handleNameSubmit()
                    }
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    autoFocus
                  />
                </div>

                {/* Continue Button */}
                <button
                  onClick={handleNameSubmit}
                  disabled={!nameInputValue.trim() || isLoading}
                  className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Saving...</span>
                    </div>
                  ) : (
                    "Continue"
                  )}
                </button>
              </div>
            ) : (
              /* Regular Auth Form */
              <div>
                {/* Logo and Branding */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4 transform hover:scale-105 transition-transform duration-200">
                    <ImageWithFallback
                      src={imgLattmat2}
                      alt="Lattmat"
                      className="h-16"
                    />
                  </div>
                  <h2 className="text-blue-700 text-xl font-medium mb-2">
                    Lattmat
                  </h2>
                  <p className="text-blue-700 text-lg">
                    Don't miss your happiness
                  </p>
                </div>

                {/* Phone Number Input */}
                <div className="mb-4">
                  <label className="block text-gray-800 text-base font-medium mb-2">
                    Phone Number
                  </label>
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-3 py-3 border-r border-gray-300">
                      <span className="text-gray-700">+95</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange(
                          "phone",
                          e.target.value,
                        )
                      }
                      className="flex-1 px-3 py-3 text-gray-700 placeholder-gray-400 border-none outline-none"
                    />
                  </div>
                </div>

                {/* Name Input (Only for Sign Up) */}
                {isSignUp && (
                  <div className="mb-4">
                    <label className="block text-gray-800 text-base font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange(
                          "name",
                          e.target.value,
                        )
                      }
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                )}

                {/* Password Input */}
                <div className="mb-4">
                  <label className="block text-gray-800 text-base font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="enter your password"
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange(
                          "password",
                          e.target.value,
                        )
                      }
                      className="w-full px-3 py-3 pr-12 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {!isSignUp && (
                    <div className="text-right mt-2">
                      <button className="text-sm text-gray-600 hover:text-blue-700">
                        forget password?
                      </button>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={
                    isLoading ||
                    (!isSignUp &&
                      (!formData.phone ||
                        !formData.password)) ||
                    (isSignUp &&
                      (!formData.name ||
                        !formData.phone ||
                        !formData.password))
                  }
                  className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed mb-6 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </div>
                  ) : isSignUp ? (
                    "Sign Up"
                  ) : (
                    "Log in"
                  )}
                </button>

                {/* Divider */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">
                      or
                    </span>
                  </div>
                </div>

                {/* Google Sign In */}
                <button
                  onClick={handleGoogleAuth}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center space-x-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    {isSignUp ? "Sign up" : "Sign in"} with
                    Gmail
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}