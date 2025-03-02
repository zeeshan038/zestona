const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-2">
        <span className="w-4 h-4  bg-[#0c3241] rounded-full animate-wave delay-0"></span>
        <span className="w-4 h-4  bg-[#0c3241] rounded-full animate-wave delay-200"></span>
        <span className="w-4 h-4  bg-[#0c3241] rounded-full animate-wave delay-400"></span>
      </div>

      <style>
        {`
          @keyframes wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-wave {
            animation: wave 1s infinite ease-in-out;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          .delay-400 {
            animation-delay: 0.4s;
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
