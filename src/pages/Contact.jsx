import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'

const Contact = ({ darkMode }) => {
    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'arturguedespereira@gmail.com',
            link: 'mailto:arturguedespereira@gmail.com'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'João Pessoa, PB, Brazil',
            link: null
        }
    ]

    return (
        <div className="min-h-screen flex items-center justify-center px-8 py-16">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl w-full"
            >
                <div className="mb-12">
                    <h1 className={`text-4xl font-bold mb-4 transition-colors ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                        Get In Touch
                    </h1>
                    <p className={`text-lg ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        If you have any questions or would you like to discuss something specific with me, just get in touch!
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-4 mb-12">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={info.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`p-6 rounded-lg border transition-all duration-300 ${
                                darkMode
                                    ? 'bg-[#0d1a2d] border-[#1a2d4a] hover:border-[#2a4a6a]'
                                    : 'bg-[#f5ebe0] border-[#e6d5c3] hover:border-[#d5c4a1]'
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                    darkMode ? 'bg-[#1a2d4a]' : 'bg-[#e6d5c3]'
                                }`}>
                                    <info.icon size={20} className={
                                        darkMode ? 'text-gray-300' : 'text-gray-700'
                                    } />
                                </div>
                                <div className="flex-1">
                                    <p className={`text-xs font-mono uppercase tracking-wider mb-1 ${
                                        darkMode ? 'text-gray-500' : 'text-gray-500'
                                    }`}>
                                        {info.label}
                                    </p>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            className={`font-medium transition-colors ${
                                                darkMode
                                                    ? 'text-white hover:text-gray-300'
                                                    : 'text-gray-900 hover:text-gray-700'
                                            }`}
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className={`font-medium ${
                                            darkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                            {info.value}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={`p-6 rounded-lg border ${
                        darkMode
                            ? 'bg-[#0d1a2d] border-[#1a2d4a]'
                            : 'bg-[#f5ebe0] border-[#e6d5c3]'
                    }`}
                >
                    <p className={`text-xs font-mono uppercase tracking-wider mb-4 ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                        Quick Links
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <a
                            href="https://github.com/arturpereira12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-4 py-3 rounded-lg text-sm font-mono text-center transition-all ${
                                darkMode
                                    ? 'bg-[#1a2d4a] text-white hover:bg-[#243a5e]'
                                    : 'bg-[#ede0d4] text-gray-900 hover:bg-[#e6d5c3] border border-[#d5c4a1]'
                            }`}
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/arturpereira12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-4 py-3 rounded-lg text-sm font-mono text-center transition-all ${
                                darkMode
                                    ? 'bg-[#1a2d4a] text-white hover:bg-[#243a5e]'
                                    : 'bg-[#ede0d4] text-gray-900 hover:bg-[#e6d5c3] border border-[#d5c4a1]'
                            }`}
                        >
                            LinkedIn
                        </a>
                        <a
                            href={`${import.meta.env.BASE_URL}Pereira-Artur-CV.pdf`}
                            download
                            className={`col-span-2 px-4 py-3 rounded-lg text-sm font-mono text-center transition-all ${
                                darkMode
                                    ? 'bg-[#1a2d4a] text-white hover:bg-[#243a5e]'
                                    : 'bg-[#ede0d4] text-gray-900 hover:bg-[#e6d5c3] border border-[#d5c4a1]'
                            }`}
                        >
                            Resume
                        </a>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-8"
                >
                    <a
                        href="mailto:arturguedespereira@gmail.com"
                        className={`group flex items-center justify-center gap-2 w-full px-6 py-4 rounded-lg font-mono text-sm transition-all ${
                            darkMode
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-[#0066cc] text-white hover:bg-[#0052a3]'
                        }`}
                    >
                        <Send size={16} />
                        <span>Send me an email</span>
                    </a>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Contact
