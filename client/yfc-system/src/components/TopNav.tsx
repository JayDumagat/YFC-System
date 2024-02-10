import { LuArrowRightFromLine, LuArrowLeftFromLine, LuUserCircle } from "react-icons/lu";

const TopNav = () => {
  // Replace with actual logic to retrieve user data
  const username = "Nheo Manalo"; // Replace with actual username
  const userType = "Employee"; // Replace with actual user type

  return (
    <nav className="border-b border-gray-200 py-4 px-10 flex justify-between items-center h-20">
      {/* Sidebar toggle icon on the left */}
      <div className="flex items-center">
        <button className="focus:outline-none">
          <LuArrowRightFromLine className="w-6 h-6 text-gray-800 mr-2 hover:text-gray-900 hidden" />
          <LuArrowLeftFromLine className="w-6 h-6 text-gray-800 hover:text-gray-900" />
        </button>
      </div>

      {/* User profile and notifications icons on the right */}
      <ul className="flex items-center space-x-4">
        
        <li className="flex items-center space-x-2">
          <div className="text-md text-right font-medium text-gray-800 hover:text-gray-900 flex flex-col justify-end items-end select-none">
            <span className="text-sm"> {username}</span>
            <small>({userType})</small>
          </div>
          <LuUserCircle className="w-10 h-10 text-gray-800 hover:text-gray-900 hover:cursor-pointer" />
          
          
        </li>
      </ul>
    </nav>
  )
}

export default TopNav
