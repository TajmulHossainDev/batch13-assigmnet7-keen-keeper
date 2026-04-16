import { useParams } from "react-router";
import { Suspense, use } from "react";
import { toast, ToastContainer } from "react-toastify";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineTextsms } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { TiPin } from "react-icons/ti";
import { FaHistory } from "react-icons/fa";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const FriendDetailsContent = () => {
  const { id } = useParams();
  const friends = use(friendsPromise);
  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Friend Not Found.</p>
      </div>
    );
  }

  const getStatusStyle = (status) => {
    if (status === "overdue") return "bg-red-100 text-red-600";
    if (status === "almostdue") return "bg-yellow-100 text-yellow-600";
    return "bg-green-100 text-green-600";
  };

  const getStatusLabel = (status) => {
    if (status === "overdue") return "Overdue";
    if (status === "almost") return "Almost Due";
    return "On Track";
  };

  const handleCheckIn = (type) => {
    const entry = {
      id: Date.now(),
      friendId: friend.id,
      friendName: friend.name,
      type: type,
      title: `${type}with ${friend.name}`,
      date: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("timeline") || "[]");
    localStorage.setItem("timeline", JSON.stringify([entry, ...existing]));
    toast.success(`${type}with${friend.name} logged!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex flex-col items-center text-center mb-6">
              <img
                src={friend.picture}
                slot={friend.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-100"
              ></img>
              <h2 className="text-xl font-bold text-gray-800 mt-3">
                {" "}
                {friend.name}{" "}
              </h2>
              <span
                className={`mt-2 px-3 py-1 text-xs font-medium rounded-full ${getStatusStyle(friend.status)}`}
              >
                {getStatusLabel(friend.status)}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {friend.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="font-bold text-gray-500 text-center mb-4">
              {" "}
              "{friend.bio}"{" "}
            </p>
            <p className="text-sm font-semibold text-center text-gray-400 mb-6">
              {" "}
              prefered:{friend.email}{" "}
            </p>
            <div className="flex flex-col gap-2">
              <button className="btn btn-outline border border-gray-100 shadow-sm btn-sm w-full font-bold text-gray-500">
                <HiOutlineBellSnooze /> Snooze 2 weeks
              </button>
              <button className="btn btn-outline border border-gray-100 shadow-sm btn-sm w-full font-bold text-gray-500">
                <HiOutlineArchiveBox /> Archive
              </button>
              <button className="btn btn-outline border border-gray-100 shadow-sm btn-sm w-full text-red-500 font-bold">
                <RiDeleteBin6Line />
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center">
              <p className="text-2xl font-bold text-[#244D3F]">
                {" "}
                {friend.days_since_contact}{" "}
              </p>
              <p className="text-xs font-bold text-gray-400 mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center">
              <p className="text-2xl font-bold text-[#244D3F]">
                {" "}
                {friend.goal}{" "}
              </p>
              <p className="text-xs font-bold text-gray-400 mt-1">Goal(Days)</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center">
              <p className="text-2xl font-bold text-[#244D3F]">
                {" "}
                {friend.next_due_date}{" "}
              </p>
              <p className="font-bold text-xs text-gray-400 mt-1"> Next Due</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#244D3F]">Relationship Goal</h3>
              <button className="btn btn-xs">Edit</button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {" "}
              contact{" "}
              <span className="font-bold text-gray-700">
                {" "}
                {friend.name}{" "}
              </span>{" "}
              every{" "}
              <span className="font-bold text-gray-700">
                {" "}
                {friend.goal} days{" "}
              </span>{" "}
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-[#244D3F] mb-4">
              {" "}
              Quick Check-In{" "}
            </h3>
            <div className="flex gap-3">
              <button
                onClick={() => handleCheckIn("Call")}
                className="btn hover:bg-[#14532d] hover:text-white gap-2 flex-1 py-10"
              >
                {" "}
                <FiPhoneCall /> Call
              </button>
              <button
                onClick={() => handleCheckIn("Text")}
                className="btn  hover:bg-[#14532d] hover:text-white gap-2 flex-1 py-10"
              >
                {" "}
                <MdOutlineTextsms /> Text
              </button>
              <button
                onClick={() => handleCheckIn("Video")}
                className="btn   hover:bg-[#14532d] hover:text-white gap-2 flex-1 py-10"
              >
                <IoVideocamOutline /> Video
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-[#244D3F]">
                Recent Interactions
              </h3>
              <button className="btn btn-xs gap-1">
                <FaHistory />Full History
              </button>
            </div>
            {(() => {
              const allTimeline = JSON.parse(
                localStorage.getItem("timeline") || "[]",
              );
              const friendTimeline = allTimeline
                .filter((entry) => entry.friendId === friend.id)
                .slice(0, 4);

              const getIcon = (type) => {
                if (type === "Call") return <FiPhoneCall />;
                if (type === "Text") return <MdOutlineTextsms />;
                if (type === "Video") return <IoVideocamOutline />;
                return <TiPin />;
              };

              if (friendTimeline.length === 0) {
                return (
                  <p className="text-sm text-gray-400 text-center py-4">
                    No Interactions yet. Use Quick Check-In to Log one!
                  </p>
                );
              }
              return (
                <div className="flex flex-col divide-y divide-gray-100">
                  {friendTimeline.map((entry) => (
                    <div
                      key={entry.id}
                      className="flex items-center justify-between py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-base">
                          {getIcon(entry.type)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">
                            {" "}
                            {entry.type}{" "}
                          </p>
                          <p className="text-xs text-gray-400">
                            {" "}
                            {entry.title}{" "}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400">
                        {new Date(entry.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

const FriendDetails = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer></ToastContainer>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <span className="loading loading-spinner loading-lg text-[#1B4332]"></span>
          </div>
        }
      >
        <FriendDetailsContent></FriendDetailsContent>
      </Suspense>
    </div>
  );
};

export default FriendDetails;
