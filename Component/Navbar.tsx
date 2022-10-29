"use client"
import Link from "next/link";
import { useState } from "react";
import {FiMenu} from "react-icons/fi"

export default function Navbar(){
    type Item = {
        link:string,
        name:string
    }
    const ItemList:Item[] = [
        {link:"./",name:"Home"},
        {link:"./About",name:"About"},
        {link:"./SNS",name:"SNS"}
    ];
    const [open,setOpen] = useState(false)
    return(
        <>
           <header className="border-b border-gray-300 py-2">
                <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
                <h3>{process.env.UserName}'s Room</h3>
                    <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setOpen(!open)}/>
                    <nav className={`${open ? "block" :  "hidden" } w-full lg:flex lg:items-center lg:w-auto`}>
                        <ul className="text-base text-gray-600 lg:flex lg:justify-between">
                            {ItemList.map((_,idx) => {
                                return(
                                    <li key={ItemList[idx].name}>
                                        <Link href={ItemList[idx].link} className="lg:px-5 py-2 block hover:text-blue-700 font-semibold">
                                            {ItemList[idx].name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </header> 
        </>
    )
}