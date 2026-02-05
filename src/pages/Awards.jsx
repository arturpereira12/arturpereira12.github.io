import { motion } from 'framer-motion'
import { Award, Trophy, Medal, Star } from 'lucide-react'

const Awards = ({ darkMode }) => {
    const awards = [
        {
            title: 'Highest Essay Score in Paraíba',
            competition: 'ENEM (National High School Exam)',
            year: '2023',
            description: 'Achieved 980/1000 on the essay, the highest score in the state of Paraíba.',
            icon: Trophy,
            highlight: true
        },
        {
            title: 'Gold Medal',
            competition: 'OBA - Brazilian Astronomy Olympiad',
            year: '2019',
            description: 'Awarded gold medal for outstanding performance in astronomy and astronautics.',
            icon: Medal,
            color: 'gold'
        },
        {
            title: 'Silver Medal',
            competition: 'OBG - Brazilian Geography Olympiad',
            year: '2018-2023',
            description: 'Multiple silver medals in the Brazilian Geography Olympiad.',
            icon: Medal,
            color: 'silver'
        },
        {
            title: 'Bronze Medal',
            competition: 'OBEF - Brazilian Economics Olympiad',
            year: '2018-2023',
            description: 'Bronze medal recognition in the Brazilian Economics Olympiad.',
            icon: Medal,
            color: 'bronze'
        },
        {
            title: 'José Lins do Rêgo Award',
            competition: 'Outstanding Student of Paraíba',
            year: '2023',
            description: 'Recognized as Outstanding Student of Paraíba for achievements in academic olympiads.',
            icon: Award,
            highlight: true
        }
    ]

    const getMedalColor = (color) => {
        switch (color) {
            case 'gold':
                return 'text-yellow-500'
            case 'silver':
                return 'text-gray-400'
            case 'bronze':
                return 'text-amber-600'
            default:
                return darkMode ? 'text-blue-400' : 'text-blue-600'
        }
    }

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
                        Awards & Achievements
                    </h1>
                    <p className={`text-lg font-mono ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Academic recognition
                    </p>
                </div>

                <div className="space-y-6">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ x: 4 }}
                            className={`elegant-card p-6 rounded-lg border transition-all duration-300 hover:shadow-xl group ${
                                award.highlight
                                    ? darkMode
                                        ? 'bg-gradient-to-r from-[#0d1a2d] to-[#1a2d4a] border-blue-500/30'
                                        : 'bg-gradient-to-r from-[#f5ebe0] to-[#e6d5c3] border-blue-400/30'
                                    : darkMode
                                        ? 'bg-[#0d1a2d] border-[#1a2d4a] hover:border-[#2a4a6a]'
                                        : 'bg-[#f5ebe0] border-[#e6d5c3] hover:border-[#d5c4a1]'
                            }`}
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                    darkMode ? 'bg-[#1a2d4a]' : 'bg-[#e6d5c3]'
                                }`}>
                                    <award.icon size={24} className={getMedalColor(award.color)} />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <div>
                                            <h3 className={`text-lg font-bold ${
                                                darkMode ? 'text-white' : 'text-gray-900'
                                            }`}>
                                                {award.title}
                                            </h3>
                                            <p className={`font-medium ${
                                                darkMode ? 'text-gray-300' : 'text-gray-700'
                                            }`}>
                                                {award.competition}
                                            </p>
                                        </div>
                                        <span className={`px-3 py-1 text-xs font-mono rounded whitespace-nowrap ${
                                            award.highlight
                                                ? darkMode
                                                    ? 'bg-blue-900/30 text-blue-400'
                                                    : 'bg-blue-100 text-blue-700'
                                                : darkMode
                                                    ? 'bg-[#1a2d4a] text-gray-400'
                                                    : 'bg-[#e6d5c3] text-gray-600'
                                        }`}>
                                            {award.year}
                                        </span>
                                    </div>

                                    <p className={`leading-relaxed text-sm ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {award.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Summary Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className={`mt-12 p-6 rounded-lg border ${
                        darkMode
                            ? 'bg-[#0d1a2d] border-[#1a2d4a]'
                            : 'bg-[#f5ebe0] border-[#e6d5c3]'
                    }`}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className={`text-3xl font-bold ${
                                darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                                980
                            </div>
                            <div className={`text-xs font-mono ${
                                darkMode ? 'text-gray-500' : 'text-gray-500'
                            }`}>
                                ENEM Essay Score
                            </div>
                        </div>
                        <div>
                            <div className={`text-3xl font-bold text-yellow-500`}>
                                1
                            </div>
                            <div className={`text-xs font-mono ${
                                darkMode ? 'text-gray-500' : 'text-gray-500'
                            }`}>
                                Gold Medals
                            </div>
                        </div>
                        <div>
                            <div className={`text-3xl font-bold text-gray-400`}>
                                1+
                            </div>
                            <div className={`text-xs font-mono ${
                                darkMode ? 'text-gray-500' : 'text-gray-500'
                            }`}>
                                Silver Medals
                            </div>
                        </div>
                        <div>
                            <div className={`text-3xl font-bold text-amber-600`}>
                                1+
                            </div>
                            <div className={`text-xs font-mono ${
                                darkMode ? 'text-gray-500' : 'text-gray-500'
                            }`}>
                                Bronze Medals
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Awards
