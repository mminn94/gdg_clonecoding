import React from 'react'

function Img() {
  return (
    <div className="flex gap-1 mb-4">
        <div className="p-4">
          <p className="text-[13px] font-bold text-gray-500">최신 발매 공간 음향</p>
          <h2 className="text-lg font-semibold">이 주의 추천 앨범</h2>
          <p className="text-[16px] text-gray-500 font-medium">감성을 자극하는 최신 음악 모음</p>
          
          <div className='relative w-130 h-75 rounded-lg overflow-hidden shadow-md mt-4'>
            <img src="/card1.png" alt="추천 앨범 1" className="w-full h-full object-cover" />
            <div className='absolute bottom-0 left-0 w-full p-2 text-white'>
              <p className='text-sm font-normal ml-2'>힙합 씬 최고의 인물이 누구인가에 대한 논쟁은 언제나 치열하지만, <br/>2024년의 주인공은 Kendrick Lamar.</p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <p className="text-[13px] font-bold text-gray-500">최신 발매 공간 음향</p>
          <h2 className="text-lg font-semibold">ODYSSEY - The 1st Album</h2>
          <p className="text-[16px] text-gray-500 font-medium">RIIZE</p>
          
          <div className='relative w-130 h-75 rounded-lg overflow-hidden shadow-md mt-4'>
            <img src="/card2.png" alt="추천 앨범 2" className="w-full h-full object-cover" />
            <div className='absolute bottom-0 left-0 w-full p-2 text-white'>
              <p className='text-sm font-normal ml-2'> RIIZE의 성장 과정을 탄탄한 스토리텔링으로 엮은 대망의 첫 정규 앨범.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Img
