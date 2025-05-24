// src/components/Img.jsx
import React from 'react'

function Img() {
  return (
    <div className="flex gap-6 mb-8">
      <div className="w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
        <img src="/card1.png" alt="추천 앨범 1" className="w-full h-60 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold">이 주의 추천 앨범</h2>
          <p className="text-sm text-gray-600">감성을 자극하는 최신 음악 모음</p>
        </div>
      </div>

      <div className="w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
        <img src="/card2.png" alt="추천 앨범 2" className="w-full h-60 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold">최신 발매</h2>
          <p className="text-sm text-gray-600">ODYSSEY - The 1st Album</p>
        </div>
      </div>
    </div>
  )
}

export default Img
