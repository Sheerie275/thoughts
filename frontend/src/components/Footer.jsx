
const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-6">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p className="font-medium">© {new Date().getFullYear()} ThoughtSpace. All rights reserved.</p>
        <p>Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;