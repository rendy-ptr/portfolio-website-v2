'use client';

type AnimatedBackgroundProps = {
  isClient: boolean;
  darkMode: boolean;
};

const AnimatedBackground = ({
  isClient,
  darkMode,
}: AnimatedBackgroundProps) => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div
        className={`absolute h-32 w-32 animate-spin border-4 border-pink-400 ${
          isClient && darkMode ? 'opacity-20' : 'opacity-10'
        }`}
        style={{
          top: '10%',
          left: '10%',
          animationDuration: '20s',
        }}
      ></div>
      <div
        className={`absolute h-32 w-32 animate-spin border-4 border-cyan-400 ${
          isClient && darkMode ? 'opacity-20' : 'opacity-10'
        }`}
        style={{
          top: '10%',
          right: '10%',
          animationDuration: '20s',
        }}
      ></div>
      <div
        className={`absolute h-24 w-24 animate-bounce bg-cyan-400 ${isClient && darkMode ? 'opacity-20' : 'opacity-10'}`}
        style={{
          top: '60%',
          right: '15%',
          animationDelay: '2s',
        }}
      ></div>
      <div
        className={`absolute h-24 w-24 animate-bounce bg-pink-400 ${isClient && darkMode ? 'opacity-20' : 'opacity-10'}`}
        style={{
          top: '60%',
          left: '15%',
          animationDelay: '2s',
        }}
      ></div>
      <div
        className={`absolute h-16 w-16 animate-pulse border-4 border-yellow-400 ${
          isClient && darkMode ? 'opacity-20' : 'opacity-10'
        }`}
        style={{
          bottom: '20%',
          left: '20%',
        }}
      ></div>
      <div
        className={`absolute h-16 w-16 animate-pulse border-4 border-green-400 ${
          isClient && darkMode ? 'opacity-20' : 'opacity-10'
        }`}
        style={{
          bottom: '20%',
          right: '20%',
        }}
      ></div>
      <div
        className={`absolute h-20 w-20 animate-ping bg-green-400 ${isClient && darkMode ? 'opacity-20' : 'opacity-10'}`}
        style={{
          top: '30%',
          right: '30%',
          animationDelay: '1s',
        }}
      ></div>
      <div
        className={`absolute h-20 w-20 animate-ping bg-yellow-400 ${isClient && darkMode ? 'opacity-20' : 'opacity-10'}`}
        style={{
          top: '30%',
          left: '30%',
          animationDelay: '1s',
        }}
      ></div>
    </div>
  );
};
export default AnimatedBackground;
