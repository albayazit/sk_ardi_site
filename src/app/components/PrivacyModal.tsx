import { X } from "lucide-react";

interface PrivacyModalProps {
  onClose: () => void;
}

export function PrivacyModal({ onClose }: PrivacyModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Политика конфиденциальности
        </h2>

        <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
          <p>
            Настоящая политика конфиденциальности регулирует порядок обработки персональных
            данных пользователей сайта СК Арди (далее — «Оператор»).
          </p>

          <h3 className="font-semibold text-gray-900 text-base">1. Какие данные мы получаем</h3>
          <p>
            При заполнении формы обратной связи вы добровольно указываете: имя, номер телефона
            и/или адрес электронной почты. Эти данные используются исключительно для связи
            с вами по вопросам строительства и расчёта стоимости.
          </p>

          <h3 className="font-semibold text-gray-900 text-base">2. Хранение данных</h3>
          <p>
            Мы не собираем и не храним ваши персональные данные на собственных серверах.
            Данные из формы передаются напрямую на электронную почту Оператора через
            сторонний сервис FormSubmit (formsubmit.co). Полученные сведения могут
            храниться в почтовом ящике Оператора до момента их удаления и используются
            исключительно для связи с вами.
          </p>

          <h3 className="font-semibold text-gray-900 text-base">3. Передача третьим лицам</h3>
          <p>
            Для доставки сообщений используется сервис FormSubmit (formsubmit.co).
            Мы не передаём ваши данные каким-либо иным третьим лицам в маркетинговых
            или иных целях.
          </p>

          <h3 className="font-semibold text-gray-900 text-base">4. Основание обработки</h3>
          <p>
            Обработка осуществляется на основании вашего согласия в соответствии
            с Федеральным законом № 152-ФЗ «О персональных данных».
          </p>

          <h3 className="font-semibold text-gray-900 text-base">5. Ваши права</h3>
          <p>
            Вы вправе в любой момент отозвать согласие или задать вопросы об обработке
            ваших данных, обратившись по адресу: skardi2025@mail.ru
          </p>

          <p className="text-gray-400 text-xs pt-2">
            Дата последнего обновления: апрель 2026 г.
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition-colors font-semibold"
        >
          Понятно
        </button>
      </div>
    </div>
  );
}
