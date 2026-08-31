const URL = import.meta.env.VITE_API_URL;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const Thoughts = () => {
    const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Fetch thoughts from Backend API
  const fetchThoughts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${URL}thoughts`);
      // Adjust according to backend response shape (e.g., response.data or response.data.thoughts)
      setThoughts(Array.isArray(response.data) ? response.data : response.data.thoughts || []);
    } catch (err) {
      console.error("Error fetching thoughts:", err);
      setError("Failed to load your thoughts. Please check if your server is running.");
    } finally {
      setLoading(false);
    }
  };

 
// 2. Delete Thought Handler
  const deleteThought = async (id) => {
    // Optional: Ask for confirmation before deleting
    const confirmDelete = window.confirm("Are you sure you want to delete this thought?");
    if (!confirmDelete) return;

    try {
      console.log(id)
      await axios.delete(`${URL}thought/${id}`);
      
      // Update UI immediately by removing the deleted item from state
      setThoughts((prevThoughts) =>
        prevThoughts.filter((thought) => (thought._id || thought.id) !== id)
      );

      alert("Deleted successfully!");
    } catch (err) {
      console.error(err);
      setError("Could not delete thought. Please try again.");
    }
  };
  useEffect(() => {
    fetchThoughts();
  }, []);
  return (
    <main className="relative min-h-screen py-16 px-6 sm:px-10 lg:px-16 bg-slate-950 overflow-hidden flex flex-col justify-start">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1920&q=80"
        alt="ThoughtSpace Desk Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gentle, balanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/85 backdrop-blur-[2px]" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-indigo-300 mb-2">
              <span className="text-base">✦</span>
              <span className="text-xs font-semibold tracking-widest uppercase">
                Thought Collection
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Reflections & Ideas
            </h1>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-lg leading-relaxed">
              Explore your archive of daily thoughts, inspirations, and key moments.
            </p>
          </div>

          <Link
            to="/form"
            className="inline-flex items-center gap-2 self-start sm:self-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-2xl shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span className="text-base leading-none">+</span>
            <span>Write Thought</span>
          </Link>
        </div>

        {/* Soothing Frosted Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {thoughts.map((thought) => (
            <article
              key={thought.id}
              className="group flex flex-col justify-between rounded-3xl p-7 bg-slate-900/40 hover:bg-slate-900/55 backdrop-blur-md border border-white/15 hover:border-indigo-400/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Top Bar: Date & Mood */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                    <span>🗓</span>
                    {new Date(thought.date).toLocaleDateString()} - {new Date(thought.date).toLocaleTimeString()}
                  </span>

                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/15 text-slate-100 backdrop-blur-sm">
                    {thought.mood}
                  </span>
                </div>

                {/* Category Pill */}
                <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold text-indigo-300 uppercase tracking-wider bg-indigo-500/20 border border-indigo-400/30 mb-3">
                  #{thought.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-indigo-200 transition-colors">
                  {thought.title}
                </h2>

                {/* Description */}
                <p className="text-slate-200/90 text-sm leading-relaxed font-normal">
                  {thought.description}
                </p>
              </div>
              

              {/* Softer Card Footer */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <span>⏱</span>
                  <span>1 min read</span>
                </span>
                {/* Delete Trigger Button */}
                    <button
                      type="button"
                      onClick={() => deleteThought(thought._id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-rose-400 hover:text-white bg-rose-500/10 hover:bg-rose-600 border border-rose-500/20 transition-all duration-200"
                    >
                      <span>🗑</span>
                      <span className="font-semibold">Delete</span>
                    </button>

                <button
                  type="button"
                  className="text-indigo-300 hover:text-indigo-200 font-semibold inline-flex items-center gap-1 transition-colors"
               
                >
                  <span>Read line</span>
                  <span>-</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Thoughts;