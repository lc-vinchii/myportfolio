"use client";
import { Mail, Github, Linkedin, MapPin } from "lucide-react"

export default function Contact({
  personal
}) {
  return (
    <div
      className="py-20 px-4 bg-gradient-to-br from-gray-900 to-emerald-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can bring
          your ideas to life.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 justify-items-center">
          <a
            href={`mailto:${personal.email}`}
            className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 w-full max-w-xs">
            <Mail className="w-8 h-8 mb-3 text-emerald-400" />
            <span className="font-medium">Email</span>
            <span className="text-sm text-gray-400 mt-1">Send a message</span>
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 w-full max-w-xs">
            <Github className="w-8 h-8 mb-3 text-gray-400" />
            <span className="font-medium">GitHub</span>
            <span className="text-sm text-gray-400 mt-1">View my code</span>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 w-full max-w-xs">
            <Linkedin className="w-8 h-8 mb-3 text-amber-400" />
            <span className="font-medium">LinkedIn</span>
            <span className="text-sm text-gray-400 mt-1">Connect with me</span>
          </a>

          <div
            className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl w-full max-w-xs">
            <MapPin className="w-8 h-8 mb-3 text-red-400" />
            <span className="font-medium">Location</span>
            <span className="text-sm text-gray-400 mt-1">{personal.location}</span>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400">© 2024 {personal.name}. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </div>
  );
}
