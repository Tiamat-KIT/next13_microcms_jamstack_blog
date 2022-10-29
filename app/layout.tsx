import { FC,PropsWithChildren } from "react";

const RootLayout:FC<PropsWithChildren> = ({children}) => {
    return(
        <html lang="ja">
            <head>
                <title>{process.env.UserName} Blog</title>
            </head>
            <body>
                <p>root layouts</p>
                {children}
            </body>
        </html>
    )
}

export default RootLayout