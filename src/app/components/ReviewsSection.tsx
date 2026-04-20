import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Тимур",
    location: "Казань",
    text: "Спасибо большое вам! Строитель ответственный и аккуратный. Быстро согласовали итоговую стоимость и все этапы работ по дому. Приехали на участок, всё внимательно осмотрели, предложили свои решения. Строительство дома почти завершено, без лишних доплат и с хорошим качеством черновой отделки. Отдельно отмечу вежливое общение, оперативную связь и готовность идти навстречу по любым вопросам. Результатом довольны, смело могу рекомендовать данного застройщика",
    rating: 5,
    project: "",
  },
  {
    name: "Диана",
    location: "Татарстан",
    text: "Подрядчик добросовестный. Быстро пришли к договоренности о конечной стоимости нашего дома. Выехали на участок, провели геологию. Дом был построен по готовому проекту подрядчика, в черновой отделке. Хотела бы отдельно отметить отзывчивость, мобильность и профессионализм исполнителей! В срок воплотили нашу мечту в реальность! Благодарим! Желаем Дальнейшего процветания и нескончаемого клиентского потока",
    rating: 5,
    project: "",
  },
  {
    name: "Дмитрий",
    location: "Казань",
    text: "Добрый день! Планировали построить дом двухэтажный и наконец-то наша мечта сбылась. Подрядчик очень ответственный, добросовестный. Построили дом в черновой отделке раньше обговоренного срока. Строили дом в ипотеку, сделка прошла успешно. В ходе строительства все тонкости обговаривали, обсуждали. Хочу поблагодарить ребят за качество и профессионализм. Очень рекомендую! Всё супер! Ребята, Вы лучшие 👍",
    rating: 5,
    project: "",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
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
                {review.project && <div className="text-sm text-gray-400 mt-1">{review.project}</div>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
