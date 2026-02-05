import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Calendar } from 'lucide-react'

const Experiences = ({ darkMode }) => {
    const experience = [
        {
            title: 'Summer Intern (IT & Data)',
            company: 'Office of Federal Deputy Tabata Amaral',
            period: 'Jun 2025 - Sep 2025',
            location: 'Brasília, DF, Brazil',
            description: 'Database structuring with over 40,000 contacts using Pandas and R for data analysis and organization.',
            current: true
        },
        {
            title: 'AI Intern',
            company: 'ARIA - AI Lab (UFPB)',
            period: 'Feb 2025 - Jul 2025',
            location: 'João Pessoa, PB, Brazil',
            description: 'Development of dynamic visual effects using OpenCV for FilmaEu startup.',
            current: true,
            logo: 'aria.png',
            asset: 'filmaeu.png'
        },
        {
            title: 'Trainee',
            company: 'TRILHA Program (UFPB)',
            period: 'Aug 2024 - Dec 2024',
            location: 'João Pessoa, PB, Brazil',
            description: 'Solid foundation in Python applied to mentorship projects. Developed programming logic and AI skills.',
            current: false,
            logo: 'trilha.png'
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
                        Experience
                    </h1>
                    <p className={`text-lg font-mono ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        My journey in tech
                    </p>
                </div>

                <div className="space-y-6">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={`${exp.company}-${index}`}
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
                            <div className="flex items-start gap-4">
                                {/* Logo */}
                                <div className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center bg-white border border-gray-200 overflow-hidden">
                                    {exp.logo ? (
                                        exp.company === 'SeverinoBiu' ? (
                                            <a
                                                href="https://severinobiu.com.br/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full h-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
                                            >
                                                <img
                                                    src={`${import.meta.env.BASE_URL}${exp.logo}`}
                                                    alt={`${exp.company} Logo`}
                                                    className="w-full h-full object-contain p-1"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextElementSibling.style.display = 'flex';
                                                    }}
                                                />
                                            </a>
                                        ) : (
                                            <img
                                                src={`${import.meta.env.BASE_URL}${exp.logo}`}
                                                alt={`${exp.company} Logo`}
                                                className="w-full h-full object-contain p-1"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextElementSibling.style.display = 'flex';
                                                }}
                                            />
                                        )
                                    ) : null}
                                    <span className={`text-xl font-bold ${
                                        exp.logo ? 'hidden' : 'flex'
                                    } ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        {exp.company.charAt(0)}
                                    </span>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <div>
                                            <h3 className={`text-lg font-bold ${
                                                darkMode ? 'text-white' : 'text-gray-900'
                                            }`}>
                                                {exp.title}
                                            </h3>
                                            <p className={`font-medium ${
                                                darkMode ? 'text-gray-300' : 'text-gray-700'
                                            }`}>
                                                {exp.company}
                                            </p>
                                        </div>
                                        {exp.current && (
                                            <span className={`px-2 py-1 text-xs font-mono rounded ${
                                                darkMode
                                                    ? 'bg-blue-900/30 text-blue-400'
                                                    : 'bg-blue-100 text-blue-700'
                                            }`}>
                                                Current
                                            </span>
                                        )}
                                    </div>

                                    <div className={`flex flex-wrap gap-3 text-sm mb-3 ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        <span className="flex items-center gap-1 font-mono text-xs">
                                            <Calendar size={14} />
                                            {exp.period}
                                        </span>
                                        {exp.location && (
                                            <span className="flex items-center gap-1 font-mono text-xs">
                                                <MapPin size={14} />
                                                {exp.location}
                                            </span>
                                        )}
                                    </div>

                                    <p className={`leading-relaxed text-sm ${
                                        darkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                        {exp.description}
                                    </p>

                                    {/* Linked Asset */}
                                    {exp.link && exp.asset && (
                                        <div className="mt-4">
                                            <a
                                                href={exp.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block group"
                                            >
                                                <div className={`relative overflow-hidden rounded border ${
                                                    darkMode ? 'border-[#1a2d4a]' : 'border-[#e6d5c3]'
                                                }`}>
                                                    <img
                                                        src={`${import.meta.env.BASE_URL}${exp.asset}`}
                                                        alt="Reference"
                                                        className="h-20 w-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                                        <ExternalLink size={14} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Experiences
