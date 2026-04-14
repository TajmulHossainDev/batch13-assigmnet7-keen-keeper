import { RiHome2Line } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import logo from "../../../../public/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-slate-100">
      <div className="navbar max-w-7xl mx-auto shadow-sm">
        <div className="flex-1">
          <NavLink
            to="/"
            className="btn btn-ghost text-3xl text-[#1F2937] font-bold"
          >
            {" "}
            <img src={logo}></img>{" "}
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-semibold flex items-center gap-1 ${
                    isActive ? "bg-[#1B4332] text-white" : "text-[#64748B]"
                  }`
                }
              >
                {" "}
                <span className="flex items-center justify-center gap-1">
                  <RiHome2Line />
                  Home
                </span>{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/timeline"
                className={({ isActive }) =>
                  `font-semibold flex items-center gap-1 ${
                    isActive ? "bg-[#1B4332] text-white" : "text-[#64748B]"
                  }`
                }
              >
                {" "}
                <span className="flex justify-center items-center gap-1">
                  <MdOutlineWatchLater />
                  Timeline
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stats"
                className={({ isActive }) =>
                  `font-semibold flex items-center gap-1 ${
                    isActive ? "bg-[#1B4332] text-white" : "text-[#64748B]"
                  }`
                }
              >
                <span className="flex items-center justify-center gap-1">
                  <ImStatsDots />
                  Stats
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
