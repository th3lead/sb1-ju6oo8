import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Login from './components/Login';
import Calendar from './components/Calendar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/schedule" element={
          <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Calendar />
            </div>
          </div>
        } />
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <nav className="bg-white shadow-sm fixed w-full z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <BookOpen className="h-8 w-8 text-[#4567b7]" />
                    <span className="ml-2 text-xl font-semibold text-gray-900">CounselHub</span>
                  </div>
                  <div className="hidden md:flex items-center space-x-8">
                    <a href="#features" className="text-gray-600 hover:text-[#4567b7]">Features</a>
                    <a href="#testimonials" className="text-gray-600 hover:text-[#4567b7]">Testimonials</a>
                    <a
                      href="/login"
                      className="bg-[#4567b7] text-white px-4 py-2 rounded-lg hover:bg-[#3a569e] transition"
                    >
                      Sign In
                    </a>
                  </div>
                </div>
              </div>
            </nav>

            <Hero />
            <Features />
            <Statistics />
            <Testimonials />
            <CTA />

            <footer className="bg-gray-50 border-t">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <div className="flex items-center">
                      <BookOpen className="h-6 w-6 text-[#4567b7]" />
                      <span className="ml-2 text-lg font-semibold">CounselHub</span>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">
                      Empowering teachers to support students every step of the way.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Features</h3>
                    <ul className="mt-4 space-y-4">
                      <li><a href="#" className="text-sm text-gray-600 hover:text-[#4567b7]">Scheduling</a></li>
                      <li><a href="#" className="text-sm text-gray-600 hover:text-[#4567b7]">Resources</a></li>
                      <li><a href="#" className="text-sm text-gray-600 hover:text-[#4567b7]">Progress Tracking</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
                    <ul className="mt-4 space-y-4">
                      <li><a href="#" className="text-sm text-gray-600 hover:text-[#4567b7]">Documentation</a></li>
                      <li><a href="#" className="text-sm text-gray-600 hover:text-[#4567b7]">Contact</a></li>
                      <li><a href="#" className="text-sm text-gray-600 hover:text-[#4567b7]">Privacy Policy</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Newsletter</h3>
                    <p className="mt-4 text-sm text-gray-600">Subscribe to our newsletter for updates.</p>
                    <form className="mt-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#4567b7] focus:border-[#4567b7]"
                      />
                      <button className="mt-2 w-full bg-[#4567b7] text-white px-4 py-2 rounded-lg hover:bg-[#3a569e] transition">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;