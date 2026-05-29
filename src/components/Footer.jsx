export default function Footer({ dark }) {
  return (
    <footer className={`text-center py-5 text-xs font-mono border-t transition-colors duration-300
      ${dark ? "text-gray-600 border-white/10" : "text-gray-400 border-gray-200"}`}>
      All Rights Reserved {'\u00A9'} Nadim Mahmud · {new Date().getFullYear()} · Built with React · Vite · Tailwind
    </footer>
  );
}
