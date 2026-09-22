'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href , children}) => {
    const pathname = usePathname();
    const isActive = href === pathname;
    return (
        <Link className={`${isActive ? "border-b-2 border-teal-600" : ""}`} href={href}>
            {children}
        </Link>
    );
};

export default Navlink;