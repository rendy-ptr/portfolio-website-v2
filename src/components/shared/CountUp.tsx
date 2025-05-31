'use client';

import { useEffect, useState } from 'react';

type CountUpProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

const CountUp = ({ end, duration = 3000, suffix = '' }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // approx 60fps
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(interval);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16); // 16ms ~ 60fps
    return () => clearInterval(interval);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default CountUp;
