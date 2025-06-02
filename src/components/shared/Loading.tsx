'use client';
const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="mb-4 animate-pulse text-6xl font-black text-yellow-400">
          LOADING...
        </div>
        <div className="h-4 w-64 border-4 border-yellow-400 bg-gray-800">
          <div
            className="h-full animate-pulse bg-yellow-400"
            style={{ width: '100%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
