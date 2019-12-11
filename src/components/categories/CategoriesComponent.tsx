import React from 'react';
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import './categories.scss'

import RandomJoke from '../../containers/randomJoke/RandomJoke'

export interface CategoryItemsProps {
  categories: string[]
}
 
const CategoryItems: React.SFC<CategoryItemsProps> = (props) => {
  const { categories } = props
 
  const catItems = categories.map((item:string, key: number) => (
    <Link key={key} to={`/${item}`} style={{margin: '0 1%'}}>
      <Card className='main-categories-cards' style={{background: '#97caf2' }}>
       <h3 className='category-text'>{item}</h3>
      </Card>
    </Link>
  ))
  return ( 
    <React.Fragment>
      <div className='categories'>
        <div>
          <RandomJoke />
        </div>
        <div className='main-categories'>
          {catItems}
        </div>
      </div>
    </React.Fragment>
    
   );
}
 
export default CategoryItems;