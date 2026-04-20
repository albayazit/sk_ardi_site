import { motion } from "motion/react";
import { Phone, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Начните строительство<br />вашего дома
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-16">
              Свяжитесь с нами для бесплатной консультации и расчета стоимости проекта
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-white/10 p-4 rounded-lg mb-4">
                  <Phone size={32} />
                </div>
                <div className="text-gray-400 mb-2">Телефон</div>
                <a href="tel:+79872250039" className="text-xl hover:text-gray-300 transition-colors">
                  +7 987 225 00 39
                </a>
                <a href="tel:+79172289089" className="text-xl hover:text-gray-300 transition-colors mt-1">
                  +7 917 228 90 89
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-white/10 p-4 rounded-lg mb-4">
                  <Mail size={32} />
                </div>
                <div className="text-gray-400 mb-2">Email</div>
                <a href="mailto:skardi2025@mail.ru" className="text-xl hover:text-gray-300 transition-colors">
                  skardi2025@mail.ru
                </a>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
