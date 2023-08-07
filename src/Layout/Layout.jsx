import React from 'react';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const LayoutOnlyHeader =(props) =>{
    return (
        <div>
            <Header/>
            <main>
                {props.children}
            </main>

        </div>
    )
}
const Layout = (props) =>{
    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />

        </div>
    )
}

export default {LayoutOnlyHeader, Layout};
