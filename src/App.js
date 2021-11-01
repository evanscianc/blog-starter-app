import { useEffect, useState } from "react";
import Nav from "./Nav";
import Article from "./Article";
import ArticleEntry from "./ArticleEntry";
import { fetchArticles, createArticle } from "./articleService";
import "./App.css";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const [writing, setWriting] = useState(null);

  // This is a trivial app, so just fetch all the articles once, when
  // the app is loaded. A real app would do pagination.
  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  function addArticle({ title, body }) {
    // Update the "database" then update the internal React state
    createArticle({ title, body }).then((article) => {
      setArticle(article);
      setArticles([article, ...articles]);
    });
  }

  return (
    <div className="App">
      <header>
        Blog <button onClick={() => setWriting(true)}>New Article</button>
      </header>
      <Nav articles={articles} setArticle={setArticle} />
      {writing ? (
        <ArticleEntry setWriting={setWriting} addArticle={addArticle} />
      ) : (
        <Article article={article} />
      )}
    </div>
  );
}
