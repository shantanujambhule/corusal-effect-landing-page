import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className="absolute top-0 w-full flex justify-between p-8 items-center z-2">
      
        <div className="logo ">Noir Wood</div>
      <div className="pages justify-center items-center gap-[0.5em] hidden lg:flex">
        <a href="">Films</a>
        <a href="">Production</a>
        <a href="">Info</a>
        <a href="">Contact</a>
      </div>
      <div className="shop flex justify-end items-center gap-[1em]">
        <a href="">Search</a>
        <a href="">Account</a>
        <a href="">Cart</a>
      </div>
      </nav>

    </div>
  )
}

export default Header
