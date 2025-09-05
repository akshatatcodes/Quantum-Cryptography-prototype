import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Database, Network } from 'lucide-react';

interface GateEncryptionProps {
  isActive: boolean;
}

const GateEncryption: React.FC<GateEncryptionProps> = ({ isActive }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [encryptionProgress, setEncryptionProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentGate, setCurrentGate] = useState(0);

  const steps = [
    { 
      name: 'Quantum State Preparation', 
      desc: 'Qubits are prepared in superposition states for secure transmission',
      icon: '🌀',
      color: 'from-blue-500 to-cyan-400',
      gates: ['State Prep', 'Superposition', 'Phase Control']
    },
    { 
      name: 'BB84 Protocol', 
      desc: 'Quantum key distribution using BB84 protocol for secure key exchange',
      icon: '🔗',
      color: 'from-purple-500 to-pink-400',
      gates: ['BB84', 'Key Exchange', 'Security Check']
    },
    { 
      name: 'Quantum Measurement', 
      desc: 'Quantum states are measured to extract classical information',
      icon: '📊',
      color: 'from-green-500 to-emerald-400',
      gates: ['Measurement', 'State Collapse', 'Data Extraction']
    },
    { 
      name: 'Error Detection', 
      desc: 'Quantum error detection ensures data integrity and security',
      icon: '🛡️',
      color: 'from-yellow-500 to-orange-400',
      gates: ['Error Check', 'Security Validation', 'Integrity Verify']
    },
  ];

  const quantumGates = [
    { name: 'State Prep', symbol: 'S', effect: 'Prepares quantum states' },
    { name: 'BB84', symbol: 'B', effect: 'BB84 protocol' },
    { name: 'Measurement', symbol: 'M', effect: 'Quantum measurement' },
    { name: 'Phase Control', symbol: 'P', effect: 'Phase manipulation' },
    { name: 'Security Check', symbol: 'C', effect: 'Security validation' },
    { name: 'Error Check', symbol: 'E', effect: 'Error detection' },
  ];

  useEffect(() => {
    if (isActive) {
      const stepInterval = setInterval(() => {
        setActiveStep(prev => (prev + 1) % steps.length);
      }, 2500);

      const progressInterval = setInterval(() => {
        setEncryptionProgress(prev => {
          if (prev >= 100) {
            setIsComplete(true);
            return 100;
          }
          return prev + 5;
        });
      }, 200);

      const gateInterval = setInterval(() => {
        setCurrentGate(prev => (prev + 1) % quantumGates.length);
      }, 800);

      return () => {
        clearInterval(stepInterval);
        clearInterval(progressInterval);
        clearInterval(gateInterval);
      };
    }
  }, [isActive, steps.length, quantumGates.length]);

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
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          Data is being secured using quantum encryption techniques including BB84 protocol. 
          Our Q6Fold system applies quantum principles as qubits travel through the secure channel.
        </p>
      </motion.div>

      {/* Encryption Process */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Quantum Steps */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
            <Zap size={24} className="text-yellow-400" />
            <span>Quantum Encryption Steps</span>
          </h3>
          
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                className={`p-4 rounded-xl border transition-all duration-500 ${
                  index === activeStep
                    ? `bg-gradient-to-r ${step.color}/20 border-${step.color.split('-')[1]}-400/50 shadow-lg`
                    : 'bg-gray-800/50 border-gray-600/30'
                }`}
                animate={index === activeStep ? { scale: 1.02 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">{step.icon}</span>
                  <h4 className={`font-semibold ${index === activeStep ? 'text-white' : 'text-gray-300'}`}>
                    {step.name}
                  </h4>
                  {index === activeStep && (
                    <motion.div
                      className="w-2 h-2 bg-yellow-400 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </div>
                <p className="text-sm text-gray-400 mb-3">{step.desc}</p>
                
                {/* Quantum Gates for this step */}
                <div className="flex space-x-2">
                  {step.gates.map((gate, gateIndex) => (
                    <motion.span
                      key={gate}
                      className={`px-2 py-1 rounded text-xs ${
                        index === activeStep ? 'bg-blue-500/20 text-blue-300' : 'bg-gray-700 text-gray-400'
                      }`}
                      animate={index === activeStep ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.5 }}
                      transition={{ duration: 1, delay: gateIndex * 0.2 }}
                    >
                      {gate}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Encryption Progress */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
            <Shield size={24} className="text-green-400" />
            <span>Encryption Progress</span>
          </h3>
          
          {/* Progress Bar */}
          <div className="space-y-3">
            <div className="w-full bg-gray-700 rounded-full h-6 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-yellow-500 to-orange-500 h-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${encryptionProgress}%` }}
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
              <span className="font-medium text-yellow-400">{encryptionProgress}%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Current Quantum Gate */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Cpu size={16} className="text-purple-400" />
              <span className="text-sm text-gray-300">Active Gate:</span>
            </div>
            <motion.div
              key={currentGate}
              className="p-4 bg-purple-500/10 border border-purple-400/30 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-purple-400">{quantumGates[currentGate].name}</h4>
                  <p className="text-sm text-gray-300">{quantumGates[currentGate].effect}</p>
                </div>
                <div className="text-2xl font-bold text-purple-400">
                  {quantumGates[currentGate].symbol}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Security Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="p-4 bg-blue-500/10 border border-blue-400/30 rounded-lg text-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Database size={24} className="text-blue-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-blue-400">BB84</div>
              <div className="text-sm text-gray-300">Protocol</div>
            </motion.div>
            <motion.div
              className="p-4 bg-green-500/10 border border-green-400/30 rounded-lg text-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Network size={24} className="text-green-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-green-400">99.9%</div>
              <div className="text-sm text-gray-300">Security Level</div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Quantum Circuit Visualization */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
          <Cpu size={24} className="text-cyan-400" />
          <span>Quantum Circuit</span>
        </h3>
        
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/30">
          <div className="flex items-center justify-between mb-4">
            {quantumGates.map((gate, index) => (
              <motion.div
                key={gate.name}
                className={`flex flex-col items-center space-y-2 p-3 rounded-lg ${
                  index === currentGate ? 'bg-cyan-500/20 border border-cyan-400/50' : 'bg-gray-700/50'
                }`}
                animate={index === currentGate ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`text-2xl font-bold ${index === currentGate ? 'text-cyan-400' : 'text-gray-400'}`}>
                  {gate.symbol}
                </div>
                <div className={`text-xs ${index === currentGate ? 'text-cyan-300' : 'text-gray-500'}`}>
                  {gate.name}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Circuit Lines */}
          <div className="relative h-8 bg-gray-700 rounded">
            <motion.div
              className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-1/2 left-0 h-0.5 bg-white"
              style={{ width: `${encryptionProgress}%` }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
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
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full"
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(251, 191, 36, 0.3)',
                '0 0 30px rgba(251, 191, 36, 0.5)',
                '0 0 20px rgba(251, 191, 36, 0.3)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap size={20} className="text-yellow-400" />
            <span className="text-yellow-300 font-medium">Encryption Complete!</span>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default GateEncryption;