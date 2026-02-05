import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

const Books = ({ darkMode }) => {
    const books = [
        {
            title: 'Grokking Algorithms',
            author: 'Aditya Y. Bhargava',
            year: '2016',
            review: 'This book served as my gateway into the world of algorithms and data structures. Its visual approach and clear explanations helped me grasp crucial concepts that became the foundation of my understanding in this area.',
            cover: 'entend_alg.jpg',
            reading: false
        },
        {
            title: 'The Pragmatic Programmer',
            author: 'Andrew Hunt, David Thomas',
            year: '2019',
            review: 'The insights on handling code and navigating real world situations have shaped my approach to software development, it offers perspectives on craftsmanship, problem solving, and the mindset needed to build quality software.',
            cover: 'prag_pro.jpg',
            reading: false
        },
        {
            title: 'Fundamentals of Software Architecture',
            author: 'Mark Richards, Neal Ford',
            year: '2020',
            review: 'It opened my eyes to the world of software architecture. It introduced me to different architectural styles, the art of understanding trade offs, and the organizational thinking required to design scalable systems. ', 
            cover: 'fund_arq.jpg',
            reading: false
        },
        {
            title: 'Data Science from Scratch',
            author: 'Joel Grus',
            year: '2019',
            review: 'Helped me revisit and deepen my understanding of core data science concepts. The hands on approach made complex topics accessible, reinforcing my foundation in this field.',
            cover: 'data_scra.jpg',
            reading: false
        },
        {
            title: 'The Silmarillion',
            author: 'J.R.R. Tolkien',
            year: '1977',
            review: 'Middle Earth lover exploring the books',
            cover: 'sillma.jpg',
            reading: true
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
                        Books
                    </h1>
                    <p className={`text-lg font-mono ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        My Bookshelf
                    </p>
                </div>

                <div className="space-y-8">
                    {books.length === 0 ? (
                        <div className={`text-center py-20 ${
                            darkMode ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                            <BookOpen size={48} className="mx-auto mb-4 opacity-50" />
                            <p className="font-mono text-sm">No books added yet</p>
                        </div>
                    ) : (
                        books.map((book, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.01 }}
                                className={`elegant-card p-6 rounded-lg border transition-all duration-300 hover:shadow-xl group ${
                                    darkMode
                                        ? 'bg-[#0d1a2d] border-[#1a2d4a] hover:border-[#2a4a6a]'
                                        : 'bg-[#f5ebe0] border-[#e6d5c3] hover:border-[#d5c4a1]'
                                }`}
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    {book.cover && (
                                        <div className="w-32 h-48 flex-shrink-0 rounded overflow-hidden shadow-md">
                                            <img
                                                src={`${import.meta.env.BASE_URL}${book.cover}`}
                                                alt={book.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                            <h3 className={`text-2xl font-bold ${
                                                darkMode ? 'text-white' : 'text-gray-900'
                                            }`}>
                                                {book.title}
                                            </h3>
                                            {book.reading && (
                                                <span className={`px-3 py-1 text-xs font-mono rounded whitespace-nowrap ${
                                                    darkMode
                                                        ? 'bg-blue-900/30 text-blue-400'
                                                        : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                    Currently Reading
                                                </span>
                                            )}
                                        </div>
                                        <p className={`text-sm font-mono mb-4 ${
                                            darkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            {book.author} • {book.year}
                                        </p>

                                        {book.review && (
                                            <p className={`leading-relaxed ${
                                                darkMode ? 'text-gray-300' : 'text-gray-700'
                                            }`}>
                                                {book.review}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </motion.div>
        </div>
    )
}

export default Books
