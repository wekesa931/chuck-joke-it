import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux'
import { Icon } from 'antd'

import FAVORITES from '../../models/favorites'
import '../../containers/randomJoke/randomJoke.scss'
// import AddFavorite from '../../containers/favorites/AddFavorite'
import { getRandomJoke } from '../../actions/randomJokeActions'
import { IChuckJoke, IFavorite } from '../../types/chuckJoke'
import './jokeItem.scss'

export interface JokeItemProps {
  joke: IChuckJoke
  param: string
}
 
const JokeItem: React.SFC<JokeItemProps> = (props) => {
  const [iconType, setIconType] = useState('outlined')
  const { 
    id, 
    value,icon_url } = props.joke
  const dispatch = useDispatch()

  useEffect(() => {
    const ifFavorite = FAVORITES.findIndex((item: IFavorite) => (
      item.id === id
    ))
    ifFavorite === 0 && setIconType('filled')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const checkFav = (id: string) => {
    const ifFavorite = FAVORITES.findIndex((item: IFavorite) => (
      item.id === id
    ))
    ifFavorite === 0 ? setIconType('filled') : setIconType('outlined')
  }
  const addFavoriteHandler = (id: string, icon_url: string, value: string) => {
    if(iconType === 'outlined'){
      FAVORITES.push({ id, icon_url, value })
      setIconType('filled')
    } else {
      FAVORITES.splice(FAVORITES.findIndex(fav => fav.id === id), 1);
      setIconType('outlined')
    }
  }

  return ( 
    <div className='main-joke'>
      <div className='main-joke-icons'>
        <div className='main-joke-icons-fav'>
          <Icon 
            style={{fontSize: '2em', cursor: 'pointer'}} 
            type="star"
            // @ts-ignore
            theme={iconType}
            onClick={() => addFavoriteHandler(id, icon_url, value)} />
        </div>
        <div className='main-joke-icons-next'>
          <Icon 
          style={{marginLeft: '10%', fontSize: 27}} 
          type="double-right" 
          onClick={() => {
            checkFav(id)
            dispatch(getRandomJoke(props.param))}} />
        </div>
      </div>
      <div className='joke-container'>
        <div className ='randomChuckJoke'>
          <div style={{height: '15%'}}>
            <img 
              src={`${icon_url}`}
              alt="new"
              style={{width: '3%'}}
              />
          </div>
          <div className='randomChuckJoke-text'>
            <p>{value}</p>
          </div>
        </div>
      </div> 
    </div>
   );
}
 
export default JokeItem;