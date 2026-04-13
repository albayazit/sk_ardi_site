import { motion } from "motion/react";
import { useState } from "react";
import { Phone } from "lucide-react";

export function CalculatorSection() {
  const [floors, setFloors] = useState<number | null>(null);
  const [area, setArea] = useState<string | null>(null);
  const [material, setMaterial] = useState<string | null>(null);

  const calculatePrice = () => {
    if (!floors || !area || !material) return null;

    let basePrice = 0;

    // Расчет по площади
    switch (area) {
      case "до 150":
        basePrice = 3500000;
        break;
      case "150-250":
        basePrice = 6000000;
        break;
      case "250-400":
        basePrice = 10000000;
        break;
      case "400+":
        basePrice = 15000000;
        break;
    }

    // Коэффициент по этажам
    const floorMultiplier = floors === 1 ? 0.9 : floors === 2 ? 1 : 1.15;

    // Коэффициент по материалу
    const materialMultiplier =
      material === "Газобетон" ? 0.9 :
      material === "Кирпич" ? 1.1 :
      1.05; // Дерево

    const finalPrice = basePrice * floorMultiplier * materialMultiplier;
    return Math.round(finalPrice / 100000) * 100000;
  };

  const price = calculatePrice();

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Экспресс-расчет стоимости
          </h2>
          <p className="text-xl text-gray-300">
            Ответьте на 3 вопроса и узнайте примерную стоимость строительства
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12"
        >
          <div className="space-y-10">
            {/* Вопрос 1: Этажность */}
            <div>
              <h3 className="text-xl font-bold mb-4">1. Количество этажей</h3>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => setFloors(num)}
                    className={`py-4 px-6 rounded-xl font-semibold transition-all ${
                      floors === num
                        ? "bg-white text-gray-900 shadow-lg scale-105"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    {num} этаж{num > 1 ? "а" : ""}
                  </button>
                ))}
              </div>
            </div>

            {/* Вопрос 2: Площадь */}
            <div>
              <h3 className="text-xl font-bold mb-4">2. Площадь дома</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["до 150", "150-250", "250-400", "400+"].map((range) => (
                  <button
                    key={range}
                    onClick={() => setArea(range)}
                    className={`py-4 px-6 rounded-xl font-semibold transition-all ${
                      area === range
                        ? "bg-white text-gray-900 shadow-lg scale-105"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    {range} м²
                  </button>
                ))}
              </div>
            </div>

            {/* Вопрос 3: Материал */}
            <div>
              <h3 className="text-xl font-bold mb-4">3. Материал стен</h3>
              <div className="grid grid-cols-3 gap-4">
                {["Кирпич", "Газобетон", "Дерево"].map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setMaterial(mat)}
                    className={`py-4 px-6 rounded-xl font-semibold transition-all ${
                      material === mat
                        ? "bg-white text-gray-900 shadow-lg scale-105"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Результат */}
          {price && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-12 pt-10 border-t border-white/20"
            >
              <div className="text-center">
                <div className="text-gray-300 mb-2">Примерная стоимость строительства</div>
                <div className="text-5xl md:text-6xl font-bold mb-6">
                  от {price.toLocaleString("ru-RU")} ₽
                </div>
                <div className="bg-white/10 rounded-2xl p-6 max-w-md mx-auto">
                  <div className="text-gray-300 mb-3">Свяжитесь для точного расчета</div>
                  <a
                    href="tel:+79872250039"
                    className="flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                  >
                    <Phone size={24} />
                    +7 987 225 00 39
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {!price && (
            <div className="mt-10 text-center text-gray-400">
              Выберите все параметры для расчета стоимости
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
