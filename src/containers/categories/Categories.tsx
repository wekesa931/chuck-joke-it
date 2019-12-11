import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { Spin } from 'antd';

import { AppState } from '../../store'
import { AppActions } from '../../types/actions'
import { getCategories } from '../../actions/categoriesActions'
import CategoryItems from '../../components/categories/CategoriesComponent'

type Props = LinkStateProps & LinkDispatchProps;

const Categories: React.SFC<Props> = (props) => {

  useEffect(() => {
    const { getCategories } = props
    getCategories()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  let screenView = <div style={{width: '100%', padding: '5% 50%'}}>
    <Spin size='large' />
  </div>

  if(props.categories.length > 0){
    screenView = <CategoryItems 
      categories={props.categories}
    />
  }

  return (
    <div className='categorie-items-container'>
      {screenView}
    </div>
  )
}

interface LinkStateProps {
  categories: string[];
}

interface LinkDispatchProps {
  getCategories: () => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  getCategories: bindActionCreators(getCategories, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)
