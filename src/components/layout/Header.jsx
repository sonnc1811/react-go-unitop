function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-xl font-bold text-blue-600">Unitop</span>
        <nav className="flex gap-6 text-sm text-gray-600">
          <a href="/">Trang chu</a>
          <a href="/about">Gioi thieu</a>
          <a href="/about">Lien he</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
