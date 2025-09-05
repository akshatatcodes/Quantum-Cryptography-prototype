import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import QuantumChannel from './components/QuantumChannel';
import QuantumLogo from './components/QuantumLogo';
import DataInput from './components/DataInput';
import HuffmanCompression from './components/HuffmanCompression';
import KeyGeneration from './components/KeyGeneration';
import GateEncryption from './components/GateEncryption';
import SecureTransmit from './components/SecureTransmit';
import StepNavigator from './components/StepNavigator';
import SoundManager from './components/SoundManager';

const steps = [
  { 
    component: DataInput, 
    title: 'Step 1: Data Input', 
    subtitle: 'Enter your confidential information',
    icon: '🔐',
    color: 'from-blue-500 to-cyan-400'
  },
  { 
    component: HuffmanCompression, 
    title: 'Step 2: Compression', 
    subtitle: 'Optimize data for quantum processing',
    icon: '📦',
    color: 'from-purple-500 to-pink-400'
  },
  { 
    component: KeyGeneration, 
    title: 'Step 3: Key Exchange', 
    subtitle: 'Generate secure quantum keys',
    icon: '🔑',
    color: 'from-green-500 to-emerald-400'
  },
  { 
    component: GateEncryption, 
    title: 'Step 4: Encryption', 
    subtitle: 'Apply quantum security protocols',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-400'
  },
  { 
    component: SecureTransmit, 
    title: 'Step 5: Transmission', 
    subtitle: 'Secure delivery across quantum channel',
    icon: '🌐',
    color: 'from-indigo-500 to-purple-400'
  },
];

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => setCurrentStep(0);

  const CurrentComponent = steps[currentStep].component;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="mb-8">
            <QuantumLogo />
          </div>
          <motion.h1
            className="text-4xl font-bold text-white mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Q6Fold Quantum Encryption
          </motion.h1>
          <motion.p
            className="text-gray-300"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            Initializing quantum protocols...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <QuantumChannel />
      <SoundManager isActive={!isLoading} currentStep={currentStep} />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="container mx-auto px-6 py-12 relative z-10"
      >
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex justify-center items-center mb-6">
            <QuantumLogo size="small" />
          </div>
          <motion.h1
            className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: '200% 200%' }}
          >
            Q6Fold Quantum Encryption
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Experience the future of secure communication through quantum mechanics and BB84 protocol
          </motion.p>
        </motion.div>

        {/* Step Progress Indicator */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex space-x-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  index <= currentStep
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-400'
                }`}
                whileHover={{ scale: 1.05 }}
                animate={{
                  scale: index === currentStep ? 1.1 : 1,
                  boxShadow: index === currentStep ? '0 0 20px rgba(59, 130, 246, 0.5)' : '0 0 0px rgba(59, 130, 246, 0)'
                }}
              >
                <span className="text-lg">{step.icon}</span>
                <span className="font-medium">{index + 1}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Container */}
        <motion.div
          className="bg-black/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {/* Current Step Header */}
          <motion.div
            className="text-center mb-8"
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r ${steps[currentStep].color} mb-4`}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">{steps[currentStep].icon}</span>
              <h2 className="text-2xl font-bold text-white">{steps[currentStep].title}</h2>
            </motion.div>
            <p className="text-gray-300 text-lg">{steps[currentStep].subtitle}</p>
          </motion.div>

          {/* Component Content */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CurrentComponent isActive={true} />
          </motion.div>
        </motion.div>

        {/* Enhanced Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <StepNavigator
            currentStep={currentStep}
            totalSteps={steps.length}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onReset={handleReset}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;