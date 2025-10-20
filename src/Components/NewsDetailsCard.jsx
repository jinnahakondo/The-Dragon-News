import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    const { title, image_url, details, category_id } = news;

    return (
        <div className='space-y-5'>
            <img src={image_url} className='w-full h-[400px] object-cover' />
            <h2 className='text-2xl'>{title}</h2>
            <p>{details}</p>
            <Link to={`/category/${category_id}`} className='btn btn-secondary'>All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;