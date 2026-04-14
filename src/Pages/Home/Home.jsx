import { FaPlus } from "react-icons/fa";
const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748B] text-lg mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#1B4332] text-white hover:bg-[#14532d] gap-2 px-6">
          {" "}
          <FaPlus /> Add a Friend
        </button>
      </div>
    </div>
  );
};

export default Home;
