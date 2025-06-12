"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, Github, X } from "lucide-react"
import Image from "next/image"

export default function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState("all")
  const modalRef = useRef(null)

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.featured)

  // Dynamic grid columns based on project count
  const getGridColumns = () => {
    const projectCount = filteredProjects.length
    if (projectCount === 1) {
      return "grid-cols-1"
    } else {
      return "grid-cols-1 md:grid-cols-2"
    }
  }

  const openProject = (projectId) => {
    setSelectedProject(projectId)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeProject()
      }
    }

    if (selectedProject) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [selectedProject])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeProject()
      }
    }

    if (selectedProject) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [selectedProject])

  const selectedProjectData = projects.find((p) => p.id === selectedProject)

  return (
    <div className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A showcase of my recent work and personal projects
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                filter === "all"
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                filter === "featured"
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600"
              }`}
            >
              Featured Only
            </button>
          </div>
        </div>

        <div className={`grid ${getGridColumns()} gap-8 justify-center`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-gray-900/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer w-full max-w-md border border-gray-100 dark:border-gray-600 mx-auto animate-fade-in-up"
              onClick={() => openProject(project.id)}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            ref={modalRef}
            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-modal-in border border-gray-200 dark:border-gray-600"
          >
            <div className="relative">
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border border-gray-200 dark:border-gray-600"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>

              <Image
                src={selectedProjectData.image || "/placeholder.svg"}
                alt={selectedProjectData.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-80 object-cover"
                unoptimized
              />
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{selectedProjectData.title}</h3>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedProjectData.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProjectData.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
                {selectedProjectData.githubUrl &&
                <a
                  href={selectedProjectData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
                }
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
