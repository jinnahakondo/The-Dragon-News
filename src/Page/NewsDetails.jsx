import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import RightAside from '../Components/Home Layout/RightAside/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [news, setNews] = useState({})
    useEffect(() => {
        const newsDetails = data.find(news => news.id === id);
        setNews(newsDetails)
    }, [data, id])
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header />
            </header>
            <main className='grid grid-cols-12 gap-6 '>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewsDetailsCard news={news} />
                </section>
                <aside className='col-span-3'>
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;