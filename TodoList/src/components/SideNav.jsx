import React from 'react'

const SideNav = () => {
  return (
<aside className="w-64 bg-gray-900 p-4 flex flex-col space-y-6 border-r border-gray-800">
    
    <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
            Core
        </h3>
        <nav className="space-y-1">
            
            <a
                href="#"
                className="flex items-center p-2 rounded-lg text-white font-medium bg-gray-800 border-l-4 border-emerald-700"
            >
                <svg className="w-5 h-5 mr-3 text-emerald-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                Inbox
            </a>
 
            <a
                href="#"
                className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition duration-150"
            >
                <svg className="w-5 h-5 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                Today
                <span className="ml-auto text-xs font-semibold px-2 py-0.5 bg-gray-700 rounded-full text-emerald-700">
                    5
                </span>
            </a>
 
            <a
                href="#"
                className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition duration-150"
            >
                <svg className="w-5 h-5 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path></svg>
                Upcoming
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
                <div className="w-3 h-3 rounded-full mr-3 bg-red-500"></div>
                Urgent Fixes
            </a>
            <a
                href="#"
                className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition duration-150"
            >
                <div className="w-3 h-3 rounded-full mr-3 bg-blue-500"></div>
                Project Phoenix
            </a>
            <a
                href="#"
                className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition duration-150"
            >
                <div className="w-3 h-3 rounded-full mr-3 bg-purple-500"></div>
                Personal
            </a>
        </nav>
    </div>
 
    <div className="mt-auto pt-4 border-t border-gray-800">
         <button
            className="flex items-center w-full justify-center px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-900 transition duration-150 ease-in-out"
        >
            + Add Project
        </button>
    </div>
</aside>
  )
}

export default SideNav