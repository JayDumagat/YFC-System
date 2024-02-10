import { LuLayoutDashboard } from "react-icons/lu";
const Sidebar: React.FC = () => {
    return (
        <nav className="h-full pt-5 pb-4">
        <div className="flex items-center px-4 mb-6">
          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
            {/* Your logo or icon */}
          </div>
          <div className="ml-3 text-md font-bold text-gray-800">CNJ Sys</div>
        </div>
        <ul className="space-y-2">
          <li>
            <a href="/dashboard" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-700 hover:text-white">
            <LuLayoutDashboard className="mx-2"/> 
              Dashboard
            </a>
          </li>
          
        </ul>
      </nav>
    );
  };
  
  export default Sidebar;