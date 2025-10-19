import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaShareAlt, FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const { title, author, thumbnail_url, details, total_view, rating } = news;

    // Format date
    const formattedDate = new Date(author.published_date).toLocaleDateString(
        "en-US",
        { year: "numeric", month: "short", day: "numeric" }
    );

    return (
        <div className="card bg-base-100 shadow-md  rounded-xl overflow-hidden mt-5">

            {/* Header Section */}
            <div className="flex items-center justify-between p-4 bg-base-300">
                {/* Author Info */}
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-800">{author.name}</h3>
                        <p className="text-sm text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <span className="flex items-center gap-2"><CiBookmark />
                    {/* Share Icon */}
                    <FaShareAlt className="text-gray-500 hover:text-primary cursor-pointer" /></span>
            </div>

            {/* Title */}
            <div className="px-4 pt-3">
                <h2 className="text-lg font-bold text-gray-900 leading-snug">
                    {title}
                </h2>
            </div>

            {/* Thumbnail Image */}
            <div className="px-4 py-3">
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Details Section */}
            <div className="px-4 pb-4 text-sm text-gray-600">

                {details.length > 220 ?
                    (
                        <>
                            {details.slice(0, 220)}
                            <span className="text-primary font-medium cursor-pointer"> Read More</span>
                        </>
                    ) : { details }
                }






            </div>

            {/* Footer Section */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-base-300 text-sm text-gray-600">
                <div className="flex items-center gap-1 text-orange-500">
                    {[...Array(Math.round(rating.number))].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="text-gray-700 font-semibold ml-1">
                        {rating.number.toFixed(1)}
                    </span>
                </div>

                <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
