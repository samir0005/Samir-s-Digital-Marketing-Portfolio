export default function Footer() {
  return (
    <footer className="w-full px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between text-xs font-medium text-gray-500 bg-[#000000]/40 relative z-10 border-t border-white/5 gap-4">
      <span className="font-bold text-gray-300 tracking-wider text-sm">Samir</span>
      <span>&copy; {new Date().getFullYear()} Samir. All Rights Reserved.</span>
      <span className="text-center md:text-right">Creating Digital Experiences That Drive Growth</span>
    </footer>
  );
}
