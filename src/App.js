import React, { Component } from 'react'
import {
    HashRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import PhotoContextProvider from './context/PhotoContext'

import Header from './components/Header'
import Search from './components/Search'
import Item from './components/Item'
import NotFound from './components/NotFound'

class App extends Component {
    handleSubmit = (e, history, searchInput) => {
        e.preventDefault()
        e.currentTarget.reset()
        const url = `/search/${searchInput}`
        history.push(url)
    }

    render() {
        return (
            <PhotoContextProvider>
                <HashRouter basename="/SnapShot">
                    <div class="container">
                        <Route
                            render={props => (
                                <Header 
                                    history={props.history}
                                    handleSubmit={this.handleSubmit}
                                />
                            )}
                        />
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => <Redirect to="/mountain" />}
                            />
                            <Route path="/mountain" render={() => <Item searchTerm="mountain" />}
                            />
                            <Route path="/beach" render={() => <Item searchTerm="beach" />}/>
                            <Route path="/birds" render={() => <Item searchTerm="birds" />}/>
                            <Route path="/food" render={() => <Item searchTerm="food" />}/>
                            <Route path="/search/:searchInput"
                                render={props => (
                                    <Search searchTerm={props.match.params.searchInput} />
                                )}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </HashRouter>
            </PhotoContextProvider>
        )
    }
}

export default App
