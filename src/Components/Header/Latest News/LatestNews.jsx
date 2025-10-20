import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    const [latest, setLatst] = useState([]);
    const [title, setTitle] = useState([])
    useEffect(() => {
        fetch('../news.json')
            .then(res => res.json())
            .then(data => {
                const latestNews = data.filter(news => news.others.is_today_pick === true);
                setLatst(latestNews)
            })
        const title = latest.map(news => news.title)
        setTitle(title);

    }, [latest])
    // const latestNews = latest
    // console.log(latestNews)
    console.log(title);
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-4 py-2'>Latest</p>

            <Marquee pauseOnHover={true} speed={50}>
                <div className='flex gap-5'>
                    {/* <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat aliquam laboriosam, eos nostrum ipsa modi dolore molestias? Explicabo, eius aperiam.</p><p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat aliquam laboriosam, eos nostrum ipsa modi dolore molestias? Explicabo, eius aperiam.</p> */}


                    {title}
                </div>
            </Marquee>
        </div>
    );
};

export default LatestNews;