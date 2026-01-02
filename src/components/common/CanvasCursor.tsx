'use client';

import useCanvasCursor from '@/hooks/use-canvasCursor';

const CanvasCursor = () => {
  useCanvasCursor();

  return (
    <canvas
      className="pointer-events-none fixed inset-0 z-50 hidden md:block"
      id="canvas"
    />
  );
};

export default CanvasCursor;
