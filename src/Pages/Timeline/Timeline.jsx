import { useEffect, useState } from "react";
import { MdOutlineTextsms } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { TiPin } from "react-icons/ti";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline") || "[]");
    setTimeline(stored);
  }, []);
  const getIcon = (type) => {
    if (type === "Call") return <FiPhoneCall />;
    if (type === "Text") return <MdOutlineTextsms />;
    if (type === "Video") return <IoVideocamOutline />;
    return <TiPin />;
  };

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((entry) => entry.type === filter);
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Timeline</h1>
        <div className="mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="select select-bordered w-full max-w-sm bg-white text-gray-500"
          >
            <option value="All">Filter Timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>
        {filteredTimeline.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
            <p className="text-gray-400 text-sm">No interactions found.</p>
            <p className="text-gray-300 text-xs mt-1">
              Go to a friends page and log call, text or video
            </p>
          </div>
        ) : (
          <div className="">
            {filteredTimeline.map((entry) => (
              <div
                key={entry.id}
                className="bg-white  flex items-center justify-between px-6 py-4 gap-4 border border-gray-100 shadow-sm rounded-xl mb-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center text-lg">
                    {getIcon(entry.type)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#244D3F]">
                      {" "}
                      {entry.title}{" "}
                    </p>
                    <p className="text-xs text-[#64748B]"> {entry.type} </p>
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
        )}
      </div>
    </div>
  );
};

export default Timeline;
