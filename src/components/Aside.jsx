// src/components/Aside.jsx
import React from 'react'

function Aside() {
  return (
    <aside className="w-60 p-6 bg-gray-50 min-h-screen flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-6">
          <img src="/logo.png" alt="logo" className="w-20 h-6 mr-2" />
        </div>
        <input
          type="text"
          placeholder="검색"
          className="w-full p-2 border rounded mb-6"
        />


        <div className="space-y-2 text-left text-sm">
          <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200">
            <img src="/icon1.png" alt="icon1" className="w-4 h-4" />
            <span>홈</span>
          </div>
          <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200">
            <img src="/icon2.png" alt="icon2" className="w-4 h-4" />
            <span>새로운 음악</span>
          </div>
          <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200">
            <img src="/icon3.png" alt="icon3" className="w-4 h-4" />
            <span>라디오</span>
          </div>
        </div>
      </div>


      <div className="text-xs mt-10 space-y-1">
        <a href="#" className="block text-blue-600 hover:underline">
          뮤직에서 열기
        </a>
        <a href="#" className="block text-blue-600 hover:underline">
          베타 체험
        </a>
      </div>
    </aside>
  )
}

export default Aside
