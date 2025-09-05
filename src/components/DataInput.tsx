import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, Eye, EyeOff } from 'lucide-react';

interface DataInputProps {
  isActive: boolean;
}

const DataInput: React.FC<DataInputProps> = ({ isActive }) => {
  const [message, setMessage] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isActive && message.length > 0) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [message, isActive]);

  if (!isActive) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

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
          Enter your confidential data below. Our quantum encryption system will secure it using 
          BB84 protocol and advanced quantum techniques.
        </p>
      </motion.div>

      {/* Input Section */}
      <motion.div
        className="flex flex-col items-center space-y-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Enhanced Textarea */}
        <div className="relative w-full max-w-2xl">
          <motion.textarea
            className="w-full h-40 p-6 bg-black/30 border-2 border-blue-400/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 transition-all duration-300 resize-none backdrop-blur-sm"
            placeholder="Enter your secret message here..."
            value={message}
            onChange={handleInputChange}
            whileFocus={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          
          {/* Character Counter */}
          <motion.div
            className="absolute bottom-3 right-3 text-sm text-gray-400"
            animate={{ opacity: message.length > 0 ? 1 : 0 }}
          >
            {message.length} characters
          </motion.div>

          {/* Security Indicator */}
          <motion.div
            className="absolute top-3 right-3 flex items-center space-x-2"
            animate={{ opacity: message.length > 0 ? 1 : 0.5 }}
          >
            <motion.div
              animate={{ scale: isTyping ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 0.5 }}
            >
              <Lock size={20} className="text-blue-400" />
            </motion.div>
            <span className="text-sm text-gray-300">Secure</span>
          </motion.div>
        </div>

        {/* Preview Toggle */}
        {message.length > 0 && (
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-colors"
            >
              {showPreview ? <EyeOff size={16} /> : <Eye size={16} />}
              <span>{showPreview ? 'Hide' : 'Show'} Preview</span>
            </button>
          </motion.div>
        )}

        {/* Preview Panel */}
        {showPreview && message.length > 0 && (
          <motion.div
            className="w-full max-w-2xl p-6 bg-green-500/10 border border-green-400/30 rounded-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-3">
              <Shield size={20} className="text-green-400" />
              <h3 className="text-green-400 font-semibold">Data Preview</h3>
            </div>
            <p className="text-gray-200 whitespace-pre-wrap">{message}</p>
          </motion.div>
        )}
      </motion.div>

      {/* Status Indicators */}
      <motion.div
        className="flex justify-center space-x-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-2"
          animate={{ scale: message.length > 0 ? 1.1 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className={`w-3 h-3 rounded-full ${message.length > 0 ? 'bg-green-400' : 'bg-gray-500'}`} />
          <span className="text-sm text-gray-400">Data Ready</span>
        </motion.div>
        
        <motion.div
          className="flex flex-col items-center space-y-2"
          animate={{ scale: message.length > 10 ? 1.1 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className={`w-3 h-3 rounded-full ${message.length > 10 ? 'bg-blue-400' : 'bg-gray-500'}`} />
          <span className="text-sm text-gray-400">Compression Ready</span>
        </motion.div>
        
        <motion.div
          className="flex flex-col items-center space-y-2"
          animate={{ scale: message.length > 20 ? 1.1 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className={`w-3 h-3 rounded-full ${message.length > 20 ? 'bg-purple-400' : 'bg-gray-500'}`} />
          <span className="text-sm text-gray-400">Encryption Ready</span>
        </motion.div>
      </motion.div>

      {/* Quantum Security Badge */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full"
          animate={{ 
            boxShadow: [
              '0 0 20px rgba(59, 130, 246, 0.3)',
              '0 0 30px rgba(139, 92, 246, 0.5)',
              '0 0 20px rgba(59, 130, 246, 0.3)',
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Lock size={20} className="text-blue-400" />
          <span className="text-blue-300 font-medium">Quantum Security Active</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DataInput;