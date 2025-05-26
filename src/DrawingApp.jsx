import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Definindo arrays com opções de cores e formas disponíveis
const colors = ['red', 'blue', 'green', 'yellow'];
const shapes = ['square', 'triangle', 'circle'];

export default function DrawingApp() {
  // Estados para controlar a forma, cor selecionada e o código gerado
  const [selectedShape, setSelectedShape] = useState('square');
  const [selectedColor, setSelectedColor] = useState('red');
  const [shapeCode, setShapeCode] = useState('');
  const canvasRef = useRef(null); // Referência para o elemento <canvas>

  // Informações da equipe (fotos, nomes, RA e papéis)
  const team = [
    {
      pfp: "/imgs/caio-pfp.jpg",
      name: "Caio Pacheco",
      RA: "N0896951",
      roles: ["UI/UX", "React Developer"]
    },
    {
      pfp: "/imgs/kayky-pfp.jpg",
      name: "Kayky Crespo",
      RA: "G839226",
      roles: ["Creative design", "React Developer"]
    },
    {
      pfp: "/imgs/luiza-pfp.jpg",
      name: "Luiza Lacerda",
      RA: "G4818H2",
      roles: ["Project lead", "Quality Assurance"]
    }
  ];

  // Função que renderiza um card de perfil animado para cada membro da equipe
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
      <span className="font-poppins text-white">{RA}</span>
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

  // Função que limpa dos desenhos
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    setShapeCode(''); // Limpa o código exibido
  };

  // Função que desenha a forma no canvas e gera o código correspondente
  const drawShape = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d'); // Contexto 2D para desenhar
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    ctx.fillStyle = selectedColor;

    let code = '';

    // Desenha a forma de acordo com a seleção do usuário
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

    setShapeCode(code); // Salva o código gerado para exibir ao usuário
  };

  // Executa a função drawShape uma vez quando o componente é montado
  useEffect(() => {
    drawShape();
  }, []);

  return (
    <div>
      {/* Área principal com gradiente de fundo e seleção de forma/cor */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center px-6 py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-md bg-gray-800 p-6 rounded-2xl shadow-xl space-y-6"
        >
          {/* Cabeçalho com nome e versão do app */}
          <div className="flex justify-between items-end border-b border-gray-600 pb-2">
            <h1 className="text-3xl font-semibold tracking-wide">🎨 Painter</h1>
            <span className="text-sm text-gray-400">v1.0</span>
          </div>

          <div className="space-y-4">
            {/* Menu de seleção de forma */}
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

            {/* Menu de seleção de cor */}
            {/* Seleção de cor com paleta visual */}
            <div>
              <label className="block text-sm font-medium mb-3">Choose a color</label>
              <div className="grid grid-cols-4 gap-3">
                {colors.map((color) => (
                  <motion.button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-full h-12 rounded-lg border-2 transition-all duration-200 ${
                      selectedColor === color
                        ? 'border-white scale-110 shadow-lg'
                        : 'border-gray-600 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color }}
                    whileHover={{ scale: selectedColor === color ? 1.1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-black text-xs font-semibold drop-shadow-lg capitalize">
                      {color}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Botão para desenhar a forma */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              onClick={drawShape}
              className="text-black w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 py-2 rounded-xl font-medium cursor-pointer"
            >
              ✏️ Draw Shape
            </motion.button>
          </div>

          {/* Botão para limpar o canvas e código */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            onClick={clearCanvas}
            className="text-black w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 py-2 rounded-xl font-medium cursor-pointer"
          >
            🗑️ Clear
          </motion.button>

          {/* Exibe o código usado para desenhar a forma */}
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

        {/* Área do canvas onde a forma será desenhada */}
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

      {/* Seção com os participantes do projeto */}
      <div className="bg-gray-800 w-full p-16 px-4 flex flex-col items-start">
        <div className="flex flex-col gap-16 w-full max-w-7xl mx-auto">
          <span className="font-poppins font-bold text-3xl text-white text-center">
            Partipantes
          </span>
          {/* Lista os membros da equipe com animações */}
          <div className="flex flex-wrap gap-8 justify-between w-full">
            {team.map((member, index) => (
              <div key={index}>
                {teamProfile(member.pfp, member.name, member.RA, member.roles)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
