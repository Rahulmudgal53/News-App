import React, { useState, useEffect } from "react";
import "./HomeNewsComp.css";
import NewsCard from "../NewsCard/NewsCard";
import Loader from "../../Loader/Loader";
import { useParams } from "react-router-dom";

function HomeNewsComp({ categary }) {
  let categary2= categary
  if (!categary){
    const params=useParams()
    categary2=params.categary
    
    console.log(categary2)

  }
  categary=categary2
  const URL = `https://gnews.io/api/v4/search?q=${categary}&apikey=4444e9829bead0066f043fa6a3ef299d`;

  const [news, setNews] = useState([]);
  console.log(URL);
  useEffect(() => {
    setNews([]);
    fetch(URL)
      .then((res) => res.json())
      .then((json) => setNews(json.articles));
  }, [categary]);
  return (
    <>
      <div className="newsContainer">
        {news.length > 0 ? (
          news.map((n, index) => {
            return <NewsCard key={index} newsData={n} />;
          })
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default HomeNewsComp;
