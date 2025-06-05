import { useState } from "react";

export default function AuthForm() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  return (
         <div className="relative w-full max-w-md mx-auto mt-[10%]">
            {/* Tab Buttons */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-md shadow-md flex overflow-hidden border border-gray-300 bg-gray-100">
                <button
                className={`px-6 py-2 text-sm font-semibold transition ${
                    mode === 'signin'
                    ? 'bg-red-600 text-white shadow'
                    : 'text-red-600 hover:bg-red-100'
                }`}
                onClick={() => setMode('signin')}
                >
                SIGN IN
                </button>
                <button
                className={`px-6 py-2 text-sm font-semibold transition ${
                    mode === 'signup'
                    ? 'bg-red-600 text-white shadow'
                    : 'text-red-600 hover:bg-red-100'
                }`}
                onClick={() => setMode('signup')}
                >
                SIGN UP
                </button>
            </div>

            {/* Auth Form Container */}
            <div className="rounded-lg shadow-lg pt-12 px-6 pb-8 bg-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-center">
                {mode === 'signin' ? 'SIGN IN' : 'SIGN UP'}
                </h2>

                <form className="space-y-4">
                {mode === 'signup' && (
                    <div>
                    <label className="block text-sm font-semibold">Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring"
                    />
                    </div>
                )}

                <div>
                    <label className="block text-sm font-semibold">Email</label>
                    <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold">Password</label>
                    <div className="flex justify-between text-sm text-red-500">
                    <span></span>
                    {mode === 'signin' && <a href="#">Forgot password?</a>}
                    </div>
                    <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                    {mode === 'signin' ? 'SIGN IN' : 'SIGN UP'}
                </button>

                <div className="text-sm text-center text-red-600 cursor-pointer">
                    {mode === 'signin' ? (
                    <span onClick={() => setMode('signup')}>Create account</span>
                    ) : (
                    <span onClick={() => setMode('signin')}>Already have an account?</span>
                    )}
                </div>
                </form>
            </div>
        </div>

  );
}
