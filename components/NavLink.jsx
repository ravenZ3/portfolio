import React from "react";
import Link from "next/link";
const NavLink = ({href, title}) => {
    
    return (
    <Link href={href} className=" text-3xl block py-2 pl-3 pr-4 text-{#ADB7EE} sm:text-xl sm:rounded sm:pd-0 md:p-0 md:rounded hover:text-white flex-1 flex-col justify-center align-middle">
        {title}
    </Link>
    );          
};

export default NavLink;