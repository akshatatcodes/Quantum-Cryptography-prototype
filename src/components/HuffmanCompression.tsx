import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileArchive, Zap, TrendingDown, Clock } from 'lucide-react';

interface HuffmanCompressionProps {
  isActive: boolean;
}

const HuffmanCompression: React.FC<HuffmanCompressionProps> = ({ isActive }) => {
  const [progress, setProgress] = useState(0);
  const [compressionRatio, setCompressionRatio] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    { name: 'Analyzing', desc: 'Scanning character frequencies' },
    { name: 'Building Tree', desc: 'Constructing Huffman tree' },
    { name: 'Encoding', desc: 'Generating optimal codes' },
    { name: 'Compressing', desc: 'Applying compression algorithm' },
    { name: 'Optimizing', desc: 'Final optimization pass' },
  ];

  useEffect(() => {
    if (isActive) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsComplete(true);
            return 100;
          }
          return prev + 8;
        });
      }, 200);

      const ratioTimer = setInterval(() => {
        setCompressionRatio(prev => {
          if (prev >= 75) return 75;
          return prev + 3;
        });
      }, 150);

      const phaseTimer = setInterval(() => {
        setCurrentPhase(prev => (prev + 1) % phases.length);
      }, 1000);

      return () => {
        clearInterval(timer);
        clearInterval(ratioTimer);
        clearInterval(phaseTimer);
      };
    }
  }, [isActive, phases.length]);

  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="space-y-8"
    >
      {/* Description */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Data is being compressed using Huffman coding, optimizing it for quantum processing by assigning 
          shorter codes to frequent symbols, preparing it for BB84 protocol transmission.
        </p>
      </motion.div>

      {/* Compression Visualization */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Progress Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
            <FileArchive size={24} className="text-purple-400" />
            <span>Compression Progress</span>
          </h3>
          
          {/* Main Progress Bar */}
          <div className="space-y-3">
            <div className="w-full bg-gray-700 rounded-full h-6 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>0%</span>
              <span className="font-medium text-purple-400">{progress}%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Phase Indicator */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-blue-400" />
              <span className="text-sm text-gray-300">Current Phase:</span>
            </div>
            <motion.div
              key={currentPhase}
              className="p-4 bg-blue-500/10 border border-blue-400/30 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-semibold text-blue-400">{phases[currentPhase].name}</h4>
              <p className="text-sm text-gray-300">{phases[currentPhase].desc}</p>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
            <TrendingDown size={24} className="text-green-400" />
            <span>Compression Stats</span>
          </h3>

          {/* Compression Ratio */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Compression Ratio</span>
              <span className="text-green-400 font-bold">{compressionRatio}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${compressionRatio}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </div>
          </div>

          {/* Size Reduction */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="p-4 bg-red-500/10 border border-red-400/30 rounded-lg text-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-2xl font-bold text-red-400">1.2MB</div>
              <div className="text-sm text-gray-300">Original Size</div>
            </motion.div>
            <motion.div
              className="p-4 bg-green-500/10 border border-green-400/30 rounded-lg text-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <div className="text-2xl font-bold text-green-400">
                {isComplete ? '300KB' : `${Math.round(1200 * (1 - compressionRatio / 100))}KB`}
              </div>
              <div className="text-sm text-gray-300">Compressed Size</div>
            </motion.div>
          </div>

          {/* Efficiency Metrics */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-300">Processing Speed</span>
              <span className="text-blue-400">2.4 GB/s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Memory Usage</span>
              <span className="text-yellow-400">156 MB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">CPU Efficiency</span>
              <span className="text-green-400">94%</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Algorithm Visualization */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
          <Zap size={24} className="text-yellow-400" />
          <span>Huffman Tree Construction</span>
        </h3>
        
        <div className="grid grid-cols-5 gap-2">
          {['A', 'B', 'C', 'D', 'E'].map((char, index) => (
            <motion.div
              key={char}
              className="p-3 bg-gray-700 rounded-lg text-center"
              animate={{
                scale: currentPhase >= 1 ? [1, 1.1, 1] : 1,
                backgroundColor: currentPhase >= 1 ? ['#374151', '#8b5cf6', '#374151'] : '#374151',
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-white font-bold">{char}</div>
              <div className="text-xs text-gray-400">{Math.floor(Math.random() * 20) + 5}%</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Completion Status */}
      {isComplete && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full"
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(16, 185, 129, 0.3)',
                '0 0 30px rgba(16, 185, 129, 0.5)',
                '0 0 20px rgba(16, 185, 129, 0.3)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FileArchive size={20} className="text-green-400" />
            <span className="text-green-300 font-medium">Compression Complete!</span>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HuffmanCompression;