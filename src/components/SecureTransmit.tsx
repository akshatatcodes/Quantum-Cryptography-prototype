import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe2, CheckCircle, Wifi, Lock, Eye } from 'lucide-react';

interface SecureTransmitProps {
  isActive: boolean;
}

const SecureTransmit: React.FC<SecureTransmitProps> = ({ isActive }) => {
  const [transmissionProgress, setTransmissionProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [packetsTransmitted, setPacketsTransmitted] = useState(0);

  const phases = [
    { name: 'Channel Setup', desc: 'Establishing secure quantum channel', icon: '🔗' },
    { name: 'Data Packetization', desc: 'Breaking data into quantum packets', icon: '📦' },
    { name: 'Encryption Layer', desc: 'Applying quantum encryption', icon: '🔐' },
    { name: 'Transmission', desc: 'Sending through quantum channel', icon: '📡' },
    { name: 'Verification', desc: 'Verifying data integrity', icon: '✅' },
  ];

  const securityChecks = [
    { name: 'Quantum Entanglement', status: 'verified', latency: '0ms' },
    { name: 'Superposition State', status: 'verified', latency: '0ms' },
    { name: 'No-Cloning Theorem', status: 'verified', latency: '0ms' },
    { name: 'Tamper Detection', status: 'verified', latency: '0ms' },
  ];

  useEffect(() => {
    if (isActive) {
      const progressTimer = setInterval(() => {
        setTransmissionProgress(prev => {
          if (prev >= 100) {
            setIsComplete(true);
            return 100;
          }
          return prev + 4;
        });
      }, 150);

      const phaseTimer = setInterval(() => {
        setCurrentPhase(prev => (prev + 1) % phases.length);
      }, 2000);

      const packetTimer = setInterval(() => {
        setPacketsTransmitted(prev => prev + Math.floor(Math.random() * 3) + 1);
      }, 200);

      return () => {
        clearInterval(progressTimer);
        clearInterval(phaseTimer);
        clearInterval(packetTimer);
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
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          Your encrypted data is being transmitted through our secure quantum channel using BB84 protocol. 
          Any interference or eavesdropping attempts are instantly detectable and will terminate the transmission.
        </p>
      </motion.div>

      {/* Transmission Process */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Transmission Progress */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
            <Wifi size={24} className="text-indigo-400" />
            <span>Transmission Progress</span>
          </h3>
          
          {/* Progress Bar */}
          <div className="space-y-3">
            <div className="w-full bg-gray-700 rounded-full h-6 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${transmissionProgress}%` }}
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
              <span className="font-medium text-indigo-400">{transmissionProgress}%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Current Phase */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Globe2 size={16} className="text-blue-400" />
              <span className="text-sm text-gray-300">Current Phase:</span>
            </div>
            <motion.div
              key={currentPhase}
              className="p-4 bg-indigo-500/10 border border-indigo-400/30 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{phases[currentPhase].icon}</span>
                <div>
                  <h4 className="font-semibold text-indigo-400">{phases[currentPhase].name}</h4>
                  <p className="text-sm text-gray-300">{phases[currentPhase].desc}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Transmission Stats */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="p-4 bg-blue-500/10 border border-blue-400/30 rounded-lg text-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-2xl font-bold text-blue-400">{packetsTransmitted}</div>
              <div className="text-sm text-gray-300">Packets Sent</div>
            </motion.div>
            <motion.div
              className="p-4 bg-green-500/10 border border-green-400/30 rounded-lg text-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <div className="text-2xl font-bold text-green-400">2.4 GB/s</div>
              <div className="text-sm text-gray-300">Transfer Rate</div>
            </motion.div>
          </div>
        </div>

        {/* Security Status */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
            <Shield size={24} className="text-green-400" />
            <span>Security Status</span>
          </h3>

          {/* Security Checks */}
          <div className="space-y-3">
            {securityChecks.map((check, index) => (
              <motion.div
                key={check.name}
                className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-600/30"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">{check.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400 text-sm">{check.status}</span>
                  <span className="text-gray-500 text-xs">{check.latency}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Global Security Status */}
          <motion.div
            className="p-4 bg-green-500/10 border border-green-400/30 rounded-lg"
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(16, 185, 129, 0.3)',
                '0 0 30px rgba(16, 185, 129, 0.5)',
                '0 0 20px rgba(16, 185, 129, 0.3)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center space-x-3 mb-2">
              <Lock size={20} className="text-green-400" />
              <h4 className="font-semibold text-green-400">Channel Status</h4>
            </div>
            <p className="text-sm text-gray-300">
              All security protocols active. No interference detected.
            </p>
          </motion.div>

          {/* Network Map */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Network Path</h4>
            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Sender Node</span>
              </div>
              <motion.div
                className="flex-1 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 mx-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Receiver Node</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Transmission Visualization */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
          <Eye size={24} className="text-purple-400" />
          <span>Live Transmission</span>
        </h3>
        
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-400 font-medium">Sender</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">Receiver</span>
            </div>
          </div>
          
          {/* Data Flow Animation */}
          <div className="relative h-8 bg-gray-700 rounded overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-0 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform -translate-y-1/2"
              animate={{ x: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute top-1/2 left-0 w-4 h-4 bg-gradient-to-r from-purple-400 to-green-400 rounded-full transform -translate-y-1/2"
              animate={{ x: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 left-0 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full transform -translate-y-1/2"
              animate={{ x: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 2 }}
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
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-full"
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(99, 102, 241, 0.3)',
                '0 0 30px rgba(139, 92, 246, 0.5)',
                '0 0 20px rgba(99, 102, 241, 0.3)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Globe2 size={20} className="text-indigo-400" />
            <span className="text-indigo-300 font-medium">Transmission Complete!</span>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SecureTransmit;