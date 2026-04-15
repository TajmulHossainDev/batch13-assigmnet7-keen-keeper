import { Suspense, use } from "react";
import Banner from "../../Components/Shared/Banner/Banner";
import { useNavigate } from "react-router";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const FriendsList = () => {
  const friends = use(friendsPromise);
  const navigate = useNavigate();

  const getStatusStyle = (status) => {
    if (status === "overdue") return "bg-red-100 text-red-600";
    if (status === "almost due") return "bg-yellow-100 text-yellow-600";
    return "bg-green-100 text-green-600";
  };

  return (
    <div>
      <Banner friends={friends}></Banner>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {friends.map((friend) => (
            <div
              key={friend.id}
              onClick={() => navigate(`/friend/${friend.id}`)}
              className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all duration-200"
            >
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-16 h-16 rounded-full mx-auto object-cover"
              ></img>
              <h3 className="text-center mt-2 font-semibold text-gray-800 text-sm">
                {" "}
                {friend.name}{" "}
              </h3>
              <p className="text-center text-xs text-gray-400 mt-1">
                {" "}
                {friend.days_since_contact}d ago{" "}
              </p>
              <div className="flex flex-wrap justify-center gap-1 mt-2">
                {friend.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full"
                  >
                    {" "}
                    {tag}{" "}
                  </span>
                ))}
              </div>
              <div className="flex justify-center mt-3">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusStyle(friend.status)}`}
                >
                  {friend.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const Home = () => {
  return <div className="bg-gray-50 min-h-screen">
    <Suspense fallback = {
        <div className="flex felx-col items-center justify-center min-h-screen gap-4">
            <span className="loading loading-spinner loading-lg text-[#1B4332]"></span>
            <p className="text-gray-400 text-sm">Loading your friends....</p>
        </div>
    }>
        <FriendsList></FriendsList>
    </Suspense>

  </div>;
};

export default Home;
