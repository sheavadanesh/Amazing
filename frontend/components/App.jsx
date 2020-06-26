import React from 'react';
import UserHomeContainer from './user_home/user_home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import ItemShowContainer from './items/item_show_container';
import { Link, Switch, Route } from 'react-router-dom';

const App = () => (
    <div className='app'>
        <UserHomeContainer/>
        <ItemShowContainer/>
        <Switch>
            <Route path='/login' component={LoginFormContainer} />
            <Route path='/signup' component={SignupFormContainer} />
            {/* <Route path='/api/item' component={ItemShowContainer} /> */}
            {/* may cause problems because this is not redirecting */}
            {/* write any other routes about the / route and inside
            of this switch tag */}
        </Switch>
        <footer className='footer'>
            <div className='back-to-top'>
                <span>Back to top</span>
            </div>
            <div className='bottom-footer'>
                <div className='get-to-know'>Get to Know the Creator
                    <li id='first'>Link to LinkedIn/Github/</li>
                    <li>Contact Information????</li>
                </div>
                <div className='footer-logo'>

                </div>
            </div>
        </footer>
    </div>
);

export default App;