import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#1B4332", "#3D9970", "#7C4DFF"];
const Stats = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline") || "[]");
    setTimeline(stored);
  }, []);

  const callCount = timeline.filter((e) => e.type === "Call").length;
  const textCount = timeline.filter((e) => e.type === "Text").length;
  const videoCount = timeline.filter((e) => e.type === "Video").length;

  const data = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount },
  ].filter((d) => d.value > 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-extrabold mb-6">Friendship Anaytics</h1>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-[#244D3F] mb-6">By Interaction Type</h2>
            {
                data.length === 0 ? (
                    <div className="text-center py-16">
                        <p>No interactions yet</p>
                        <p>Log a call text or video from a friend's page</p>
                    </div>
                ): (
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie data={data}
                            cx = "50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={110}
                            paddingAngle={4}
                            dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}></Cell>
                                ))}
                            </Pie>
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                        </PieChart>
                    </ResponsiveContainer>
                )
            }

        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center">
                <p className="text-2xl font-bold text-gray-800"> {callCount} </p>
                <p className="text-xs text-gray-400 mt-1">Total Calls</p>
            </div>
             <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center">
                <p className="text-2xl font-bold text-gray-800"> {textCount} </p>
                <p className="text-xs text-gray-400 mt-1">Total Texts</p>
            </div>
             <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center">
                <p className="text-2xl font-bold text-gray-800"> {videoCount} </p>
                <p className="text-xs text-gray-400 mt-1">Total Videos</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
