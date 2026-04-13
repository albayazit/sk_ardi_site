import { motion } from "motion/react";
import logo from "../../assets/aff942f106c7a8df8884d082ae97a0c5c3cbba86.png";
import { Phone, Mail } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Арди" className="h-12 w-12 rounded-full object-cover" />
          <span className="text-xl font-bold text-gray-900">СК Арди</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#completed" className="text-gray-700 hover:text-gray-900 transition-colors">
            Реализованные проекты
          </a>
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
            О компании
          </a>
          <a href="#reviews" className="text-gray-700 hover:text-gray-900 transition-colors">
            Отзывы
          </a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
            Контакты
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <a href="tel:+79872250039" className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <Phone size={18} />
            <span>+7 987 225 00 39</span>
          </a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Связаться
          </button>
        </div>
      </div>
    </motion.header>
  );
}
