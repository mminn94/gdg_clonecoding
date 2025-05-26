import React from 'react'
import Aside from './components/Aside'
import Img from './components/Img'
import List from './components/List'
import Button from './components/Button'

function App() {
  return (
    <div className="flex min-h-screen font-sans bg-white">
      {/* 왼쪽 고정 사이드바 */}
      <aside className="w-[230px] border-r border-gray-200 bg-[#f9f9f9]">
        <Aside />
      </aside>
      <div className="w-px bg-gray-300"></div>
      
      {/* 오른쪽 본문 영역 */}
      <main className="flex-1 flex flex-col">
        {/* 상단 플레이어 컨트롤러 영역*/}
        <header className="h-[60px] border-b bg-white border-gray-200 px-6 flex items-center justify-between">
          <img src="/banner.png" alt="상위배너" className="w-260 h-14" />
          <Button />
        </header>
        {/* 메인 콘텐츠 영역 */}
        <section className="p-6 flex-1 overflow-y-auto bg-white">

          {/* 제목 */}
          <h2 className="text-4xl font-black mb-4">새로운 음악</h2>
          <hr className='my-2 border-gray-200'/>
          {/* 대표 카드형 앨범 2개 */}
          <Img />

          {/* 최신곡 리스트 */}
          <h2 className="text-[17px] font-semibold mb-2 mt-5">최신곡</h2>
          <hr className='my-2 border-gray-200'/>
          <List />
        </section>
      </main>
    </div>
  )
}

export default App
