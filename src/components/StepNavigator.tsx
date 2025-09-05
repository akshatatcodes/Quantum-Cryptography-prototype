import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, RefreshCcw, Play, SkipForward } from 'lucide-react';

interface StepNavigatorProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  onReset: () => void;
}

const StepNavigator: React.FC<StepNavigatorProps> = ({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  onReset,
}) => {
  const isFirst = currentStep === 0;
  const isLast = currentStep === totalSteps - 1;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Progress</span>
          <span className="text-sm text-gray-400">{currentStep + 1} of {totalSteps}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center space-x-4">
        {/* Previous Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrevious}
          disabled={isFirst}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
            isFirst
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-lg hover:shadow-blue-500/25'
          }`}
        >
          <ArrowLeft size={18} />
          <span>Previous</span>
        </motion.button>

        {/* Reset Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onReset}
          className="flex items-center space-x-2 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-gray-600 to-gray-500 text-white hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300"
        >
          <RefreshCcw size={18} />
          <span>Reset</span>
        </motion.button>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          disabled={isLast}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
            isLast
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-500 to-pink-400 text-white hover:shadow-lg hover:shadow-purple-500/25'
          }`}
        >
          <span>Next</span>
          <ArrowRight size={18} />
        </motion.button>
      </div>

      {/* Step Indicators */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-3">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= currentStep
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400'
                  : 'bg-gray-600'
              }`}
              animate={{
                scale: index === currentStep ? 1.3 : 1,
                boxShadow: index === currentStep ? '0 0 10px rgba(59, 130, 246, 0.5)' : '0 0 0px rgba(59, 130, 246, 0)'
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex justify-center mt-6 space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-600/50 transition-colors"
        >
          <Play size={16} />
          <span className="text-sm">Auto Play</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-600/50 transition-colors"
        >
          <SkipForward size={16} />
          <span className="text-sm">Skip to End</span>
        </motion.button>
      </div>

      {/* Completion Message */}
      {isLast && (
        <motion.div
          className="text-center mt-8"
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
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 font-medium">Demo Complete!</span>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default StepNavigator;