import { ProjectCard } from "./ProjectCard";
import { motion } from "motion/react";

const completedProjects = [
  {
    title: "Резиденция BlackStone",
    location: "Казань, КП «Лесной»",
    area: "450 м²",
    bedrooms: 6,
    image: "https://images.unsplash.com/photo-1634841999653-dad28648a43a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    status: "sold" as const,
  },
  {
    title: "Дом у озера",
    location: "Лаишево",
    area: "295 м²",
    bedrooms: 4,
    image: "https://images.unsplash.com/photo-1771756743534-4fe2cda63f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    status: "sold" as const,
  },
  {
    title: "Villa Moderna",
    location: "Набережные Челны",
    area: "340 м²",
    bedrooms: 4,
    image: "https://images.unsplash.com/photo-1749976907725-d1029d3977f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    status: "sold" as const,
  },
  {
    title: "Семейное гнездо",
    location: "Бугульма",
    area: "260 м²",
    bedrooms: 3,
    image: "https://images.unsplash.com/photo-1762117360986-9753aef7680f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    status: "sold" as const,
  },
  {
    title: "Эко-дом Greenville",
    location: "Альметьевск",
    area: "310 м²",
    bedrooms: 4,
    image: "https://images.unsplash.com/photo-1774848010816-a6f114c2c3b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    status: "sold" as const,
  },
  {
    title: "Загородная усадьба",
    location: "Нижнекамск",
    area: "285 м²",
    bedrooms: 3,
    image: "https://images.unsplash.com/photo-1762117360928-1548ff7ab5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    status: "sold" as const,
  },
];

export function CompletedSection() {
  return (
    <section id="completed" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Реализованные проекты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Портфолио построенных домов по всему Татарстану
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
