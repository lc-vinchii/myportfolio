"use client";
import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export default function Hero({
  personal
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)
    return () => clearTimeout(timer);
  }, [])

  // Title rotation effect with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % personal.titles.length)
        setIsTransitioning(false)
      }, 300) // Half of transition duration
    }, 2500) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [personal.titles.length])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1500 ease-out ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
          }`}>
          <div className="mb-8">
            <div
              className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-amber-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-pulse">
              {personal.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
            {personal.name}
          </h1>

          <div className="h-12 mb-6 flex items-center justify-center">
            <h2
              className={`text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light transition-all duration-600 ${
                isTransitioning ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"
              }`}
            >
              {personal.titles[currentTitleIndex]}
            </h2>
          </div>

          <p
            className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {personal.bio}
          </p>

          <div
            className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-8">
            <MapPin className="w-5 h-5" />
            <span>{personal.location}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <Mail className="w-5 h-5" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
