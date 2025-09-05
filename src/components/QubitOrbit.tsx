import React from 'react';
import { motion } from 'framer-motion';

const QubitOrbit: React.FC = () => {
  const qubits = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 3 + 2,
    offset: Math.random() * 360,
    color: ['neon-cyan', 'neon-violet', 'neon-lime'][i % 3],
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {qubits.map(qubit => (
        <motion.div
          key={qubit.id}
          className={`qubit-particle ${qubit.color}`}
          style={{
            width: `${qubit.size}px`,
            height: `${qubit.size}px`,
            left: `${Math.sin(qubit.offset + Date.now() / 1000) * 30 + 50}%`,
            top: `${Math.cos(qubit.offset + Date.now() / 1000) * 30 + 50}%`,
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.7, 1, 0.7],
            rotate: [0, 360],
          }}
          transition={{
            duration: qubit.speed,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default QubitOrbit;