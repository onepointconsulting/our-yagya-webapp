import React, { useState, useEffect } from 'react'

const StickyButton = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  return (
    <div className="hidden lg:flex justify-end mr-2 md:mr-3 lg:mr-4">
      <button
        style={{
          right: 'auto',
          zIndex: '1',
          display: showButton ? 'block' : 'none',
        }}
      >
        <div>
          <div
            id="language"
            className="lang bg-white border-2 border-red-600 rounded-md hidden shadow-md absolute right-16 top-[16px] pr-4 rounded-tr-full rounded-br-full"
          >
            <select className="outline-none focused">
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
            </select>
          </div>

          <div className="flex flex-col float-right ml-auto">
            <div
              className="p-1 md:p-2 md:px-2 m-1 text-red-600 bg-white border-[1px] border-red-600 rounded-full">
              <a href="#" id="o_language">
                {' '}
                <img
                  className="w-4 md:w-5 h-4 md:h-5"
                  src="/img/icons/Language.png"
                  alt=""
                />{' '}
              </a>
            </div>
            <div
              className="p-1 md:p-2 md:px-2 m-1 text-red-600 bg-white border-[1px] border-red-600 rounded-full">
              <a href="/login.html">
                {' '}
                <img
                  className="w-4 md:w-5 h-4 md:h-5"
                  src="/img/icons/LoginRed.png"
                  alt=""
                />{' '}
              </a>
            </div>
            <div
              className="p-1 md:p-2 md:px-2 m-1 text-red-600 bg-white border-[1px] border-red-600 rounded-full">
              <a href="/made4me.html">
                {' '}
                <img
                  className="w-4 md:w-5 h-4 md:h-5"
                  src="/img/icons/StarPointer.png"
                  alt=""
                />{' '}
              </a>
            </div>
            <div
              className="hidden p-1 md:p-2 md:px-2 m-1 text-red-600 bg-white border-2 border-red-600 rounded-full">
              <img className="w-4 md:w-5 h-4 md:h-5"
                   src="/img/icons/HeartRed.png" alt=""/>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}

export default StickyButton
