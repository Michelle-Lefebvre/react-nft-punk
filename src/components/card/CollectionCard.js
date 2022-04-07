import React from 'react'
import weth from '../../assets/weth.png'
import './CollectiionCard.css';

const CollectionCard = ({id, name, traits, image}) => {
  return (
    <div className='collectionCard'>
      <img src={image} alt='name'/>

      <div className='details'>
        <div className='name'>
            {name}
            <div className='id'>.#{id}</div>
        </div>
      </div>

      <div className='priceContainer'>
        <img src={weth} className="wethImage" alt='NFT icon'/>
          <div className='price'>{ traits[0]?.value }</div>
      </div>
    </div>
  )
}

export default CollectionCard