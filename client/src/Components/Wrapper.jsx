import React from 'react'
import Header from './Small/Header'
import SideBar from './Small/SideBar'

export default function Wrapper({ children }) {
    return (
        <div className="w-screen flex">


            <SideBar />
            <div class="w-full flex flex-col overflow-y-hidden">
                <Header />
                {
                    children
                }
            </div>
        </div>
    )
}
