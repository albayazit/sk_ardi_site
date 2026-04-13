import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Дмитрий Соколов",
    location: "Казань",
    text: "Построили дом площадью 320 м². Работа выполнена на высшем уровне, все сроки соблюдены. Команда профессиональная, всегда на связи. Очень довольны результатом!",
    rating: 5,
    project: "Резиденция BlackStone",
  },
  {
    name: "Елена Михайлова",
    location: "Набережные Челны",
    text: "Обратились в СК Арди для строительства загородного дома. От проектирования до сдачи ключей — всё прошло идеально. Качество материалов превзошло ожидания.",
    rating: 5,
    project: "Villa Moderna",
  },
  {
    name: "Артур Валеев",
    location: "Альметьевск",
    text: "Строили эко-дом с использованием современных технологий. Подход к работе очень серьезный, каждый этап контролируется. Рекомендую!",
    rating: 5,
    project: "Эко-дом Greenville",
  },
];

export function ReviewsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мнения владельцев домов, построенных СК Арди
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">{review.name}</div>
                <div className="text-sm text-gray-500">{review.location}</div>
                <div className="text-sm text-gray-400 mt-1">{review.project}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
