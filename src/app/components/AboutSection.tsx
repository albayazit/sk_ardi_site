import { motion } from "motion/react";
import { Building2, Award, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "100+ домов",
    description: "Построено за время работы",
  },
  {
    icon: Award,
    title: "10+ лет на рынке",
    description: "Опыт и надёжность в каждом проекте",
  },
  {
    icon: Users,
    title: "100% клиентов",
    description: "Довольны результатом",
  },
  {
    icon: Clock,
    title: "Точные сроки",
    description: "Гарантия соблюдения договора",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              О компании Арди
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Мы специализируемся на строительстве частных домов в Татарстане.
                Каждый проект — это уникальное решение, созданное с учетом пожеланий наших клиентов.
              </p>
              <p>
                Используем только проверенные технологии и материалы высочайшего качества.
                Наша команда — это опытные архитекторы, инженеры и строители, для которых каждый дом — это воплощение мечты заказчика.
              </p>
              <p>
                От первого эскиза до сдачи ключей мы полностью сопровождаем строительство,
                гарантируя прозрачность процесса и соблюдение всех сроков.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <feature.icon size={40} className="text-gray-900 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
