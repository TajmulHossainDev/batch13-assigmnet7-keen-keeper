import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
const Banner = ({ friends }) => {
  const [interactionsThisMonth, setInteractionsThisMonth] = useState(0);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline") || "[]");
    const now = new Date();
    const thisMonth = stored.filter((entry) => {
      const entryDate = new Date(entry.date);
      return (
        entryDate.getMonth() === now.getMonth() &&
        entryDate.getFullYear() === now.getFullYear()
      );
    });
    setInteractionsThisMonth(thisMonth.length);
  }, []);

  const totalFriends = friends.length;
  const onTrack = friends.filter((f) => f.status === "active").length;
  const needAttention = friends.filter(
    (f) => f.status === "overdue" || f.status === "almostdue",
  ).length;

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 text-base mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#1B4332] text-white hover:bg-[#14532d] gap-2 px-6">
          <FaPlus /> Add a Friend
        </button>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <div className="rounded-2xl p-6 flex flex-col items-center gap-1 shadow-sm">
            <p className="text-3xl font-bold text-gray-800"> {totalFriends} </p>
            <p className="text-sm text-gray-400"> Total Friends </p>
          </div>
          <div className="rounded-2xl p-6 flex flex-col items-center gap-1 shadow-sm">
            <p className="text-3xl font-bold text-gray-800"> {onTrack} </p>
            <p className="text-sm text-gray-400"> On Track </p>
          </div>
          <div className="rounded-2xl p-6 flex flex-col items-center gap-1 shadow-sm">
            <p className="text-3xl font-bold text-gray-800">
              {" "}
              {needAttention}{" "}
            </p>
            <p className="text-sm text-gray-400">Need Attention</p>
          </div>
          <div className="rounded-2xl p-6 flex flex-col items-center gap-1 shadow-sm">
            <p className="text-3xl font-bold text-gray-800">
              {" "}
              {interactionsThisMonth}{" "}
            </p>
            <p className="text-sm text-gray-400"> Interactions This Month </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
