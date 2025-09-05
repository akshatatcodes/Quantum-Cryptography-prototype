import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Key, Shield, Lock, Eye, EyeOff, RefreshCw } from 'lucide-react';

interface KeyGenerationProps {
  isActive: boolean;
}

const KeyGeneration: React.FC<KeyGenerationProps> = ({ isActive }) => {
  const [keyProgress, setKeyProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showKey, setShowKey] = useState(false);
  const [keyStrength, setKeyStrength] = useState(0);

  const steps = [
    { name: 'Quantum State Init', desc: 'Initializing quantum states' },
    { name: 'Entanglement Setup', desc: 'Creating entangled pairs' },
    { name: 'Key Derivation', desc: 'Deriving encryption keys' },
    { name: 'Security Validation', desc: 'Validating key security' },
    { name: 'Key Exchange', desc: 'Exchanging keys securely' },
  ];

  const generatedKey = 'Q6F-4B7C-9E2A-8D1F-3C5E-7A9B-2D4F-6E8C';

  useEffect(() => {
    if (isActive) {
      const timer = setInterval(() => {
        setKeyProgress(prev => {
          if (prev >= 100) {
            setIsComplete(true);
            return 100;
          }
          return prev + 6;
        });
      }, 150);

      const stepTimer = setInterval(() => {
        setCurrentStep(prev => (prev + 1) % steps.length);
      }, 1200);

      const strengthTimer = setInterval(() => {
        setKeyStrength(prev => {
          if (prev >= 256) return 256;
          return prev + 8;
        });
      }, 100);

      return () => {
        clearInterval(timer);
        clearInterval(stepTimer);
        clearInterval(strengthTimer);
      };
    }
  }, [isActive, steps.length]);

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
          A secure quantum key is being generated using BB84 protocol and quantum state exchange. 
          This ensures perfect privacy through detection of any interception attempts.
        </p>
      </motion.div>

      {/* Key Generation Process */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Progress Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
            <Key size={24} className="text-green-400" />
            <span>Key Generation</span>
          </h3>
          
          {/* Progress Bar */}
          <div className="space-y-3">
            <div className="w-full bg-gray-700 rounded-full h-6 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${keyProgress}%` }}
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
              <span className="font-medium text-green-400">{keyProgress}%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Current Step */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <RefreshCw size={16} className="text-blue-400" />
              <span className="text-sm text-gray-300">Current Step:</span>
            </div>
            <motion.div
              key={currentStep}
              className="p-4 bg-green-500/10 border border-green-400/30 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-semibold text-green-400">{steps[currentStep].name}</h4>
              <p className="text-sm text-gray-300">{steps[currentStep].desc}</p>
            </motion.div>
          </div>
        </div>

        {/* Key Details Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
            <Shield size={24} className="text-blue-400" />
            <span>Key Properties</span>
          </h3>

          {/* Key Strength */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Key Strength</span>
              <span className="text-blue-400 font-bold">{keyStrength} bits</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(keyStrength / 256) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </div>
          </div>

          {/* Security Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="p-4 bg-blue-500/10 border border-blue-400/30 rounded-lg text-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-2xl font-bold text-blue-400">BB84</div>
              <div className="text-sm text-gray-300">Protocol</div>
            </motion.div>
            <motion.div
              className="p-4 bg-purple-500/10 border border-purple-400/30 rounded-lg text-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <div className="text-2xl font-bold text-purple-400">QKD</div>
              <div className="text-sm text-gray-300">Key Distribution</div>
            </motion.div>
          </div>

          {/* Generated Key Display */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Generated Key</span>
              <button
                onClick={() => setShowKey(!showKey)}
                className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
                <span className="text-sm">{showKey ? 'Hide' : 'Show'}</span>
              </button>
            </div>
            <motion.div
              className="p-4 bg-gray-800 border border-gray-600 rounded-lg font-mono text-sm"
              animate={{ opacity: isComplete ? 1 : 0.5 }}
            >
              {showKey ? generatedKey : '••••••••••••••••••••••••••••••••••••••••'}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Quantum Security Features */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
          <Lock size={24} className="text-purple-400" />
          <span>Quantum Security Features</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Superposition', desc: 'Multiple states simultaneously', color: 'blue' },
            { name: 'Entanglement', desc: 'Instant correlation detection', color: 'purple' },
            { name: 'No-Cloning', desc: 'Impossible to duplicate', color: 'green' },
          ].map((feature, index) => (
            <motion.div
              key={feature.name}
              className={`p-4 bg-${feature.color}-500/10 border border-${feature.color}-400/30 rounded-lg`}
              animate={{
                scale: currentStep >= index ? [1, 1.05, 1] : 1,
                opacity: currentStep >= index ? 1 : 0.6,
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h4 className={`font-semibold text-${feature.color}-400`}>{feature.name}</h4>
              <p className="text-sm text-gray-300">{feature.desc}</p>
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
            <Key size={20} className="text-green-400" />
            <span className="text-green-300 font-medium">Key Generation Complete!</span>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default KeyGeneration;