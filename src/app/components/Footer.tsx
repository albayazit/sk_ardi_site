import logo from "figma:asset/aff942f106c7a8df8884d082ae97a0c5c3cbba86.png";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Арди" className="h-10 w-auto opacity-80" />
          </div>

          <div className="flex items-center gap-8">
            <a href="#projects" className="hover:text-white transition-colors">
              Проекты
            </a>
            <a href="#completed" className="hover:text-white transition-colors">
              Реализованные
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              О компании
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Контакты
            </a>
          </div>

          <div className="text-sm">
            © 2026 Арди. Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
}
