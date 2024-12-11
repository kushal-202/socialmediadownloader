import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Divyanshu Mishra</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/divy4nshu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/divyanshu-mishra-746559341"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="divyanshumishra334@gmail.com"
              className="hover:text-gray-400 transition-colors"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Divyanshu Mishra. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
