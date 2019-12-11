import React, { useState } from 'react';
import { Icon } from 'antd'

import FAVORITES from '../../models/favorites'
import { IFavorite } from '../../types/chuckJoke'

const Favorites: React.SFC = () => {
  const [favorites, setFavorites] = useState(FAVORITES)
  const deleteFavHandler = (id: string) => {
    setFavorites(favorites.filter((fav: IFavorite) => fav.id !== id))
    FAVORITES.splice(FAVORITES.findIndex(fav => fav.id === id), 1);
  }

  let screenView = <div style={{textAlign: 'center', justifyContent: 'center'}}>
      <h3>You have no favorites</h3>
    </div>

  if(favorites.length > 0){
    // @ts-ignore
    screenView = favorites.map((item: IFavItem) =>
      <div key={item.id} className='joke-container' style={{marginBottom: '2%'}}>
        <div className ='randomChuckJoke'>
          <div style={{height: '15%'}}>
          <Icon 
            style={{fontSize: '2em', cursor: 'pointer'}} 
            type="delete"
            onClick={() => deleteFavHandler(item.id)} />
          </div>
          <div className='randomChuckJoke-text'>
            <p>{item.value}</p>
          </div>
        </div>
      </div> 
    )
  }
  return ( 
    <React.Fragment>
      {screenView}
    </React.Fragment>
   );
}

export default Favorites;