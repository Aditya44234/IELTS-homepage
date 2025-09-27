import React from "react";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Globe,
  Award,
  Users,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[var(--background)] text-white relative overflow-hidden">
        {/* Background Elements */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-lg blur opacity-75"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-[#22C55E] to-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                  </div>
                  <span className="text-3xl font-bold bg-[var(--primary-text)] bg-clip-text text-transparent">
                    AceIt
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Empowering students worldwide to achieve their IELTS goals
                  through cutting-edge AI technology and expert guidance. Join
                  over 50,000+ successful test-takers.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-400">50K+</div>
                  <div className="text-xs text-gray-400">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-400">98%</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-400">4.9</div>
                  <div className="text-xs text-gray-400">Rating</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 pt-4">
                <a
                  href="#"
                  className="group relative overflow-hidden bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href="#"
                  className="group relative overflow-hidden bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="h-5 w-5 text-gray-400 group-hover:text-sky-400 transition-colors" />
                </a>
                <a
                  href="#"
                  className="group relative overflow-hidden bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-5 w-5 text-gray-400 group-hover:text-pink-400 transition-colors" />
                </a>
                <a
                  href="#"
                  className="group relative overflow-hidden bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  "About AceIt",
                  "IELTS Courses",
                  "Practice Tests",
                  "Success Stories",
                  "Study Resources",
                  "Mobile App",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="group flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white relative">
                Our Services
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  "AI Speaking Coach",
                  "Full-Length Mock Tests",
                  "Expert 1-on-1 Tutoring",
                  "Band Score Prediction",
                  "Writing Task Correction",
                  "Listening Practice",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="group flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white relative">
                Get In Touch
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-slate-800/50 rounded-lg backdrop-blur-sm">
                  <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <div className="font-medium">Global Headquarters</div>
                    <div>123 Education Street</div>
                    <div>Learning City, LC 12345</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg backdrop-blur-sm">
                  <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <div className="font-medium">24/7 Support</div>
                    <div>+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg backdrop-blur-sm">
                  <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <div className="font-medium">Email Support</div>
                    <div>support@aceit.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Badges */}
          <div className="border-t border-slate-700 mt-12 pt-8">


            {/* Bottom Bar */}
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-gray-400 text-sm">
                  © 2025 AceIt Educational Technology. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Empowering IELTS success through innovation and excellence.
                </p>
              </div>

              <div className="flex flex-wrap justify-center space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm hover:underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm hover:underline"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm hover:underline"
                >
                  Cookie Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm hover:underline"
                >
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
