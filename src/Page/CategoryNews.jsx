import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCrad from '../Components/Home Layout/NewsCrad';

const CategoryNews = () => {
    const [categoryNews, setCatgoryNews] = useState([])
    const { id } = useParams();
    const data = useLoaderData();

    useEffect(() => {
        if (id === '0') {
            setCatgoryNews(data);
            return
        }
        else if (id === '1') {
            const filteredNews = data.filter(news => news.others.is_today_pick === true);
            setCatgoryNews(filteredNews);
            return;
        }
        else {

            const filteredNews = data.filter(news => news.category_id === Number(id));
            setCatgoryNews(filteredNews)
        }
    }, [data, id])
    console.log(categoryNews)
    return (
        <div>
            <h2 className="font-bold ">Dragon News Home</h2>
            <div className='space-y-5 '>
                {categoryNews.map(news => <NewsCrad key={news.id} news={news} />)}
            </div>
        </div>
    );
};

export default CategoryNews;