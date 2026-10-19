import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribe, setSubscribe] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()

    if (!email.trim()) return

    // Frontend demonstration only.
    // Connect to your backend to save real subscribers.
    setSubscribe(true)
  }

  return (
    <footer className="bg-[#f8f7f6] text-[#1A1918]">

      {/* Newsletter Section */}
      <section className="text-center px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold uppercase max-w-3xl mx-auto leading-tight">
          Elevating Interiors Through Digital Craftsmanship and Modern Design.
        </h2>

        <h3 className="uppercase font-bold mt-6 mb-3">
          Stay Inspired.
        </h3>

        <p className="font-serif text-gray-600 max-w-xl mx-auto">
          Subscribe for exclusive releases, 3D room showcases, and design updates.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setSubscribe(false)
            }}
            placeholder="Enter Your Email"
            aria-label="Email address"
            required
            className="w-full sm:flex-1 border border-gray-300 rounded-2xl py-3 px-5 bg-white outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            className="w-full sm:w-auto cursor-pointer font-bold uppercase text-white bg-[#1A1918] px-6 py-3 rounded-2xl hover:bg-purple-900 transition-colors duration-300"
          >
            {subscribe ? 'Subscribed ✓' : 'Subscribe'}
          </button>
        </form>

        {subscribe && (
          <p className="text-sm text-green-700 mt-3" role="status">
            Thank you for your interest!
          </p>
        )}
      </section>

      {/* Footer Navigation */}
      <div className="border-t border-gray-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 py-12 max-w-7xl mx-auto">

          {/* Brand */}
          <div className="text-center sm:text-left">
            <Link
              to="/"
              className="inline-block font-bold uppercase text-xl tracking-wide hover:text-purple-700 transition-colors"
            >
              Vusumzi Picks
            </Link>

            <p className="text-sm text-gray-600 mt-4 leading-relaxed max-w-sm mx-auto sm:mx-0">
              Elevating interiors through digital craftsmanship and modern design.
              Crafting functional art for modern spaces.
            </p>

            <p className="text-[#2A2A2D] text-xs mt-6">
              © {new Date().getFullYear()} Vusumzi Picks. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold uppercase mb-4">
              Quick Navigation
            </h3>

            <nav className="flex flex-col gap-3 text-sm font-medium">
              <Link to="/" className="hover:text-purple-600 transition-colors">
                Home
              </Link>

              <Link to="/shop" className="hover:text-purple-600 transition-colors">
                Shop
              </Link>

              <Link to="/about" className="hover:text-purple-600 transition-colors">
                Our Story
              </Link>

              <Link to="/contact" className="hover:text-purple-600 transition-colors">
                Contact
              </Link>

              <Link to="/cart" className="hover:text-purple-600 transition-colors">
                Shopping Cart
              </Link>
            </nav>
          </div>

          {/* Customer Support */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold uppercase mb-4">
              Customer Care
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <p>Shipping & Delivery</p>
              <p>Returns & Exchanges</p>
              <p>Care & Maintenance Guide</p>
              <p>Frequently Asked Questions</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1A1918] text-white text-center text-xs py-5 px-4">
        Designed for modern living. Crafted with intention.
      </div>

    </footer>
  )
}

export default Footer