const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Nama Pasangan</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#hero" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-blue-500">
                Gallery
              </a>
            </li>
            <li>
              <a href="#footer" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
