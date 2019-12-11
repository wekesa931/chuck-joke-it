import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { Icon } from 'antd'
import { CSSTransition } from 'react-transition-group'

import FAVORITES from '../../models/favorites'
import Loader from '../../components/loader'
import { IChuckJoke, IFavorite } from '../../types/chuckJoke'
import { AppState } from '../../store'
import { AppActions } from '../../types/actions'
import { getChuckJoke } from '../../actions/randomJokeActions'
import './randomJoke.scss'

type Props = LinkStateProps & LinkDispatchProps;

const RandomJoke: React.SFC<Props> = (props) => {
  const [iconType, setIconType] = useState('outlined')
  const { id, icon_url, value } = props.randomChuckJoke
  const { randomChuckJoke } = props

  useEffect(() => {
    const { getChuckJoke } = props
    getChuckJoke()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


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

  let screenView = <div style={{padding: '0 20%'}}><Loader /></div>
  if(randomChuckJoke.id.length > 0) {
    screenView = (
      <CSSTransition
        in={true}
        appear={true}
        timeout={1000}
        classNames='fade'
      >
        <div className ='randomChuckJoke'>
          <div style={{height: '15%'}}>
            <img 
              src={`${randomChuckJoke.icon_url}`}
              alt="new"
              style={{width: '3%'}}
              />
          </div>
          <div className='randomChuckJoke-text'>
            <p>{randomChuckJoke.value}</p>
          </div>
          <div style={{display: 'flex'}}>
            <div style={{width: '50%'}}>
              <Icon 
                style={{fontSize: '2em', cursor: 'pointer'}} 
                type="star"
                // @ts-ignore
                theme={iconType}
                onClick={() => addFavoriteHandler(id, icon_url, value)} />
            </div>
            <div style={{width: '50%'}}>
              <Icon style={{fontSize: 28}} 
              type="double-right" 
              onClick={() => {
                checkFav(id)
                props.getChuckJoke()}} />
            </div>
          </div>
          
        </div>
      </CSSTransition> 
    )
  }

  return ( 
    <div className='joke-container'>
      {screenView}
    </div>
   );
}

interface LinkStateProps {
  randomChuckJoke: IChuckJoke;
}

interface LinkDispatchProps {
  getChuckJoke: () => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    randomChuckJoke: state.categoryJoke
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  // @ts-ignore
  getChuckJoke: bindActionCreators(getChuckJoke, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomJoke)