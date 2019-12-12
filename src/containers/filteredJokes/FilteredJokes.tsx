import React from 'react';
import { connect } from 'react-redux'
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { Input } from 'antd'

import Loader from '../../components/loader'
import { IFilter, IChuckJoke } from '../../types/chuckJoke'
import { AppState } from '../../store'
import { AppActions } from '../../types/actions'
import { getFilteredJokes } from '../../actions/filteredJokes'
import './filtered.scss'

const { Search } = Input;
type Props = LinkStateProps & LinkDispatchProps;
interface IFilterItem {
  text: string
}

const FilteredJokes: React.SFC<Props & IFilterItem> = (props) => {

  const searchFilter = (value: string) => {
    const { getFilteredJokes } = props
    getFilteredJokes(value)
    screenView = <Loader />
  }
  let screenView = <div>
      <p>You have not made any search</p>
    </div>
  const { result, total } = props.filteredeChuckJokes
 
  if(total > 0) {
     // @ts-ignore
    screenView = result && result.map((joke: IChuckJoke) => (
      <div key={joke.id} className ='randomChuckJoke' style={{marginBottom: '1%', marginTop: '1%'}}>
        <div style={{height: '15%'}}>
          <img 
            src={`${joke.icon_url}`}
            alt="new"
            className='chuck-face'
            />
        </div>
        <div className='randomChuckJoke-text'>
          <p>{joke.value}</p>
        </div>
      </div>
  ))} else if (total === 0) {
    // @ts-ignore
    screenView = <div>
      <p>Search Result not found</p>
    </div>
  }

  return ( 
    <div className="filtered-items">
      <div style={{padding: '0 40%'}}>
        <Search placeholder="Input search text"
          onSearch={value => searchFilter(value)} enterButton />
      </div>
      <div style={{padding: '0 20%', textAlign: 'center'}}>
        {screenView}
      </div>
    </div>
   );
}

interface LinkStateProps {
  filteredeChuckJokes: IFilter;
}

interface LinkDispatchProps {
  getFilteredJokes: (text: string) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    filteredeChuckJokes: state.filteredJokes
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  // @ts-ignore
  getFilteredJokes: bindActionCreators(getFilteredJokes, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredJokes)