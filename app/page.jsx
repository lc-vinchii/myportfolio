"use client"

import { useEffect, useRef, useState } from "react"
import { portfolioConfig } from "@/config/portfolio"
import Hero from "@/components/Hero"
import TechStack from "@/components/TechStack"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import ThemeToggle from "@/components/ThemeToggle"

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false)
  const sectionsRef = useRef([])

  useEffect(() => {
    // Initial load animation
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      {/* <ThemeToggle /> */}

      {/* Loading overlay */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-emerald-600 to-amber-600 z-50 flex items-center justify-center transition-all duration-1000 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="text-center text-white">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
          <p className="text-xl font-medium">Loading Portfolio...</p>
        </div>
      </div>

      <section ref={addToRefs} className="opacity-0">
        <Hero personal={portfolioConfig.personal} />
      </section>

      <section ref={addToRefs} className="opacity-0 bg-white dark:bg-gray-900 transition-colors duration-500">
        <TechStack techStack={portfolioConfig.techStack} />
      </section>

      <section ref={addToRefs} className="opacity-0">
        <Projects projects={portfolioConfig.projects} />
      </section>

      <section ref={addToRefs} className="opacity-0">
        <Contact personal={portfolioConfig.personal} />
      </section>
    </div>
  )
}
