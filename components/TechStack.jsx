"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function TechStack({ techStack }) {
  const [currentPage, setCurrentPage] = useState(0)

  // Items per page (3 columns × 4 rows = 12 items per page)
  const itemsPerPage = 12
  const totalPages = Math.ceil(techStack.length / itemsPerPage)

  // Get current page items
  const startIndex = currentPage * itemsPerPage
  const currentItems = techStack.slice(startIndex, startIndex + itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

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
    <div className="pb-20 pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={prevPage}
              className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? "bg-emerald-600 scale-125"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-emerald-400 dark:hover:bg-emerald-500"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center min-h-[600px]">
          {currentItems.map((tech, index) => (
            <div key={index} className="animate-fade-in-up">
              <div
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/20 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 w-full max-w-sm"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {tech.svg ? (
                    <Image
                      src={tech.svg || "/placeholder.svg"}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  ) : (
                    <div className="text-3xl">{tech.icon}</div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{tech.category}</p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 min-h-[48px]">{tech.description}</p>

                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${getLevelColor(tech.level)}`}></div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{tech.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Page Info */}
        {totalPages > 1 && (
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Page {currentPage + 1} of {totalPages} • Showing {currentItems.length} of {techStack.length} technologies
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
