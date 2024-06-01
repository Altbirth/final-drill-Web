import React, { createContext, useContext, useState } from 'react';

// Create a new context
const PostContext = createContext();

// Create a provider component
export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  // Function to add a new post
  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  // Value provided by the context
  const value = {
    posts,
    addPost,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

// Custom hook to use the context
export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePost must be used within a PostProvider');
  }
  return context;
};
