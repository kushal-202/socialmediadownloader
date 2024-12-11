import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaYoutube, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'

function Navbar() {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Social Media Browser
          </Link>
          
          <div className="flex space-x-4">
            <Link
              to="/youtube"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                isActive('/youtube')
                  ? 'bg-red-100 text-red-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FaYoutube className="text-xl" />
              <span>YouTube</span>
            </Link>
            
            <Link
              to="/twitter"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                isActive('/twitter')
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FaTwitter className="text-xl" />
              <span>Twitter</span>
            </Link>
            
            <Link
              to="/instagram"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                isActive('/instagram')
                  ? 'bg-pink-100 text-pink-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FaInstagram className="text-xl" />
              <span>Instagram</span>
            </Link>

            <Link
              to="/contact"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                isActive('/contact')
                  ? 'bg-indigo-100 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FaEnvelope className="text-xl" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar