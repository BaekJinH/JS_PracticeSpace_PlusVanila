import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [articles, setArticles] = useState([]);
  const debouncedSearchTerm = useDebounce(inputValue, 0);

  async function fetchNews(keyword) {
    try {
      // AXIOS ERROR 429는 내가 수정할 수 없는 에러임. 요청이 많아 API 측에서 발생하는 에러
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&q=${keyword}&category=business&apiKey=3dd9ead215164d0fb32606a08d17a1d8`,
      );
      setArticles(response.data.articles);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchNews(debouncedSearchTerm);
    } else {
      setArticles([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="srh_input">검색 : </label>
        <input
          type="text"
          placeholder="검색어 입력"
          id="srh_input"
          onChange={e => setInputValue(e.target.value)}
        />
        <input type="submit" />
      </form>
      <ul>
        {articles.map(article => (
          <li key={article.url}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
