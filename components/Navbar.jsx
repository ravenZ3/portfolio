import React from "react";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav>
            <div className="flex flex-wrap items-start justify-between mx-auto p-8">
                <Link href= {"/"} className="text-5xl text-white font-semibold">
                    LOGO
                </Link>
                <div className="menu">
                    <ul>
                        <li><Link href={"#about"} className=" block py-2 pl-3 pr-4 text-{#ADB7EE} sm:text-xl sm:rounded sm:pd-0 md:p-0 md:rounded hover:text-white">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;