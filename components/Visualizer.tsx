
import React, { useEffect, useRef } from 'react';

interface VisualizerProps {
  analyser: AnalyserNode | null;
  isActive: boolean;
  color: string;
}

const Visualizer: React.FC<VisualizerProps> = ({ analyser, isActive, color }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !analyser) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    let animationId: number;

    const draw = () => {
      animationId = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      // Clear with slight trailing for smoother motion
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        // Logarithmic scale for better visual signal representation
        const barHeight = (dataArray[i] / 255) * canvas.height;

        if (isActive && dataArray[i] > 0) {
          ctx.fillStyle = color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = color + '44';
        } else {
          ctx.fillStyle = '#e2e8f0';
          ctx.shadowBlur = 0;
        }

        // Centered drawing for a more "voice signal" look
        const centerY = canvas.height / 2;
        const currentHeight = Math.max(2, barHeight);
        
        ctx.beginPath();
        ctx.roundRect(
          x, 
          centerY - (currentHeight / 2), 
          barWidth - 1, 
          currentHeight, 
          2
        );
        ctx.fill();
        
        x += barWidth;
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [analyser, isActive, color]);

  return (
    <canvas 
      ref={canvasRef} 
      width={600} 
      height={120} 
      className="w-full h-24 md:h-32 rounded-3xl bg-white/50 border border-slate-100 shadow-inner"
    />
  );
};

export default Visualizer;
