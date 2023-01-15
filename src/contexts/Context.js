import React, { useState } from "react";

const initialValue = {
  isNewsShown: false,
  news: [],
  toggleNewsShown: () => {},
  fetchNews: () => {},
}

export const NewsContext = React.createContext(initialValue);

export const NewsContextProvider = props => {
  const [news, setNews] = useState([]);
  const [isNewsShown, setIsNewsShown] = useState(true);

  const fetchNews = (data) => {
    setNews(prev => [...prev, ...data]);
  }

  const toggleNewsShown = () => {
    setIsNewsShown(prev => !prev);
  }

  const contextValue = {
    news,
    isNewsShown,
    toggleNewsShown,
    fetchNews,
  }

  return (
    <NewsContext.Provider value={contextValue}>{props.children}</NewsContext.Provider>
  )
}