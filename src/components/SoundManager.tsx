import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface SoundManagerProps {
  isActive: boolean;
  currentStep: number;
}

const SoundManager: React.FC<SoundManagerProps> = ({ isActive, currentStep }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);

  // Generate procedural sound effects using Web Audio API
  useEffect(() => {
    if (!isActive) return;

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Data flow sound
    const createDataFlowSound = () => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      const filter = audioContext.createBiquadFilter();
      
      oscillator.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
      oscillator.type = 'square';
      
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1000, audioContext.currentTime);
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume * 0.03, audioContext.currentTime + 0.1);
      gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.2);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.2);
    };

    // Encryption sound
    const createEncryptionSound = () => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      const filter = audioContext.createBiquadFilter();
      
      oscillator.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(1760, audioContext.currentTime + 0.3);
      oscillator.type = 'sawtooth';
      
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(200, audioContext.currentTime);
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume * 0.04, audioContext.currentTime + 0.1);
      gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.3);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.3);
    };

    // Success sound
    const createSuccessSound = () => {
      const oscillator1 = audioContext.createOscillator();
      const oscillator2 = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator1.connect(gainNode);
      oscillator2.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator1.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
      oscillator2.frequency.setValueAtTime(659.25, audioContext.currentTime); // E5
      
      oscillator1.type = 'sine';
      oscillator2.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume * 0.05, audioContext.currentTime + 0.1);
      gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.8);
      
      oscillator1.start();
      oscillator2.start();
      oscillator1.stop(audioContext.currentTime + 0.8);
      oscillator2.stop(audioContext.currentTime + 0.8);
    };
    
    // Only play subtle step-specific sounds, no background hum
    const stepSounds = [
      () => createDataFlowSound(), // Data input
      () => createDataFlowSound(), // Compression
      () => createEncryptionSound(), // Key generation
      () => createEncryptionSound(), // Encryption
      () => createSuccessSound(), // Transmission
    ];
    
    if (stepSounds[currentStep] && !isMuted) {
      setTimeout(() => stepSounds[currentStep](), 500);
    }

    return () => {
      // No cleanup needed since we're not playing continuous sounds
    };
  }, [isActive, currentStep, isMuted, volume]);

  return (
    <motion.div
      className="fixed top-4 right-4 z-50 flex items-center space-x-2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
    >
      {/* Volume Control */}
      <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-lg p-2 border border-white/10">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-1 hover:bg-white/10 rounded transition-colors"
        >
          {isMuted ? <VolumeX size={16} className="text-gray-400" /> : <Volume2 size={16} className="text-blue-400" />}
        </button>
        
        {!isMuted && (
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-16 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${volume * 100}%, #374151 ${volume * 100}%, #374151 100%)`
            }}
          />
        )}
      </div>

      {/* Sound Effects Indicator */}
      {!isMuted && (
        <motion.div
          className="flex items-center space-x-1 bg-green-500/20 border border-green-400/30 rounded-lg px-2 py-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Music size={14} className="text-green-400" />
          <span className="text-xs text-green-300">Audio</span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SoundManager;
