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

  let length = 15;

  async function fetchNews(keyword) {
    try {
      // AXIOS ERROR 429는 내가 수정할 수 없는 에러임. 요청이 많아 API 측에서 발생하는 에러
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&q=${keyword}&category=business&apiKey=3dd9ead215164d0fb32606a08d17a1d8`,
      );
      const filteredArticles = response.data.articles.filter(article =>
        article.title.toLowerCase().includes(keyword.toLowerCase()),
      );
      setArticles(filteredArticles);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    debouncedSearchTerm ? fetchNews(debouncedSearchTerm) : setArticles([]);
  }, [debouncedSearchTerm]);

  const highlightMatch = title => {
    if (!inputValue) {
      return title;
    }
    const regex = new RegExp(inputValue, 'gi');
    return title.replace(regex, match => `<strong>${match}</strong>`);
  };

  return (
    <div className="search_wrap">
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
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              dangerouslySetInnerHTML={{
                __html:
                  article.title.length > length
                    ? highlightMatch(article.title.substr(0, length - 2)) +
                      '...'
                    : highlightMatch(article.title),
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
