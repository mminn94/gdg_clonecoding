import React from 'react'

function Button() {
  return (
    <div className="flex items-center gap-2 bg-red-600 rounded-sm px-3 py-1">
      <img src="/human.png" alt="인간아이콘" className="w-4 h-4" />
      <span className="text-white font-bold">로그인</span>
    </div>
  )
}

export default Button
