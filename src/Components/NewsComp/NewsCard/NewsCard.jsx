import React from 'react';
import './NewsCard.css';

function NewsCard({ newsData }) {
    return (
        <a href={newsData.url} className="news-card">            
            <img src={newsData.image} alt="news" />
            <h1>{newsData.title}</h1>
            <p>{newsData.description}</p>
        </a>
    );
}

export default NewsCard;
