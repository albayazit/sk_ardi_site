import { motion } from "motion/react";
import { useState } from "react";
import { Phone, Send, CheckCircle } from "lucide-react";
import { PrivacyModal } from "./PrivacyModal";

export function CalculatorSection() {
  const [floors, setFloors] = useState<number | null>(null);
  const [area, setArea] = useState<string>("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const calculatePrice = () => {
    const areaNum = parseFloat(area);
    if (!floors || !areaNum || areaNum < 20) return null;

    const pricePerSqm = floors === 1 ? 35000 : 38000;
    const finalPrice = areaNum * pricePerSqm;
    return Math.round(finalPrice / 100000) * 100000;
  };

  const price = calculatePrice();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) return;

    setSending(true);
    setError("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/bakhasanov@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          contact,
          floors: `${floors} этаж(а)`,
          area: `${area} м²`,
          price: price ? `от ${price.toLocaleString("ru-RU")} ₽` : "не рассчитана",
          _subject: "Новая заявка с сайта СК Арди",
        }),
      });

      const data = await response.json();
      if (data.success === "true" || data.success === true) {
        setSent(true);
      } else {
        setError("Ошибка отправки. Попробуйте позвонить нам.");
      }
    } catch {
      setError("Ошибка отправки. Попробуйте позвонить нам.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="calculator" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
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
            Ответьте на 2 вопроса и узнайте примерную стоимость строительства
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
              <div className="grid grid-cols-2 gap-4">
                {[1, 2].map((num) => (
                  <button
                    key={num}
                    onClick={() => setFloors(num)}
                    className={`py-4 px-6 rounded-xl font-semibold transition-all ${
                      floors === num
                        ? "bg-white text-gray-900 shadow-lg scale-105"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    {num} этаж{num === 2 ? "а" : ""}
                  </button>
                ))}
              </div>
            </div>

            {/* Вопрос 2: Площадь */}
            <div>
              <h3 className="text-xl font-bold mb-4">2. Площадь дома</h3>
              <input
                type="number"
                min={20}
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="Введите площадь, м² (от 20)"
                className="w-full py-4 px-6 rounded-xl bg-white/10 hover:bg-white/20 focus:bg-white/20 outline-none text-white placeholder-gray-400 font-semibold text-lg transition-all"
              />
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
              <div className="text-center mb-10">
                <div className="text-gray-300 mb-2">Примерная стоимость строительства</div>
                <div className="text-5xl md:text-6xl font-bold">
                  от {price.toLocaleString("ru-RU")} ₽
                </div>
              </div>

              {/* Форма обратной связи */}
              {!sent ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                  <p className="text-center text-gray-300 mb-6">
                    Оставьте заявку — перезвоним и уточним детали
                  </p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    required
                    className="w-full py-4 px-6 rounded-xl bg-white/10 hover:bg-white/20 focus:bg-white/20 outline-none text-white placeholder-gray-400 font-semibold transition-all"
                  />
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Телефон или e-mail"
                    required
                    className="w-full py-4 px-6 rounded-xl bg-white/10 hover:bg-white/20 focus:bg-white/20 outline-none text-white placeholder-gray-400 font-semibold transition-all"
                  />
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 w-4 h-4 accent-white cursor-pointer"
                      required
                    />
                    <span className="text-gray-400 text-sm">
                      Я соглашаюсь с{" "}
                      <button
                        type="button"
                        onClick={() => setShowPrivacy(true)}
                        className="text-white underline hover:text-gray-300 transition-colors"
                      >
                        политикой конфиденциальности
                      </button>{" "}
                      и даю согласие на обработку персональных данных
                    </span>
                  </label>
                  {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                  <button
                    type="submit"
                    disabled={sending || !agreed}
                    className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 py-4 px-8 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors disabled:opacity-60"
                  >
                    <Send size={20} />
                    {sending ? "Отправляем..." : "Отправить заявку"}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-md mx-auto text-center bg-white/10 rounded-2xl p-8"
                >
                  <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Заявка отправлена!</h4>
                  <p className="text-gray-300">Мы свяжемся с вами в ближайшее время</p>
                </motion.div>
              )}

              {/* Телефон */}
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm mb-3">или позвоните нам</p>
                <a
                  href="tel:+79872250039"
                  className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-semibold"
                >
                  <Phone size={18} />
                  +7 987 225 00 39
                </a>
              </div>
            </motion.div>
          )}

          {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}

          {!price && (
            <div className="mt-10 text-center text-gray-400">
              Выберите этажность и введите площадь для расчета стоимости
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
