import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  
  const fbDB = firebase.firestore();
  const fbCol = fbDB.collection('blogs');
  const {data: blogs, isPending, error} = useFetch(fbCol);

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}

export default Home
