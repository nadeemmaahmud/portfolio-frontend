export default function Footer({ dark }) {
  return (
    <footer className={`text-center py-5 text-xs font-mono border-t transition-colors duration-300
      ${dark ? "text-gray-600 border-white/10" : "text-gray-400 border-gray-200"}`}>
      {'\u00A9'} {new Date().getFullYear()} Nadim Mahmud · All Rights Reserved
    </footer>
  );
}
