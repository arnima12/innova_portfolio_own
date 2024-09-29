import React from 'react';
import { useLocation } from 'react-router-dom';

const NewsPage = () => {
    const location = useLocation();
    const { news } = location.state || {};

    if (!news) {
        return <div>News not found</div>;
    }
    return (
        <div className="p-8">
            <div className="flex justify-center">
                <img src={news.image} alt={news.title} className="w-full h-[40rem] mb-8" />
            </div>
            <div className="latestBlog text-left pt-4 pb-8 px-8">
                <h2 className="font-[500] text-[30px] md:text-[48px] text-[rgb(47,94,163)]">{news.title}</h2>
                <h3 className="text-[rgb(42,193,235)] font-[800] mb-4">{news.date}</h3>
                <p className="font-[600]">{news.desc}</p>
            </div>
        </div>
    );
};

export default NewsPage;