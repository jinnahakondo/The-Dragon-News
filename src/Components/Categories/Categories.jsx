import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('../categories.json').then(res => res.json())
const Categories = () => {
    const allCategories = use(categoryPromise)
    // console.log(allCategories)
    return (
        <div>
            <h2 className='font-bold mb-6'>All Categories ({allCategories.length})</h2>
            <div className='grid grid-cols-1 gap-3 '>
                {allCategories.map(c => <NavLink to={`/category/${c.id}`} key={c.id} className='btn font-semibold text-accent flex justify-start bg-base-100 border-0 shadow-none hover:bg-base-200 hover:shadow'>
                    <span>{c.name}</span>
                </NavLink>)}
            </div>
        </div>
    );
};

export default Categories;