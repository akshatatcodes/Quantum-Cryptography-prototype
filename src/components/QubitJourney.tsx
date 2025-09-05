import React from 'react';
import { motion } from 'framer-motion';

const QubitJourney: React.FC = () => {
  const qubits = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
    delay: i * 0.5,
    color: i % 2 === 0 ? 'aqua-glow' : 'violet-pulse',
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="w-[2px] h-[80vh] bg-gradient-to-b from-aqua-glow/30 to-violet-pulse/30 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ height: 0 }}
        animate={{ height: '80vh' }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />
      {qubits.map(qubit => (
        <motion.div
          key={qubit.id}
          className={`qubit-path ${qubit.color}`}
          style={{
            width: '10px',
            height: '10px',
            left: `${qubit.x}%`,
            top: '10%',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            top: ['10%', '50%', '90%'],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 5,
            delay: qubit.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            className="absolute -left-2 -top-2 w-5 h-5 rounded-full bg-energy-aura/50"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default QubitJourney;