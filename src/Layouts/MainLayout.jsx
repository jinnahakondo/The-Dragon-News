import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet, useNavigation } from 'react-router';
import LatestNews from '../Components/Header/Latest News/LatestNews';
import Navbar from '../Components/Navbar/Navbar';
import LeftAside from '../Components/Home Layout/LeftAside';
import RightAside from '../Components/Home Layout/RightAside/RightAside';
import Loading from '../Components/Loading';

const MainLayout = () => {
    const { state } = useNavigation()
    return (
        <div className='w-11/12 mx-auto '>
            <header >
                <Header />
                <section className='my-3'>
                    <LatestNews />
                </section>
                <Navbar />
            </header>

            <main className=' grid grid-cols-12 mt-10 gap-7'>
                <aside className='col-span-3 sticky top-3 h-fit'>
                    <LeftAside />
                </aside>
                <section className='main col-span-6'>
                    {state === "loading" ? < Loading /> : <Outlet />}
                </section>
                <aside className='col-span-3 sticky top-3 h-fit'>
                    <RightAside />
                </aside>
            </main>

        </div >
    );
};

export default MainLayout;