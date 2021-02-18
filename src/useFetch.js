import {useEffect, useState} from 'react';

const useFetch = (dbRef) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  function getBlogs(){
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
  // useEffect takes in two parameters
  // first parameter is the function that is going to run on every render
  // second parameter is an array which contain the dependencies. If we put in an empty array, then the function will ONLY run after the initial render
  useEffect(() => {
    // fetch data from firestore
    getBlogs();
  }, []);

  return {data, isPending, error};
};

export default useEffect;