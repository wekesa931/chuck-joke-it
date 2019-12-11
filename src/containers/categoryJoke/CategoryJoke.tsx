import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { RouteComponentProps } from 'react-router';

import Loader from '../../components/loader'
import { AppState } from '../../store'
import { AppActions } from '../../types/actions'
import { IChuckJoke } from '../../types/chuckJoke'
import { getRandomJoke } from '../../actions/randomJokeActions'
import JokeItem from '../../components/randomJoke/JokeItem'

type Props = LinkStateProps & LinkDispatchProps;
 
const CategoryJoke: React.SFC<Props & RouteComponentProps> = (props) => {

  useEffect(() => {
    const { getRandomJoke } = props
    // @ts-ignore
    const { category } = props.match.params

    getRandomJoke(category)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  let screenView = <Loader />

  if(props.randomJoke.categories.length > 0){
    screenView = <JokeItem 
      joke={props.randomJoke}
      // @ts-ignore
      param={props.match.params.category}
    />
  }
  return ( 
    <React.Fragment>
      {screenView}
    </React.Fragment>
   );
}

interface LinkStateProps {
  randomJoke: IChuckJoke;
}

interface LinkDispatchProps {
  getRandomJoke: (category: string) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    randomJoke: state.categoryJoke
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  // @ts-ignore
  getRandomJoke: bindActionCreators(getRandomJoke, dispatch),
});

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryJoke)