import React from "react";
import CollectionCard from "./CollectionCard";
import "./Punklist.css";

const Punklist = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className='punkList'>
      {punkListData.map((punk) => (
        <div onClick={() => setSelectedPunk(punk.token_id)}>
          console.log(setSelectedPunk)
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_url}
            alt={punk.name}
          />
        </div>
      ))}
    </div>
  );
};

export default Punklist;
