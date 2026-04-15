import logo from "/logo-xl.png";
import insta from "/instagram.png";
import facebook from "/facebook.png";
import twitter from "/twitter.png";
const Footer = () => {
  return (
    <footer className="bg-[#1B4332] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img className="" src={logo}></img>
          </div>

          <p className="text-sm max-w-md">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          {/* Social Icons */}
          <div className="flex flex-col items-center gap-4 mt-2">
            <div>
              <p className="text-2xl font-medium">Social Links</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <img className="cursor-pointer" src={facebook}></img>
              <img className="cursor-pointer" src={insta}></img>
              <img className="cursor-pointer" src={twitter}></img>
            </div>
          </div>

          <div className="border-t border-gray-600 w-full mt-6 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
              <div>
                <p className="text-gray-400 text-xs">
                  © 2025 KinKeeper. All rights reserved.
                </p>
              </div>
              <div className="flex gap-6 mt-2">
                <span className="text-gray-400 text-xs hover:text-white cursor-pointer">
                  Privecy Policy
                </span>
                <span className="text-gray-400 text-xs hover:text-white cursor-pointer">
                  Terms of Service
                </span>
                <span className="text-gray-400 text-xs hover:text-white cursor-pointer">
                  Cookies
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
