"use client";
export default function TechStack({
  techStack
}) {
  const getLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "bg-emerald-500"
      case "Advanced":
        return "bg-amber-500"
      case "Intermediate":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {techStack.map((tech, index) => (
            <div
              key={tech.id}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/20 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 w-full max-w-sm"
              style={{
                animationDelay: `${index * 100}ms`,
              }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{tech.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{tech.category}</p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">{tech.description}</p>

              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${getLevelColor(tech.level)}`}></div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{tech.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
