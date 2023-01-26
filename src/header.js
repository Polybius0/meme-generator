import React from "react";

export default function Header() {

    return(
        <header className="header flex-1 inline-flex w-full justify-between
        bg-gradient-to-r from-purple-500 to-purple-800">

            <h1 className="header-title text-xl p-5 text-white font-bold">Haha Funny Maker</h1>
            <h3 className="text-xl p-5 text-white font-light">React Project</h3>
        </header>
    );
}