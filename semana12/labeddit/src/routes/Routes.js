import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostPage from '../pages/PostPage/PostPage'
import RegistrstionPage from '../pages/RegistrationPage/RegistrationPage'
import ErroPage from '../assents/ErroPage'




const Routes = () =>{
    return (    
        <BrowserRouter>
            <Switch>
                <Route exact path='/feed'>
                    <FeedPage />
                </Route>
                <Route exact path='/login'>
                    <LoginPage />
                </Route>
                <Route exact path='/post/postId'>
                    <PostPage />
                </Route>
                <Route exact path='/signup'>
                    <RegistrstionPage />
                </Route>
            </Switch>
        </BrowserRouter>
        

    )

}


export default Routes 