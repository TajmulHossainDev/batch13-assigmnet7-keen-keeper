import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-9xl font-extrabold">404</h1>
      <h2 className="text-2xl font-bold mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2 text-center max-w-md">The Page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn bg-[#1B4332] text-white mt-6 px-6 font-bold">Go Home</Link>
    </div>
  );
};

export default ErrorPage;
