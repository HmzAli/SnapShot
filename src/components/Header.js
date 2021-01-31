import React from 'react'
import Form from './Form'
import Navigation from './Navigation'

const Header = ({handleSubmit, history}) => {
    return (
        <div>
            <h1>SnapShot</h1>
            <Form handleSubmit={handleSubmit} history={history}></Form>
            <Navigation/>
        </div>
    )
}

export default Header
