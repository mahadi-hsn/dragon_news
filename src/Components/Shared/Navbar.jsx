import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png"
import Navlink from './Navlink';
const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-5'>
            <div></div>
            <ul className='flex gap-4 items-center'>
                <li><Navlink href={'/'}>Home</Navlink></li>
                <li><Navlink href={'/about'}>About</Navlink></li>
                <li><Navlink href={'/career'}>Career</Navlink></li>
            </ul>
            <div className='flex justify-center items-center gap-2'>
                <Image src={userAvatar} alt='userAvatar' width={30} height={30}></Image>
                <button className='btn btn-primary btn-outline'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;