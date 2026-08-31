const URL = import.meta.env.VITE_API_URL;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ThoughtForm = () => {
  const navigate = useNavigate();

  // 1. States for form fields
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [mood, setMood] = useState("😊 Happy");

  // Status states
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  // 2. Submit Handler
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const payload = {
      title,
      description: desc,
      category,
      date,
      mood,
    };

    try {
      const res = await axios.post(`${URL}thought`, payload);
      console.log("Success:", res.data);
      setStatusMessage({ type: "success", text: "Thought saved successfully!" });

      // Reset form
      setTitle("");
      setDesc("");
      setCategory("");

      // Optional: navigate back to thoughts page after 1.5 seconds
      setTimeout(() => navigate("/thoughts"), 1500);
    } catch (err) {
      console.error(err.message);
      setStatusMessage({
        type: "error",
        text: "Could not save thought. Please check your server connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-[calc(100vh-8rem)] flex items-center justify-center py-16 px-6 sm:px-10 lg:px-16 bg-slate-950 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1920&q=80"
        alt="ThoughtSpace Desk Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gentle Frosted Backdrop Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/75 to-slate-950/90 backdrop-blur-[2px]" />

      {/* Form Container Card */}
      <div className="relative z-10 w-full max-w-2xl bg-slate-900/50 backdrop-blur-xl border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-indigo-300 mb-2">
            <span className="text-base">✍️</span>
            <span className="text-xs font-semibold tracking-widest uppercase">
              New Reflection
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Record a Thought
          </h1>
          <p className="mt-1 text-sm text-slate-300">
            Pen down what is on your mind, choose a category, and track your mood.
          </p>
        </div>

        {/* Feedback Alert */}
        {statusMessage && (
          <div
            className={`mb-6 p-4 rounded-xl text-sm font-medium border transition-all ${
              statusMessage.type === "success"
                ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-200"
                : "bg-rose-500/15 border-rose-500/30 text-rose-200"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={submitHandler} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold tracking-wide text-slate-200 uppercase mb-2">
              Title <span className="text-indigo-400">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={100}
              required
              placeholder="e.g., Completed My React Journey"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 transition-all"
            />
          </div>

          {/* Category & Mood Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label className="block text-xs font-semibold tracking-wide text-slate-200 uppercase mb-2">
                Category <span className="text-indigo-400">*</span>
              </label>
              <select
                name="category"
                value={category}
                required
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 transition-all"
              >
                <option value="" disabled className="bg-slate-900 text-slate-400">
                  Select category
                </option>
                <option value="Education" className="bg-slate-900">Education</option>
                <option value="Learning" className="bg-slate-900">Learning</option>
                <option value="Coding" className="bg-slate-900">Coding</option>
                <option value="Hobbies" className="bg-slate-900">Hobbies</option>
                <option value="Literature" className="bg-slate-900">Literature</option>
                <option value="Poetry" className="bg-slate-900">Poetry</option>
                <option value="Writing" className="bg-slate-900">Writing</option>
                <option value="Cooking" className="bg-slate-900">Cooking</option>
                <option value="Others" className="bg-slate-900">Others</option>
              </select>
            </div>

            {/* Mood Selector */}
            <div>
              <label className="block text-xs font-semibold tracking-wide text-slate-200 uppercase mb-2">
                Current Mood
              </label>
              <select
                name="mood"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 transition-all"
              >
                <option value="😊 Happy" className="bg-slate-900">😊 Happy</option>
                <option value="📚 Motivated" className="bg-slate-900">📚 Motivated</option>
                <option value="🚀 Excited" className="bg-slate-900">🚀 Excited</option>
                <option value="☕ Calm" className="bg-slate-900">☕ Calm</option>
                <option value="💡 Inspired" className="bg-slate-900">💡 Inspired</option>
                <option value="🔥 Focused" className="bg-slate-900">🔥 Focused</option>
                <option value="😐 Okk Okk" className="bg-slate-900">😐 Okk Okk</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold tracking-wide text-slate-200 uppercase mb-2">
              Description <span className="text-indigo-400">*</span>
            </label>
            <textarea
              name="description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={5}
              required
              placeholder="What are your thoughts, breakthroughs, or notes for today?"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 transition-all resize-none leading-relaxed"
            ></textarea>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-xs font-semibold tracking-wide text-slate-200 uppercase mb-2">
              Entry Date
            </label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 transition-all [color-scheme:dark]"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:flex-1 py-3.5 px-6 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800/60 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              {loading ? "Saving Thought..." : "Save Thought"}
            </button>

            <Link
              to="/thoughts"
              className="w-full sm:w-auto py-3.5 px-6 bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white font-semibold text-sm border border-white/15 rounded-xl transition-all text-center"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ThoughtForm;