import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

const Projects = ({ darkMode }) => {
    const projects = [
        {
            title: 'GuardAzul',
            description: 'Full-stack coastal protection app developed at Porto Digital Hackathon. Built with React Native (Expo), FastAPI, Docker, and PostgreSQL. Integrates Google Vision and Gemini API for AI-powered environmental report validation and chatbot functionality.',
            github: 'https://github.com/luigischmitt/GuardAzul',
            image: 'Login(1).png',
            number: '01'
        },
        {
            title: 'Gestar',
            description: 'Intelligent school communication platform developed at NewHack/OpenAI hackathon. Built with Next.js, TypeScript, and OpenAI API for smart parent-school interactions and automated communication workflows.',
            github: 'https://github.com/josevitorrodriguess/hackathon_devsImpacto',
            image: 'logo_gestar_vertical_HD.png',
            number: '02'
        },
        {
            title: 'Brazilian Championship Simulator',
            description: 'A comprehensive football simulation platform that recreates the Brazilian Championship experience. Features intelligent match algorithms, real-time league standings, and dynamic team management with an intuitive web interface built on Java Spring Boot.',
            github: 'https://github.com/arturpereira12/poo_brasileirao',
            image: 'brasileirao-adr.png',
            number: '03'
        }
    ]

    return (
        <div className="min-h-screen py-16 px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <div className="mb-12">
                    <h1 className={`text-4xl font-bold mb-4 transition-colors ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                        Projects
                    </h1>
                    <p className={`text-lg font-mono ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Selected work
                    </p>
                </div>

                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ x: 4 }}
                            className={`elegant-card p-6 rounded-lg border transition-all duration-300 hover:shadow-xl group ${
                                darkMode
                                    ? 'bg-[#0d1a2d] border-[#1a2d4a] hover:border-[#2a4a6a]'
                                    : 'bg-[#f5ebe0] border-[#e6d5c3] hover:border-[#d5c4a1]'
                            }`}
                        >
                            <div className="flex items-start gap-6">
                                {/* Project Number */}
                                <div className={`text-5xl font-bold font-mono opacity-20 transition-opacity duration-300 group-hover:opacity-40 ${
                                    darkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                    {project.number}
                                </div>

                                {/* Project Content */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <h3 className={`text-xl font-bold transition-colors duration-300 ${
                                            darkMode ? 'text-white group-hover:text-gray-300' : 'text-gray-900 group-hover:text-gray-700'
                                        }`}>
                                            {project.title}
                                        </h3>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex-shrink-0 p-2 rounded-lg transition-all duration-300 ${
                                                darkMode
                                                    ? 'text-gray-400 hover:text-white hover:bg-[#1a2d4a]'
                                                    : 'text-gray-600 hover:text-gray-900 hover:bg-[#ede0d4]'
                                            }`}
                                        >
                                            <ArrowUpRight size={20} />
                                        </a>
                                    </div>
                                    
                                    <p className={`text-sm leading-relaxed mb-4 ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {project.description}
                                    </p>

                                    {/* Project Image */}
                                    {project.image && (
                                        <div className={`mb-4 rounded-lg overflow-hidden border ${
                                            darkMode ? 'border-[#1a2d4a]' : 'border-[#e6d5c3]'
                                        }`}>
                                            <img
                                                src={`${import.meta.env.BASE_URL}${project.image}`}
                                                alt={project.title}
                                                className="w-full h-40 object-cover"
                                            />
                                        </div>
                                    )}

                                    {/* Links */}
                                    <div className="flex items-center gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`link-underline flex items-center gap-2 text-sm font-mono transition-colors ${
                                                darkMode
                                                    ? 'text-gray-400 hover:text-white'
                                                    : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                        >
                                            <Github size={16} />
                                            <span>Repository</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Projects
