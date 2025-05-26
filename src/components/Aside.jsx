import React from 'react'

function Aside() {
  return (
    <aside className="w-[230px] p-6 bg-gray-50 min-h-screen flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-6">
          <img src="/logo.png" alt="logo" className="w-20 h-6 mr-2" />
        </div>
        
        <div className="flex items-center bg-white rounded-md px-2 py-1 shadow-sm">
          <img src="/search.png" alt="검색 아이콘" className="w-6 h-6 mr-2" />
          <input type="text" placeholder="검색" className="flex-1 outline-none bg-transparent text-gray-800"/>
        </div>

        <div className="my-4"></div>

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
