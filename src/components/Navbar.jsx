export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow">
      <h1 className="text-xl font-bold">MyPortfolio</h1>

      <ul className="hidden md:flex gap-6 font-medium">
        <li>
          <a href="#home" className="hover:text-blue-600">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-600">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </li>
      </ul>

      <button className="md:hidden p-2 border rounded">
        ☰
      </button>
    </nav>
  );
}
