import Link from "next/link";
import {FiMenu} from "react-icons/fi"
import {FC, PropsWithChildren} from "react";
import "../styles/globals.scss"

const RootLayout:FC<PropsWithChildren> = ({children}) => {
    type Item = {
        link:string,
        name:string
    }
    const ItemList:Item[] = [
        {link:"./",name:"Home"},
        {link:"./About",name:"About"},
        {link:"./SNS",name:"SNS"}
    ];
    const open = false
    return(
        <html lang="ja">
            <head>
                <title>{process.env.UserName} Blog</title>
            </head>
            <body>
            <header className="border-b border-gray-300 py-2">
                <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
                <h3>{process.env.UserName} Site</h3>
                    <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => !open}/>
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
            {children}
            </body>
        </html>
    )
}

export default RootLayout