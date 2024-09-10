function Navbar() {
  return (
    <nav className="flex justify-between py-3 bg-violet-700 text-white">
      <span className="text-lg font-bold mx-8 cursor-pointer">iTask</span>
      <ul className="flex gap-9 mx-8">
        <li className="hover:font-bold transition-all cursor-pointer font-medium">
          Home
        </li>
        <li className="hover:font-bold transition-all cursor-pointer font-medium">
          Todos
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
