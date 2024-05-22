import React, { useState } from "react";
import Logo from "../ui/Logo";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import SearchModal from "../SearchModal";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="h-[5.5rem]  bg-secondary ">
      <div className="max-w-[1140px] text-white mx-auto flex justify-between items-center  py-2">
        <Logo />
        <nav>
          <ul className="flex gap-x-2">
            <li className="px-[5px] py-[20px] hover:text-primary cursor-pointer">
              <a href="">HOME</a>
            </li>
            <li className="px-[5px] py-[20px] hover:text-primary cursor-pointer">
              <a href="">MENU</a>
            </li>
            <li className="px-[5px] py-[20px] hover:text-primary cursor-pointer">
              <a href="">ABOUT</a>
            </li>
            <li className="px-[5px] py-[20px] hover:text-primary cursor-pointer">
              <a href="">BOOK TABLE</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-6 items-center">
          <a href="" className="hover:text-primary cursor-pointer text-sm">
            <FaUserAlt />
          </a>
          <a href="" className="hover:text-primary cursor-pointer text-base">
            <RiShoppingCartFill />
          </a>
          <button
            onClick={() => setOpenModal(true)}
            className="hover:text-primary cursor-pointer text-lg"
          >
            <IoSearch />
          </button>
          <a href="">
            <button className="btn-prmary">Order Online</button>
          </a>
        </div>
      </div>
      {openModal && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setOpenModal(false);
          }}
        >
          <SearchModal />
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default Header;
