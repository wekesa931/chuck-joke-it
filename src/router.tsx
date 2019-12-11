import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import FilteredJokes from './containers/filteredJokes/FilteredJokes'
import Categories from './containers/categories/Categories'
import Favorites from './containers/favorites/Favorites'
import CategoryJoke from './containers/categoryJoke/CategoryJoke'
import Logo from './components/logo/Logo'


const Router: React.FC = (): ReactElement => {
    return (
        <BrowserRouter>
            <Logo />
            <Switch>
                <Route exact path="/" component={Categories} />
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/search-filters" component={FilteredJokes} />
                <Route exact path="/:category" component={CategoryJoke} />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Router
