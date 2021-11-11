import { useState, useRef } from 'react';

const useTooltip = () => {
  const [show, setShow] = useState(false);
  const positionRef = useRef({ x: 0 });

  const onMouseMove = event => {
    positionRef.current = { x: event.clientX };
  };

  const onMouseDown = () => {
    setShow(true);
  };

  const onMouseLeave = () => {
    setShow(false);
  };

  return { positionRef, show, onMouseMove, onMouseDown, onMouseLeave };
};

export { useTooltip };
