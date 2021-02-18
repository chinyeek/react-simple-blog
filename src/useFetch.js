import {useEffect, useState} from 'react';

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // useEffect takes in two parameters
  // first parameter is the function that is going to run on every render
  // second parameter is an array which contain the dependencies. If we put in an empty array, then the function will ONLY run after the initial render
  useEffect(() => {
    // fetch data from the JSON server
    fetch(url)
      .then(res => {
        if(!res.ok){
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  return {data, isPending, error};
};

export default useEffect;