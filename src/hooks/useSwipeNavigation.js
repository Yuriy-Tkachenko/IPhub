'use client';

import { useRef } from 'react';

export function useSwipeNavigation({ onNext, onPrev, canNext = true, canPrev = true, threshold = 44 }) {
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const resetTouch = () => {
    touchStart.current = null;
    touchEnd.current = null;
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
    touchEnd.current = null;
  };

  const handleTouchMove = (event) => {
    const touch = event.touches[0];
    touchEnd.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) {
      resetTouch();
      return;
    }

    const deltaX = touchEnd.current.x - touchStart.current.x;
    const deltaY = touchEnd.current.y - touchStart.current.y;

    if (Math.abs(deltaX) >= threshold && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      if (deltaX < 0 && canNext) onNext();
      if (deltaX > 0 && canPrev) onPrev();
    }

    resetTouch();
  };

  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };
}
