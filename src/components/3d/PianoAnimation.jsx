import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const PianoAnimation = ({ darkMode }) => {
    const [playingKeys, setPlayingKeys] = useState(new Set())
    const [particles, setParticles] = useState([])
    const [currentNoteIndex, setCurrentNoteIndex] = useState(0)
    
    // Chopin Nocturne Op 9 No 2 - opening melody (simplified note sequence)
    // Each note represents a piano key number (0-87, where middle C = 39)
    const chopinMelody = [
        44, 46, 47, 46, 44, 42, 44, 39, // First phrase
        44, 46, 47, 46, 44, 42, 44, 39, // Repeat
        47, 49, 51, 49, 47, 46, 47, 44, // Second phrase
        42, 44, 46, 44, 42, 39, 37, 39, // Third phrase
        44, 46, 47, 46, 44, 42, 44, 39, // Return to theme
    ]

    // Convert piano key number to visual position
    const getKeyPosition = (keyNum) => {
        const whiteKeyWidth = 24
        const blackKeyWidth = 14
        
        // Simplified mapping for visual representation
        const octave = Math.floor(keyNum / 12)
        const noteInOctave = keyNum % 12
        const whiteKeyNotes = [0, 2, 4, 5, 7, 9, 11] // C, D, E, F, G, A, B
        const blackKeyNotes = [1, 3, 6, 8, 10] // C#, D#, F#, G#, A#
        
        if (whiteKeyNotes.includes(noteInOctave)) {
            const whiteKeyIndex = whiteKeyNotes.indexOf(noteInOctave)
            return {
                x: (octave * 7 + whiteKeyIndex) * whiteKeyWidth,
                isBlack: false,
                width: whiteKeyWidth,
                height: 120
            }
        } else {
            const blackKeyIndex = blackKeyNotes.indexOf(noteInOctave)
            const whiteKeysBefore = whiteKeyNotes.filter(note => note < noteInOctave).length
            return {
                x: (octave * 7 + whiteKeysBefore) * whiteKeyWidth - blackKeyWidth / 2,
                isBlack: true,
                width: blackKeyWidth,
                height: 80
            }
        }
    }

    // Create particles when key is played
    const createParticles = (keyNum) => {
        const keyPos = getKeyPosition(keyNum)
        
        const newParticles = Array.from({ length: 6 }, (_, i) => ({
            id: Math.random(),
            x: keyPos.x + keyPos.width / 2, // center of key
            y: -30, // start above the piano
            velocityX: (Math.random() - 0.5) * 3,
            velocityY: -Math.random() * 2 - 1,
            life: 1,
            size: Math.random() * 3 + 2
        }))
        
        setParticles(prev => [...prev, ...newParticles])
    }

    // Play melody
    useEffect(() => {
        const interval = setInterval(() => {
            const currentNote = chopinMelody[currentNoteIndex]
            
            // Play the note
            setPlayingKeys(prev => new Set([...prev, currentNote]))
            createParticles(currentNote)
            
            // Stop playing after duration
            setTimeout(() => {
                setPlayingKeys(prev => {
                    const newSet = new Set(prev)
                    newSet.delete(currentNote)
                    return newSet
                })
            }, 800)
            
            // Move to next note
            setCurrentNoteIndex(prev => (prev + 1) % chopinMelody.length)
        }, 1200) // Slow, elegant tempo

        return () => clearInterval(interval)
    }, [currentNoteIndex])

    // Animate particles
    useEffect(() => {
        const animationInterval = setInterval(() => {
            setParticles(prev => prev
                .map(particle => ({
                    ...particle,
                    x: particle.x + particle.velocityX,
                    y: particle.y + particle.velocityY,
                    velocityY: particle.velocityY + 0.1, // gravity
                    life: particle.life - 0.02
                }))
                .filter(particle => particle.life > 0)
            )
        }, 16) // ~60fps

        return () => clearInterval(animationInterval)
    }, [])

    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Background - clean minimal */}
            <div className={`absolute inset-0 ${
                darkMode 
                    ? 'bg-[#0a1628]' 
                    : 'bg-[#fdf8f3]'
            }`} />
            
            {/* Minimal particles */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <AnimatePresence>
                    {particles.map(particle => (
                        <div
                            key={particle.id}
                            className="absolute pointer-events-none"
                            style={{
                                left: `${particle.x}px`,
                                top: `${particle.y}px`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                        <div
                            className="rounded-full"
                            style={{
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                backgroundColor: darkMode 
                                    ? `rgba(102, 179, 255, ${particle.life})` 
                                    : `rgba(0, 102, 204, ${particle.life})`,
                            }}
                        />
                    </div>
                ))}
            </AnimatePresence>
            </div>

            {/* Minimal Piano */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex">
                    {/* White keys - outline only */}
                    {Array.from({ length: 52 }, (_, i) => {
                        const keyNum = i + 21
                        const isPlaying = playingKeys.has(keyNum)
                        return (
                            <motion.div
                                key={`white-${i}`}
                                className={`w-6 h-32 rounded-b-lg relative border-2 ${
                                    darkMode 
                                        ? (isPlaying 
                                            ? 'border-[#66b3ff] bg-[#66b3ff]/20' 
                                            : 'border-[#2a4a6a] bg-transparent')
                                        : (isPlaying 
                                            ? 'border-[#0066cc] bg-[#0066cc]/20' 
                                            : 'border-[#c4b393] bg-transparent')
                                }`}
                                animate={{
                                    y: isPlaying ? 2 : 0,
                                    scale: isPlaying ? 0.98 : 1,
                                }}
                                transition={{ duration: 0.1 }}
                            />
                        )
                    })}
                </div>

                {/* Black keys - outline only */}
                <div className="absolute top-0 flex">
                    {[1, 2, 4, 5, 6, 8, 9, 11, 12, 13, 15, 16, 18, 19, 20, 22, 23, 25, 26, 27, 29, 30, 32, 33, 34, 36, 37, 39, 40, 41, 43, 44, 46, 47, 48, 50, 51].map((pos, index) => {
                        const keyNum = pos + 21 + 52
                        const isPlaying = playingKeys.has(keyNum)
                        return (
                            <motion.div
                                key={`black-${index}`}
                                className={`w-4 h-20 rounded-b-lg absolute border-2 ${
                                    darkMode
                                        ? (isPlaying 
                                            ? 'border-[#66b3ff] bg-[#66b3ff]/30' 
                                            : 'border-[#1a2d4a] bg-transparent')
                                        : (isPlaying 
                                            ? 'border-[#0066cc] bg-[#0066cc]/30' 
                                            : 'border-[#8c7d6d] bg-transparent')
                                }`}
                                style={{ left: `${pos * 24 - 8}px` }}
                                animate={{
                                    y: isPlaying ? 1 : 0,
                                    scale: isPlaying ? 0.98 : 1,
                                }}
                                transition={{ duration: 0.1 }}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PianoAnimation