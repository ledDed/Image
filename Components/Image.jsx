import React, { useState, useEffect } from 'react';

const Image = () => {

  const data={name:"placeholder",
    Photographer:"placeholder",
    height:"placeholder",
    width:"placeholder",
    };
  const [url, setUrl] = useState('');
  const [height, setHeight] = useState('');
  const [description, setDescription] = useState('');
  const [width, setWidth] = useState('');
  const [artist, setArtist] = useState('');


  useEffect(() => {
    fetch("https://api.unsplash.com/photos/random/?client_id=l4ja8DtsrIJI0Qq0ouXB3t64l6W_ZlvywAuMFVRgFVg")
      .then(res => res.json())
      .then(data => {
        setUrl(data.urls.regular);
        setHeight(data.height);
        setDescription(data.alt_description)
        setArtist(data.user.first_name)
        setWidth(data.width)
        console.log(data)
      })
      .catch(err => console.error(err));
  }, []);
  let a=fetch("https://cat-fact.herokuapp.com/facts")
  console.log(a)

  return (
    
    
    <div className='outerDiv'>    
    
      {console.log(height)}
      {url ? <img className='Image' src={url} alt="Random from Unsplash" /> : "Loading..."}
    
     <div className='InnerDiv'>
      <p className="flex flex-col items-center font-serif">Description:<p className="a">{description}</p></p>
      <p className="innerAttributes">Artist : <p className="a"> {artist}</p></p>
      <p className="innerAttributes">Width : <p className="a"> {width}</p></p>
      <p className="innerAttributes">Height : <p className="a"> {height}</p></p>
    </div>
    </div>
    
  )
};

export default Image;
