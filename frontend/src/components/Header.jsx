import { Link, NavLink } from "react-router-dom";
import LiveClock from "./LiveClock";

const Header = () => {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? "bg-indigo-600 text-white shadow-sm"
        : "text-slate-600 hover:text-indigo-600 hover:bg-slate-100"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90  border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">💭</span>
          <span className="font-bold text-xl text-slate-800 tracking-tight">ThoughtSpace</span>
        </Link>
        {/* Center: Compact Live Clock */}
        <div className="hidden sm:flex items-center justify-center">
          <LiveClock />
        </div>

      
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/thoughts" className={navLinkClass}>Thoughts</NavLink>
          <NavLink
            to="/form"
            className="ml-2 px-4 py-2 rounded-lg text-sm font-medium bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
          >
            + New Thought
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;