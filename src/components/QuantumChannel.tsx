import React from 'react';
import { motion } from 'framer-motion';

const QuantumChannel: React.FC = () => {
  // Enhanced qubit configuration
  const qubits = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    delay: i * 0.3,
    color: i % 3 === 0 ? 'from-blue-400 to-cyan-300' : i % 3 === 1 ? 'from-purple-400 to-pink-300' : 'from-green-400 to-emerald-300',
    angle: (i * 45) % 360,
    size: Math.random() * 8 + 6,
    speed: Math.random() * 2 + 3,
  }));

  // Quantum particles for background effect
  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    color: ['blue', 'purple', 'green', 'pink'][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated Background Particles */}
      {particles.map(particle => (
        <motion.div
          key={`particle-${particle.id}`}
          className={`absolute w-${particle.size} h-${particle.size} rounded-full bg-${particle.color}-400/20`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.2, 0.5],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main Quantum Channel Ring */}
      <motion.div
        className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        {/* Outer Ring */}
        <motion.div
          className="w-80 h-80 rounded-full border-2 border-blue-400/30"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
        
        {/* Middle Ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-purple-400/40"
          animate={{
            rotate: -360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
            scale: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          }}
        />
        
        {/* Inner Ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-green-400/50"
          animate={{
            rotate: 360,
            scale: [1, 1.08, 1],
          }}
          transition={{
            rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          }}
        />

        {/* Central Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
            background: [
              'radial-gradient(circle, #3b82f6 0%, #8b5cf6 50%, #10b981 100%)',
              'radial-gradient(circle, #8b5cf6 0%, #10b981 50%, #3b82f6 100%)',
              'radial-gradient(circle, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
              'radial-gradient(circle, #3b82f6 0%, #8b5cf6 50%, #10b981 100%)',
            ],
          }}
          transition={{
            scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            background: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.5)',
                '0 0 40px rgba(139, 92, 246, 0.7)',
                '0 0 20px rgba(16, 185, 129, 0.5)',
                '0 0 20px rgba(59, 130, 246, 0.5)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Enhanced Sender Node */}
      <motion.div
        className="absolute left-1/4 top-1/3 transform -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 20px rgba(59, 130, 246, 0.5)',
              '0 0 30px rgba(59, 130, 246, 0.8)',
              '0 0 20px rgba(59, 130, 246, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="absolute inset-2 rounded-full bg-white/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
        <motion.span
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-white bg-black/50 px-2 py-1 rounded"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Sender
        </motion.span>
      </motion.div>

      {/* Enhanced Receiver Node */}
      <motion.div
        className="absolute right-1/4 top-1/3 transform -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 shadow-lg"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 20px rgba(139, 92, 246, 0.5)',
              '0 0 30px rgba(139, 92, 246, 0.8)',
              '0 0 20px rgba(139, 92, 246, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <motion.div
            className="absolute inset-2 rounded-full bg-white/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
        <motion.span
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-white bg-black/50 px-2 py-1 rounded"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          Receiver
        </motion.span>
      </motion.div>

      {/* Enhanced Qubit Particles */}
      {qubits.map(qubit => (
        <motion.div
          key={qubit.id}
          className="absolute"
          style={{
            left: '50%',
            top: '33.33%',
            width: `${qubit.size}px`,
            height: `${qubit.size}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            x: [
              0,
              Math.cos((qubit.angle * Math.PI) / 180) * 120,
              Math.cos((qubit.angle * Math.PI) / 180) * 160,
              0,
            ],
            y: [
              0,
              Math.sin((qubit.angle * Math.PI) / 180) * 120,
              Math.sin((qubit.angle * Math.PI) / 180) * 160,
              0,
            ],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1.2, 0],
          }}
          transition={{
            duration: qubit.speed,
            delay: qubit.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            className={`w-full h-full rounded-full bg-gradient-to-r ${qubit.color} shadow-lg`}
            animate={{
              boxShadow: [
                '0 0 10px rgba(59, 130, 246, 0.5)',
                '0 0 20px rgba(139, 92, 246, 0.8)',
                '0 0 10px rgba(16, 185, 129, 0.5)',
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="absolute inset-1 rounded-full bg-white/30"
              animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.3, 0.8] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Quantum Field Lines */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`field-${i}`}
          className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
          style={{
            left: `${20 + (i * 5)}%`,
            top: '20%',
            transform: `rotate(${i * 15}deg)`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Energy Waves */}
      <motion.div
        className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-blue-400/20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-purple-400/20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.1, 0.4],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
    </div>
  );
};

export default QuantumChannel;