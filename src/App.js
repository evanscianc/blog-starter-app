import { useEffect, useState } from "react";
import Nav from "./Nav";
import Article from "./Article";
import { fetchArticles } from "./articleService";
import "./App.css";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);

  // This is a trivial app, so just fetch all the articles once.
  // A real app would do pagination.
  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  return (
    <div className="App">
      <header>Blog</header>
      <Nav articles={articles} setArticle={setArticle} />
      <Article article={article} />
    </div>
  );
}
