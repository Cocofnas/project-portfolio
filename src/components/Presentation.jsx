import React from 'react';
import './Presentation.css';
import ArticleCard from './ArticleCard';
import SquigglyLine from './squigglyline'; 
import Article1 from '../assets/Article1.jpg'; // Path to your image
import Article2 from '../assets/Article2.jpg'; // Path to your image
import Article3 from '../assets/Article3.jpg'; // Path to your image
import Article4 from '../assets/Article4.jpg'; // Path to your image
import Article5 from '../assets/Article5.png'; // Path to your image

function Presentation() {
  // Define the articles array here
  const articles = [
    {
      id: 5,
      title: "Job searching during a bad economy",
      description: "Job searching is hell, but one day you will catch a break",
      imageUrl: Article5,
      date: "August 2024",
      url: "https://medium.com/@alexandrameija/job-searching-during-a-bad-economy-36fa0fee115c" // Add the article's URL here
    },
    {
      id: 4,
      title: "Coding and ADHD- a match made in heaven?",
      description: "I struggled a lot in going into code because of the diagnosis, but now, I realize that coding is exactly what my ADHD brain needs",
      imageUrl: Article4,
      date: "April 2024",
      url: "https://medium.com/@alexandrameija/coding-and-adhd-a-match-made-in-heaven-d8f564b17df5" // Add the article's URL here
    },
    {
      id: 3,
      title: "Imposter syndrome and when it hits you",
      description: "My everlasting feeling of being an imposter and how I deal with it",
      imageUrl: Article3,
      date: "March 2024",
      url: "https://medium.com/@alexandrameija/impostor-syndrome-and-when-it-hits-you-d794c6d4cd69" // Add the article's URL here
    },
    {
      id: 2,
      title: "GLOW",
      description: "The start of the community GLOW (Glorious Lades of Web development).",
      imageUrl: Article2,
      date: "March 2024",
      url: "https://medium.com/@alexandrameija/glow-b02ed82d2ca6" // Add the article's URL here
    },
    {
      id: 1,
      title: "Why I became a techie (and launched a new careerpath after 40)",
      description: "My journey towards becoming a person in tech.",
      imageUrl: Article1,
      date: "March 2024",
      url: "https://medium.com/@alexandrameija/why-i-became-a-techie-and-launched-a-new-careerpath-after-40-e853fdba98e4" // Add the article's URL here
    },
 
 
  ];
  

  return (
    <div className="presentation">
      <SquigglyLine />
      <h2 className="presentation-heading">My words</h2>
      <div className="articles-grid">
      {articles.map(article => (
  <ArticleCard
    key={article.id}
    title={article.title}
    description={article.description}
    imageUrl={article.imageUrl}
    date={article.date}
    url={article.url} // Pass the url to each ArticleCard
  />
))}
      </div>
    </div>
  );
}

export default Presentation;

