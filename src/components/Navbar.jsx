import {
  ChevronDown,
  Menu,
  X,
  User,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { navItems } from "../data/navItems";

// Mock navigation items

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <nav className="sticky top-4 z-50 mx-auto max-w-7xl rounded-xl bg-[var(--background)] backdrop-blur-xl border border-white/30 shadow-lg">
      <div className="px-6">
        <div className="flex justify-center">
          <div className="relative w-full max-w-6xl">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a
                href="#home"
                className="flex items-center space-x-2 cursor-pointer shrink-0"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#22C55E] to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-2xl font-extrabold bg-[var(--primary-text)] text-transparent bg-clip-text">
                  AceIt
                </span>
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setDropdownOpen(index)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <a
                      href={item.link}
                      className="inline-flex items-center text-[var(--primary-text)] font-semibold hover:text-[#22C55E] transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white/5"
                      onClick={() => handleDropdownToggle(index)}
                    >
                      {item.label}
                      {item.dropdown.length > 0 && (
                        <ChevronDown className="ml-1 h-4 w-4 text-gray-500 group-hover:text-[#22C55E] transition-colors duration-200 group-hover:rotate-180" />
                      )}
                    </a>
                    {item.dropdown.length > 0 && (
                      <div
                        className={`absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl ring-1 ring-black/5 border border-white/20 transition-all duration-200 ${
                          dropdownOpen === index
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible translate-y-2"
                        }`}
                      >
                        <div className="py-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <a
                              key={subItem.label}
                              href={subItem.link}
                              className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#22C55E]/10 hover:text-[#22C55E] transition-colors duration-200 font-medium"
                            >
                              <div className="w-2 h-2 bg-[#22C55E] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Side - Notifications, Profile, CTA */}
              <div className="hidden md:flex items-center space-x-4">
                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center space-x-2 p-2 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#22C55E] to-green-600 rounded-full flex items-center justify-center shadow-md">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-[var(--primary-text)] transition-transform duration-200 ${
                        profileOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl ring-1 ring-black/5 border border-white/20">
                      <div className="py-2">
                        <div className="px-4 py-3 border-b border-gray-200/50">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#22C55E] to-green-600 rounded-full flex items-center justify-center">
                              <User className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">
                                John Doe
                              </p>
                              <p className="text-sm text-gray-600">
                                john@example.com
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button className="bg-gradient-to-r from-[#22C55E] to-green-500 text-white px-6 py-2.5 rounded-lg hover:from-green-600 hover:to-green-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
                  Start Free Trial
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center space-x-2">
                <button className="p-2 text-[var(--primary-text)] hover:text-[#22C55E] hover:bg-white/5 rounded-lg transition-all duration-200">
                  <Bell className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="p-2 text-[var(--primary-text)] hover:text-[#22C55E] hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  {mobileOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
              <div className="md:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl ring-1 ring-black/5 border border-white/20 p-4">
                {/* Mobile Profile Section */}
                <div className="flex items-center space-x-3 p-3 bg-gray-50/50 rounded-lg mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#22C55E] to-green-600 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">John Doe</p>
                    <p className="text-sm text-gray-600">john@example.com</p>
                  </div>
                </div>

                {navItems.map((item) => (
                  <div key={item.label} className="mb-2">
                    <a
                      href={item.link}
                      className="block text-gray-700 font-semibold py-3 px-3 rounded-lg hover:bg-[#22C55E]/10 hover:text-[#22C55E] transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                    {item.dropdown.length > 0 && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.link}
                            className="block text-gray-600 py-2 px-3 rounded-lg hover:bg-[#22C55E]/5 hover:text-[#22C55E] transition-colors duration-200"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="border-t border-gray-200/50 my-4"></div>

                <div className="space-y-2 mb-4">
                  <a
                    href="#profile"
                    className="flex items-center text-gray-700 py-2 px-3 rounded-lg hover:bg-[#22C55E]/10 hover:text-[#22C55E] transition-colors duration-200"
                  >
                    <User className="h-4 w-4 mr-3" />
                    Profile
                  </a>
                  <a
                    href="#settings"
                    className="flex items-center text-gray-700 py-2 px-3 rounded-lg hover:bg-[#22C55E]/10 hover:text-[#22C55E] transition-colors duration-200"
                  >
                    <Settings className="h-4 w-4 mr-3" />
                    Settings
                  </a>
                </div>

                <button className="w-full bg-gradient-to-r from-[#22C55E] to-green-500 text-white py-3 rounded-lg hover:from-green-600 hover:to-green-500 transition-all duration-200 shadow-lg font-semibold mb-2">
                  Start Free Trial
                </button>

                <button className="w-full flex items-center justify-center text-red-600 py-2 rounded-lg hover:bg-red-50 transition-colors duration-200">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
