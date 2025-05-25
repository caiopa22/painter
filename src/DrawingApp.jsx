import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const colors = ['red', 'blue', 'green', 'yellow'];
const shapes = ['square', 'triangle', 'circle'];

export default function DrawingApp() {
  const [selectedShape, setSelectedShape] = useState('square');
  const [selectedColor, setSelectedColor] = useState('red');
  const [shapeCode, setShapeCode] = useState('');
  const canvasRef = useRef(null);

  // Meet the creative minds behind this project!
  const team = [
    {
      pfp: "/imgs/caio-pfp.jpg",
      name: "Caio Pacheco",
      RA: "N0896951",
      roles: [
        "UI/UX", "React Developer"
      ]
    },
    {
      pfp: "/imgs/kayky-pfp.jpg",
      name: "Kayky Crespo",
      RA: "G839226",
      roles: [
        "Creative design", "React Developer"
      ]
    },
    {
      pfp: "/imgs/luiza-pfp.jpg",
      name: "Luiza Lacerda",
      RA: "G4818H2",
      roles: [
        "Project lead", "Quality Assurance"
      ]
    }
  ];

  const teamProfile = (pfp, name, RA, tags) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center space-y-2"
    >
      <img
        src={pfp}
        alt={name}
        className="w-32 h-32 border-2 border-gray-600 rounded-full object-cover"
      />
      <span className="font-poppins  text-white">{RA}</span>
      <span className="font-poppins font-semibold text-xl text-white">{name}</span>
      <div className="flex flex-wrap gap-2 justify-center">
        {tags.map((tag, index) => (
          <motion.div
            key={index}
            className="px-4 py-1 rounded-full border-2 border-gray-900 bg-gray-700"
            whileHover={{ scale: 1.1 }}
          >
            <span className="font-poppins text-white">{tag}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const drawShape = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = selectedColor;

    let code = '';

    switch (selectedShape) {
      case 'square':
        ctx.fillRect(100, 100, 100, 100);
        code = `ctx.fillStyle = "${selectedColor}";
ctx.fillRect(100, 100, 100, 100);`;
        break;
      case 'circle':
        ctx.beginPath();
        ctx.arc(150, 150, 50, 0, Math.PI * 2);
        ctx.fill();
        code = `ctx.fillStyle = "${selectedColor}";
ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI * 2);
ctx.fill();`;
        break;
      case 'triangle':
        ctx.beginPath();
        ctx.moveTo(150, 70);
        ctx.lineTo(100, 180);
        ctx.lineTo(200, 180);
        ctx.closePath();
        ctx.fill();
        code = `ctx.fillStyle = "${selectedColor}";
ctx.beginPath();
ctx.moveTo(150, 70);
ctx.lineTo(100, 180);
ctx.lineTo(200, 180);
ctx.closePath();
ctx.fill();`;
        break;
      default:
        break;
    }

    setShapeCode(code);
  };

  useEffect(() => {
    drawShape();
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center px-6 py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-md bg-gray-800 p-6 rounded-2xl shadow-xl space-y-6"
        >
          <div className="flex justify-between items-end border-b border-gray-600 pb-2">
            <h1 className="text-3xl font-semibold tracking-wide">🎨 Painter</h1>
            <span className="text-sm text-gray-400">v1.0</span>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium mb-1">Choose a shape</label>
            <select
              value={selectedShape}
              onChange={(e) => setSelectedShape(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              {shapes.map((shape) => (
                <option key={shape} value={shape}>
                  {shape.charAt(0).toUpperCase() + shape.slice(1)}
                </option>
              ))}
            </select>
            <label className="block text-sm font-medium mb-1">Choose a color</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </option>
              ))}
            </select>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              onClick={drawShape}
              className="text-black w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 py-2 rounded-xl font-medium cursor-pointer"
            >
              Draw Shape
            </motion.button>
          </div>

          {shapeCode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4"
            >
              <label className="block text-sm font-medium mb-1">Shape Drawing Code</label>
              <pre className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto">
                {shapeCode}
              </pre>
            </motion.div>
          )}
        </motion.div>

        <motion.canvas
          ref={canvasRef}
          width={300}
          height={300}
          className="mt-10 border-2 border-gray-600 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <div className="bg-gray-800 w-full p-16 px-4 flex flex-col items-start">
        <div className="flex flex-col gap-16 w-full max-w-7xl mx-auto">
          <span className="font-poppins font-bold text-3xl text-white text-center">
            Partipantes
          </span>
          <div className="flex flex-wrap gap-8 justify-between w-full">
            {team.map((member, index) => (
              <div key={index}>{teamProfile(member.pfp, member.name,member.RA, member.roles)}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
