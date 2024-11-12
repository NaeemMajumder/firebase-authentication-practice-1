import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';


const Main = () => {
    return (
        <div className='max-w-[1350px]'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;