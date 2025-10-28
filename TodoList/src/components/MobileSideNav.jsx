import React from 'react'

const MobileSideNav = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      ></div>
      
      {/* Mobile Sidebar */}
      <aside className="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4 flex flex-col space-y-6 border-r border-gray-800 z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
        
        {/* Close button */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-white">TodoFlow</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
            Core
          </h3>
          <nav className="space-y-1">
            
            <a
              href="#"
              className="flex items-center p-2 rounded-lg text-white font-medium bg-gray-800 border-l-4 border-emerald-700"
            >
              <svg className="w-5 h-5 mr-3 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              Inbox
            </a>

            <a
              href="#"
              className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition duration-150"
            >
              <svg className="w-5 h-5 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
              </svg>
              Today
              <span className="ml-auto text-xs font-semibold px-2 py-0.5 bg-gray-700 rounded-full text-emerald-700">
                5
              </span>
            </a>

            <a
              href="#"
              className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition duration-150"
            >
              <svg className="w-5 h-5 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd"></path>
              </svg>
              This Week
            </a>

          </nav>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
            Projects
          </h3>
          <nav className="space-y-1">
            
            <a
              href="#"
              className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition duration-150"
            >
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
              Work
              <span className="ml-auto text-xs font-semibold px-2 py-0.5 bg-gray-700 rounded-full text-gray-400">
                12
              </span>
            </a>

            <a
              href="#"
              className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition duration-150"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              Personal
              <span className="ml-auto text-xs font-semibold px-2 py-0.5 bg-gray-700 rounded-full text-gray-400">
                7
              </span>
            </a>

            <a
              href="#"
              className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition duration-150"
            >
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
              Learning
              <span className="ml-auto text-xs font-semibold px-2 py-0.5 bg-gray-700 rounded-full text-gray-400">
                3
              </span>
            </a>

          </nav>
        </div>

        <div className="mt-auto">
          <a
            href="#"
            className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition duration-150"
          >
            <svg className="w-5 h-5 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
            </svg>
            Settings
          </a>
        </div>

      </aside>
    </>
  )
}

export default MobileSideNav