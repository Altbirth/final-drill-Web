// pages/posts/SomeComponent.js
import { PostProvider } from './PostContext';
import Post from './post';
import View from './view';

const SomeComponent = () => {
  return (
    <PostProvider>
      
      <Post />
      <View />
    </PostProvider>
  );
};

export default SomeComponent;
