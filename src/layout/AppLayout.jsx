/* eslint-disable react/prop-types */

import Header from "../ui/Header"


export const AppLayout = ({ children }) => {
    return (
        <div className="">
            <Header />
            <main className="main container">
                {
                    children
                }
            </main>

        </div>
    )
}

