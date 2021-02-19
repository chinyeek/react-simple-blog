import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from '../hooks/useFetch';
import firebase from '../firebase';

const Home = () => {
 
  const fbDB = firebase.firestore();
  const fbCol = fbDB.collection('blogs');

  const {data: blogs, isPending, error} = useFetch(fbCol, false);

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}

export default Home
