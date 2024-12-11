import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to Social Media Browser
      </h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Link
          to="/youtube"
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <FaYoutube className="text-6xl text-red-600 mb-4" />
          <h2 className="text-xl font-semibold">YouTube</h2>
          <p className="text-gray-600 text-center mt-2">
            Browse and embed YouTube videos
          </p>
        </Link>

        <Link
          to="/twitter"
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <FaTwitter className="text-6xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold">Twitter</h2>
          <p className="text-gray-600 text-center mt-2">
            View embedded tweets and threads
          </p>
        </Link>

        <Link
          to="/instagram"
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <FaInstagram className="text-6xl text-pink-600 mb-4" />
          <h2 className="text-xl font-semibold">Instagram</h2>
          <p className="text-gray-600 text-center mt-2">
            Browse Instagram posts and reels
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Home