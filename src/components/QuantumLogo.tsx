import React from 'react';
import { motion } from 'framer-motion';

interface QuantumLogoProps {
  size?: 'small' | 'medium' | 'large';
}

const QuantumLogo: React.FC<QuantumLogoProps> = ({ size = 'medium' }) => {
  const sizeMap = {
    small: { width: 60, height: 60, radius: 25 },
    medium: { width: 120, height: 120, radius: 55 },
    large: { width: 180, height: 180, radius: 85 }
  };

  const { width, height, radius } = sizeMap[size];
  const centerX = width / 2;
  const centerY = height / 2;
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="quantum-logo"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Quantum Ring */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="url(#quantumGradient1)"
          strokeWidth="2"
          opacity="0.8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Middle Ring */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius * 0.7}
          fill="none"
          stroke="url(#quantumGradient2)"
          strokeWidth="2"
          opacity="0.9"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
        
        {/* Inner Ring */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius * 0.4}
          fill="none"
          stroke="url(#quantumGradient3)"
          strokeWidth="2"
          opacity="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        />
        
        {/* Central Quantum Symbol */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {/* Quantum Wave Symbol */}
          <motion.path
            d={`M${centerX - radius * 0.25} ${centerY} Q${centerX} ${centerY - radius * 0.25} ${centerX + radius * 0.25} ${centerY} Q${centerX} ${centerY + radius * 0.25} ${centerX - radius * 0.25} ${centerY}`}
            fill="url(#quantumGradient4)"
            stroke="url(#quantumGradient4)"
            strokeWidth="1"
            animate={{
              d: [
                `M${centerX - radius * 0.25} ${centerY} Q${centerX} ${centerY - radius * 0.25} ${centerX + radius * 0.25} ${centerY} Q${centerX} ${centerY + radius * 0.25} ${centerX - radius * 0.25} ${centerY}`,
                `M${centerX - radius * 0.25} ${centerY} Q${centerX} ${centerY - radius * 0.2} ${centerX + radius * 0.25} ${centerY} Q${centerX} ${centerY + radius * 0.2} ${centerX - radius * 0.25} ${centerY}`,
                `M${centerX - radius * 0.25} ${centerY} Q${centerX} ${centerY - radius * 0.25} ${centerX + radius * 0.25} ${centerY} Q${centerX} ${centerY + radius * 0.25} ${centerX - radius * 0.25} ${centerY}`
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Quantum Dots */}
          <motion.circle
            cx={centerX - radius * 0.25}
            cy={centerY}
            r="3"
            fill="#00ffff"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx={centerX + radius * 0.25}
            cy={centerY}
            r="3"
            fill="#ff00ff"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 2, delay: 1, repeat: Infinity }}
          />
          <motion.circle
            cx={centerX}
            cy={centerY - radius * 0.25}
            r="3"
            fill="#00ff00"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          />
          <motion.circle
            cx={centerX}
            cy={centerY + radius * 0.25}
            r="3"
            fill="#ffff00"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
          />
        </motion.g>
        
        {/* Quantum Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={centerX + Math.cos((i * 45) * Math.PI / 180) * radius * 0.9}
            cy={centerY + Math.sin((i * 45) * Math.PI / 180) * radius * 0.9}
            r="2"
            fill={`hsl(${i * 45}, 70%, 60%)`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 4,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Gradients */}
        <defs>
          <linearGradient id="quantumGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="50%" stopColor="#ff00ff" />
            <stop offset="100%" stopColor="#00ffff" />
          </linearGradient>
          <linearGradient id="quantumGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff00ff" />
            <stop offset="50%" stopColor="#00ff00" />
            <stop offset="100%" stopColor="#ff00ff" />
          </linearGradient>
          <linearGradient id="quantumGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff00" />
            <stop offset="50%" stopColor="#ffff00" />
            <stop offset="100%" stopColor="#00ff00" />
          </linearGradient>
          <linearGradient id="quantumGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="100%" stopColor="#ff00ff" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default QuantumLogo;
