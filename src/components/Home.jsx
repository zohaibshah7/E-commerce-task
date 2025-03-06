import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[calc(100vh-4.5rem)] flex flex-col overflow-x-hidden">
      <div className="sec1 w-full h-[calc(100vh-4.5rem)] flex flex-col items-center justify-center text-center px-4 relative">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-700 z-10 animate-bounce">
          Quick-cart Shopping Experience
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mt-4 z-10">
          Discover new dimensions in E-commerce today
        </p>

        <button
          className="mt-8 bg-orange-400 text-white text-lg md:text-xl px-8 py-4 rounded-lg shadow-lg hover:drop-shadow-2xl cursor-pointer transition-transform duration-300 transform hover:scale-110 z-10"
          onClick={() => navigate("/products")}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Home;
