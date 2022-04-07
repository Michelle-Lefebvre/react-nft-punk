import React from 'react'
import CollectionCard from './CollectionCard'
import './Pucklist.css'

const Punklist = ({ punkListData}) => {
  return (
    <div className='punkList'>
        {punkListData.map(punk => (
            <div>
                <CollectionCard
                    key={punk.id}
                    id={punk.token_id}
                    name={punk.name}
                    traits={punk.traits}
                    image={punk.image_url}
                />
            </div>
        ))}
    </div>
  )
}

export default Punklist