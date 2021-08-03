import { urlAlphabet } from 'nanoid';
import React, { useState} from 'react'
import "../index.css"
import Item from './Item';


function RandomCharacters() {
const api = {
  base: "https://www.breakingbadapi.com/api/",
  cateogry: "characters",
};
const [randoms,setRandom] =useState([]);
const handleClick =  () => {
  fetch(api.base+api.cateogry)
    .then((res) => res.json())
    .then((result) => {
      setRandom(result);
      console.log(result);
      console.log(randoms);
      
    });
};
    return (
      <div>
        <button className="btn" onClick={handleClick}>
          Get Random characters
        </button>
        <div>
          {randoms.map((values) => (
            <Item
              name={values.name}
              portrayed={values.portrayed}
              img={values.img}
            />
          ))}
        </div>
      </div>
    );
}

export default RandomCharacters
