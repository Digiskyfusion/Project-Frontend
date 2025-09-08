import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const URL= import.meta.env.VITE_API_URL

    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState("");

    // Extract token from URL
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const resetToken = urlParams.get("token");
        
        if (resetToken) {
            setToken(resetToken);
        } else {
            setMessage("Invalid reset link.");
        }
    }, []);

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (!password || !confirmPassword) {
            return setMessage("Please enter a new password.");
        }
        if (password !== confirmPassword) {
            return setMessage("Passwords do not match.");
        }

        setLoading(true);
        try {
            const response = await fetch(`${URL}/api/reset-password?token=${token}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ password }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                setTimeout(() => {
                    navigate("/registration");
                }, 2000);
            } else {
                setMessage(data.message || "Failed to reset password.");
            }
        } catch (error) {
            setMessage("Something went wrong.", error);
        }
        setLoading(false);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Reset Password</h2>
                {message && <p className="text-center text-green-500">{message}</p>}

                <form onSubmit={handleResetPassword} className="space-y-4">
                    <input
                        type="password"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        disabled={loading}
                    >
                        {loading ? "Resetting..." : "Reset Password"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
