"use client"
import { FC, PropsWithChildren} from "react";
import Navbar from "./Component/Navbar";
import "../styles/globals.scss"

const RootLayout:FC<PropsWithChildren> = ({children}) => {
    
    return(
        <html lang="ja">
            <head>
                <title>{process.env.UserName} Blog</title>
            </head>
            <body>
            <Navbar />
            {children}
            </body>
        </html>
    )
}

export default RootLayout