import { ProjectCard } from "./ProjectCard";
import { motion } from "motion/react";

const availableProjects = [
  {
    title: "Резиденция Riverside",
    location: "Казань, пригород",
    area: "320 м²",
    bedrooms: 4,
    price: "от 18 млн ₽",
    image: "https://images.unsplash.com/photo-1706808849803-f61304e024ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    status: "available" as const,
  },
  {
    title: "Дом Modern Loft",
    location: "Иннополис",
    area: "280 м²",
    bedrooms: 3,
    price: "от 15 млн ₽",
    image: "https://images.unsplash.com/photo-1706855203772-c249b75fe016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    status: "available" as const,
  },
  {
    title: "Вилла Harmony",
    location: "Зеленодольск",
    area: "380 м²",
    bedrooms: 5,
    price: "от 22 млн ₽",
    image: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    status: "available" as const,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Проекты на продажу
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Готовые решения для комфортной жизни за городом
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {availableProjects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
