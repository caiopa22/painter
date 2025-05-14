import React, { useState, useRef } from 'react';

const colors = ['red', 'blue', 'green', 'yellow'];
const shapes = ['square', 'triangle', 'circle'];

export default function DrawingApp() {
  const [selectedShape, setSelectedShape] = useState('square');
  const [selectedColor, setSelectedColor] = useState('red');
  const canvasRef = useRef(null);

  const drawShape = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = selectedColor;

    switch (selectedShape) {
      case 'square':
        ctx.fillRect(100, 100, 100, 100);
        break;
      case 'circle':
        ctx.beginPath();
        ctx.arc(150, 150, 50, 0, Math.PI * 2);
        ctx.fill();
        break;
      case 'triangle':
        ctx.beginPath();
        ctx.moveTo(150, 70);
        ctx.lineTo(100, 180);
        ctx.lineTo(200, 180);
        ctx.closePath();
        ctx.fill();
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <h1 className="text-2xl font-bold">Interactive Drawing App</h1>
      <div className="space-y-2">
        <div>
          <label className="mr-2 font-medium">Choose a shape:</label>
          <select
            value={selectedShape}
            onChange={(e) => setSelectedShape(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            {shapes.map((shape) => (
              <option key={shape} value={shape}>{shape}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mr-2 font-medium">Choose a color:</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            {colors.map((color) => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </div>

        <button
          onClick={drawShape}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Draw
        </button>
      </div>

      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        className="border border-gray-400 mt-4"
      />
    </div>
  );
}
