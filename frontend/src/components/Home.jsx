import { Link } from "react-router-dom";
import LiveClock from "./LiveClock";


const Home = () => {
  return (
    <main className="relative min-h-[calc(100vh-8rem)] flex items-center justify-center px-6 py-16 sm:py-24 bg-slate-900 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1920&q=80"
        alt="ThoughtSpace Desk Background"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />

      {/* Backdrop Gradient / Dark Overlay */}
      <div className="px-16 absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/75 to-slate-950/85 backdrop-blur-[2px]" />


      {/* Content Box */}
      <div className="  relative z-10 max-w-xl w-full mx-auto text-center bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-32 rounded-3xl shadow-2xl">
        <span className="px-8 inline-block  py-1 mb-5 text-xs font-semibold tracking-wider text-indigo-300 uppercase bg-indigo-500/20 border border-indigo-400/30 rounded-full">
          ThoughtSpace Daily
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Welcome to Your ThoughtSpace
        </h1>


        <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-md mx-auto">
          Capture reflections, track your moods, and revisit your daily milestones in one calm place.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/thoughts"
            className="    "
          >
            Explore Thoughts
          </Link>

          <Link
            to="/form"
            className=""
          >
            + Add New Thought
          </Link>
        </div>
      
      </div>
    </main>
  );
};

export default Home;