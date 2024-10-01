import { useEffect, useRef } from 'react';

import './Canvas.css';
import Engine from '../Engine/Engine';

const Canvas = () => {
  const canvasRef = useRef(null);
  let renderingContext: CanvasRenderingContext2D;
  let engine: Engine;

  const initializeRenderingContext = () => {
    const canvas = canvasRef.current;
    resizeCanvas(canvas);

    renderingContext = canvas.getContext('2d');
    engine = new Engine(renderingContext);
    engine.start();
  }

  useEffect(initializeRenderingContext, [ canvasRef ]);
  window.addEventListener('resize', initializeRenderingContext);

  function resizeCanvas(canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  return (
    <canvas id="Canvas" ref={ canvasRef } />
  );
};

export default Canvas;