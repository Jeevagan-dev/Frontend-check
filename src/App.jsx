import React, { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api');
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);


  const array = [name = "jeevagan",age=19];

  return (
    <div>
   
   {Object.keys(data).map((key , index)=> (
    <h1 key={index}>
      <span>{key}:</span>
      <b>{data[key]}</b>
    </h1>
   ))}
       
    </div>
  );
}
