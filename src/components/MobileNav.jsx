import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import FolderIcon from './FolderIcon'

const MobileNav = ({ darkMode }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [hoveredLink, setHoveredLink] = useState(null)

    const navLinks = [
        { name: 'INTRO', path: '/' },
        { name: 'EXPERIENCE', path: '/experiences' },
        { name: 'PROJECTS', path: '/projects' },
        { name: 'AWARDS', path: '/awards' },
        { name: 'CONTACT', path: '/contact' },
    ]

    return (
        <div className="lg:hidden">
            {/* Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed top-6 left-6 z-50 p-3 rounded-full transition-colors ${
                    darkMode
                        ? 'bg-[#1a2d4a] hover:bg-[#243a5e] text-white'
                        : 'bg-[#e6d5c3] hover:bg-[#d5c4a1] text-gray-900'
                }`}
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className={`fixed top-0 left-0 h-full w-80 z-40 overflow-y-auto ${
                                darkMode ? 'bg-[#0a1628]' : 'bg-[#fdf8f3]'
                            }`}
                        >
                            <div className="p-8 pt-20 space-y-8">
                                {/* Profile */}
                                <div>
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                                            <img
                                                src={`${import.meta.env.BASE_URL}eu.png`}
                                                alt="Artur Pereira"
                                                className="w-full h-full rounded-full object-cover"
                                                style={{
                                                    objectPosition: '90% center',
                                                    transform: 'scale(1.2)'
                                                }}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextElementSibling.style.display = 'flex';
                                                }}
                                            />
                                            <span className="text-white font-bold text-lg hidden">AP</span>
                                        </div>
                                        <div>
                                            <h2 className={`text-lg font-bold ${
                                                darkMode ? 'text-white' : 'text-gray-900'
                                            }`}>
                                                Artur Pereira
                                            </h2>
                                            <p className={`text-xs font-mono ${
                                                darkMode ? 'text-gray-400' : 'text-gray-600'
                                            }`}>
                                                Available
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Navigation */}
                                <nav className="space-y-1">
                                    {navLinks.map((link) => (
                                        <NavLink
                                            key={link.path}
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            onMouseEnter={() => setHoveredLink(link.path)}
                                            onMouseLeave={() => setHoveredLink(null)}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-mono transition-colors ${
                                                    isActive
                                                        ? darkMode
                                                            ? 'bg-[#1a2d4a] text-white'
                                                            : 'bg-[#e6d5c3] text-gray-900'
                                                        : darkMode
                                                        ? 'text-gray-400 hover:bg-[#1a2d4a] hover:text-white'
                                                        : 'text-gray-600 hover:bg-[#ede0d4] hover:text-gray-900'
                                                }`
                                            }
                                        >
                                            {({ isActive }) => (
                                                <>
                                                    <FolderIcon 
                                                        isActive={isActive} 
                                                        isHovered={hoveredLink === link.path}
                                                    />
                                                    <span>{link.name}</span>
                                                </>
                                            )}
                                        </NavLink>
                                    ))}
                                </nav>

                                {/* Contact */}
                                <div>
                                    <p className={`text-xs font-mono uppercase tracking-wider mb-3 ${
                                        darkMode ? 'text-gray-500' : 'text-gray-500'
                                    }`}>
                                        Contact
                                    </p>
                                    <div className="space-y-2">
                                        <a
                                            href="mailto:arturguedespereira@gmail.com"
                                            className={`flex items-center space-x-2 text-sm transition-colors ${
                                                darkMode
                                                    ? 'text-gray-400 hover:text-white'
                                                    : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                        >
                                            <Mail size={14} />
                                            <span className="font-mono text-xs">Email</span>
                                        </a>
                                        <a
                                            href={`${import.meta.env.BASE_URL}resume.pdf`}
                                            download
                                            className={`flex items-center space-x-2 text-sm transition-colors ${
                                                darkMode
                                                    ? 'text-gray-400 hover:text-white'
                                                    : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                        >
                                            <FileText size={14} />
                                            <span className="font-mono text-xs">Resume</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center space-x-4 pt-4 border-t"
                                    style={{
                                        borderColor: darkMode ? '#1f1f1f' : '#e5e7eb'
                                    }}
                                >
                                    <a
                                        href="https://github.com/arturpereira12"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`transition-colors ${
                                            darkMode
                                                ? 'text-gray-400 hover:text-white'
                                                : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                    >
                                        <Github size={18} />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/arturpereira12"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`transition-colors ${
                                            darkMode
                                                ? 'text-gray-400 hover:text-white'
                                                : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MobileNav
