import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Experiences', path: '/experiences' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <nav className={`fixed top-0 w-full backdrop-blur-sm z-50 border-b transition-colors duration-300 ${darkMode
            ? 'bg-[#0a1628]/95 border-[#1a2d4a]'
            : 'bg-[#fdf8f3]/95 border-[#e6d5c3]'
            }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <NavLink
                        to="/"
                        className={`text-xl font-semibold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                            }`}
                    >
                        <motion.span whileHover={{ scale: 1.02 }}>AP.</motion.span>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) => `transition-colors font-medium ${isActive
                                    ? (darkMode ? 'text-white' : 'text-gray-900')
                                    : (darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900')
                                    }`}
                            >
                                {item.name}
                            </NavLink>
                        ))}

                        {/* Dark/Light Mode Toggle */}
                        <motion.button
                            onClick={toggleDarkMode}
                            className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none ${darkMode ? 'bg-[#1a2d4a]' : 'bg-[#0066cc]'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className={`w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ${darkMode ? 'translate-x-0' : 'translate-x-6'
                                    }`}
                                animate={{ x: darkMode ? 0 : 24 }}
                                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                            >
                                <motion.div
                                    initial={false}
                                    animate={{ rotate: darkMode ? 0 : 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {darkMode ? (
                                        <Moon size={14} className="text-gray-700" />
                                    ) : (
                                        <Sun size={14} className="text-yellow-500" />
                                    )}
                                </motion.div>
                            </motion.div>
                        </motion.button>
                    </div>

                    <div className="flex items-center space-x-4 md:hidden">
                        {/* Mobile Dark/Light Mode Toggle */}
                        {/* Mobile Dark/Light Mode Toggle */}
                        <motion.button
                            onClick={toggleDarkMode}
                            className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none ${darkMode ? 'bg-[#1a2d4a]' : 'bg-[#0066cc]'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className={`w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center`}
                                animate={{ x: darkMode ? 0 : 24 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                {darkMode ? (
                                    <Moon size={14} className="text-gray-700" />
                                ) : (
                                    <Sun size={14} className="text-yellow-500" />
                                )}
                            </motion.div>
                        </motion.button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-lg transition-colors ${darkMode
                                ? 'hover:bg-[#1a2d4a] text-gray-300 hover:text-white'
                                : 'hover:bg-[#e6d5c3] text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <motion.div
                    className={`md:hidden border-t transition-colors duration-300 ${darkMode
                        ? 'bg-[#0a1628] border-[#1a2d4a]'
                        : 'bg-[#fdf8f3] border-[#e6d5c3]'
                        }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="px-6 py-4 space-y-2">
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => `block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${isActive
                                    ? (darkMode ? 'bg-[#1a2d4a] text-white' : 'bg-[#e6d5c3] text-gray-900')
                                    : (darkMode ? 'text-gray-300 hover:bg-[#1a2d4a]' : 'text-gray-600 hover:bg-[#ede0d4]')
                                    }`}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    )
}

export default Navbar
