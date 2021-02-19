import {useEffect, useState} from 'react';
import firebase from '../firebase';

const useFetch = (dbRef, singleBlog, id) => {

  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  function getAllBlogs(){
    setIsPending(true);
    dbRef.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setIsPending(false);
    });
  }

  function getSingleBlogById(){
    setIsPending(true);
    console.log(id);
    dbRef.doc(id).get()
      .then((doc) => {
        if(doc.exists){
          console.log(doc.data());
          setData(doc.data());
          setIsPending(false);
        } else {
          console.log('no such document');
        }
      })
      .catch((error) => {
        setError(error);
      });
  }

  // useEffect takes in two parameters
  // first parameter is the function that is going to run on every render
  // second parameter is an array which contain the dependencies. If we put in an empty array, then the function will ONLY run after the initial render
  useEffect(() => {
    if(singleBlog){
      getSingleBlogById();
    } else {
      getAllBlogs();
    }
  }, []);

  return {data, isPending, error};
};

export default useFetch;