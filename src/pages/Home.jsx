import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PianoAnimation from '../components/3d/PianoAnimation'

const Home = ({ darkMode }) => {
    return (
        <div>
            {/* Hero Section */}
            <div className="min-h-screen flex items-center justify-center px-8 py-16">
                <div className="max-w-4xl w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        {/* Hero Text */}
                        <div className="space-y-6">
                            <div>
                                <p className={`text-sm font-mono uppercase tracking-wider mb-4 ${
                                    darkMode ? 'text-gray-500' : 'text-gray-500'
                                }`}>
                                </p>
                                <h1 className={`text-5xl md:text-6xl font-bold mb-2 transition-colors ${
                                    darkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                    Artur Pereira
                                </h1>
                                <p className={`text-xl md:text-2xl font-light ${
                                    darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                    Computer Science Student
                                </p>
                            </div>
                            
                            <div className={`space-y-4 text-base md:text-lg max-w-2xl ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                                <p className="leading-relaxed">
                                    Passionate about exploring the realms of{' '}
                                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                                        Software Engineering
                                    </span>{' '}
                                    and{' '}
                                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                                        Machine Learning
                                    </span>.
                                </p>
                                
                                <p className="leading-relaxed">
                                    I have always found a quiet magic in building things, which is exactly why I ended up in Computer Science. I am captivated by technology and AI, not just for the code, but for their potential to make the everyday smarter and simpler. I want to craft solutions that don't just solve problems, but feel inevitable in their elegance.
                                </p>
                            </div>
                        </div>

                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={`p-6 rounded-lg border ${
                                darkMode
                                    ? 'bg-[#0d1a2d] border-[#1a2d4a]'
                                    : 'bg-[#f5ebe0] border-[#e6d5c3]'
                            }`}
                        >
                            <p className={`text-xs font-mono uppercase tracking-wider mb-3 ${
                                darkMode ? 'text-gray-500' : 'text-gray-500'
                            }`}>
                                Education
                            </p>
                            <div className="flex items-start space-x-4">
                                <img
                                    src={`${import.meta.env.BASE_URL}ufpb-logo.png`}
                                    alt="UFPB"
                                    className="w-12 h-12 object-contain rounded"
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                                <div>
                                    <h3 className={`font-semibold mb-1 ${
                                        darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        Bachelor of Computer Science
                                    </h3>
                                    <p className={`text-sm ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        Federal University of Paraíba (UFPB)
                                    </p>
                                    <p className={`text-xs font-mono mt-1 ${
                                        darkMode ? 'text-gray-500' : 'text-gray-500'
                                    }`}>
                                        Jun 2024 - Dec 2027 • GPA: 9/10
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Areas of Focus */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <p className={`text-xs font-mono uppercase tracking-wider mb-4 ${
                                darkMode ? 'text-gray-500' : 'text-gray-500'
                            }`}>
                                Areas of Focus
                            </p>
                            <div className="grid md:grid-cols-3 gap-4">
                                {['Engineering Systems', 'Data Intelligence', 'Applied AI'].map((area, index) => (
                                    <div
                                        key={area}
                                        className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-lg ${
                                            darkMode
                                                ? 'bg-[#0d1a2d] border-[#1a2d4a] hover:border-[#2a4a6a]'
                                                : 'bg-[#f5ebe0] border-[#e6d5c3] hover:border-[#d5c4a1]'
                                        }`}
                                    >
                                        <span className={`text-xs font-mono ${
                                            darkMode ? 'text-gray-500' : 'text-gray-500'
                                        }`}>
                                            0{index + 1}
                                        </span>
                                        <h3 className={`mt-2 font-semibold ${
                                            darkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                            {area}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                to="/projects"
                                className={`group flex items-center space-x-2 px-6 py-3 rounded-lg font-mono text-sm transition-all ${
                                    darkMode
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : 'bg-[#0066cc] text-white hover:bg-[#0052a3]'
                                }`}
                            >
                                <span>View Projects</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/contact"
                                className={`px-6 py-3 rounded-lg font-mono text-sm border transition-all ${
                                    darkMode
                                        ? 'border-[#1a2d4a] text-white hover:bg-[#1a2d4a]'
                                        : 'border-[#c4b393] text-gray-900 hover:bg-[#f5ebe0]'
                                }`}
                            >
                                Get In Touch
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Piano Animation Section */}
            <section className={`h-[600px] w-full relative overflow-hidden transition-colors duration-300 ${
                darkMode ? 'bg-[#0a1628]' : 'bg-[#fdf8f3]'
            }`}>
                <div className="absolute inset-0">
                    <PianoAnimation darkMode={darkMode} />
                </div>
            </section>
        </div>
    )
}

export default Home
