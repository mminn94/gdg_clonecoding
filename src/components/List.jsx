import React from 'react'

function List() {
  const songs = [
    { title: 'HANDS UP', artist: 'MEOVV', image: '/list1.png' },
    { title: 'DROP TOP', artist: 'MEOVV', image: '/list2.png' },
    { title: 'Drowning', artist: 'WOODZ', image: '/list3.png' },
    { title: 'SIGN', artist: 'IZNA', image: '/list4.png' },
    { title: 'I Feel Good', artist: 'BOYNEXTDOOR', image: '/list5.png' },
    { title: '너에게 닿기를', artist: '10CM', image: '/list6.png' }
  ]

  return (
    <div className="grid grid-cols-3 gap-1">
      {songs.slice(0, 6).map((song, index) => (
        <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-gray-100">
          <div className="flex items-center gap-4">
            <img
              src={song.image}
              alt={song.title}
              className="w-12 h-12 object-cover rounded"/>
            <div className="flex flex-col">
              <p className="text-medium font-semibold">{song.title}</p>
              <p className="text-[14px] text-gray-500">{song.artist}</p>
            </div>
          </div>
          <img src="/icon..png" alt="점 3개" className="w-6 h-6" />
        </div>
      ))}
    </div>
  )
}

export default List
