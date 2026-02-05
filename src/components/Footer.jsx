import { Github, Linkedin } from 'lucide-react'

const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={`py-8 transition-colors duration-300 border-t ${darkMode
                ? 'bg-[#0a1628] border-[#1a2d4a] text-gray-400'
                : 'bg-[#fdf8f3] border-[#e6d5c3] text-gray-500'
            }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">
                    &copy; {currentYear} Artur Pereira. All rights reserved.
                </p>

                <div className="flex items-center space-x-6">
                    <a
                        href="https://github.com/arturpereira12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors duration-300 ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'
                            }`}
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/in/arturpereira12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors duration-300 ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'
                            }`}
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
