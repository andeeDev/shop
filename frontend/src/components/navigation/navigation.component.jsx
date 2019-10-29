import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import FacebookLogin  from 'react-facebook-login';
import GoogleLogin  from 'react-google-login';
import './Navigation.styles.scss';
import sendToken from "../../services/Login";

class Navigation extends Component {

    responseFacebook =  (response) => {
        const  {accessToken } = response;
        localStorage.setItem('ftoken', accessToken);
        sendToken({token: accessToken, name:response.name});
    };

    responseGoogle =  (response) => {
        if((response.hasOwnProperty('error'))){
            console.log("error");
        }else {
            const {accessToken} = response;
            localStorage.setItem('gtoken', accessToken);
            const res = sendToken({token: accessToken, name: response.profileObj.name})
        }
    };


    render() {
        return (
            <nav className="App-nav">
                <Link to={'/cart'}>
                    <Button className={'App-list-item App-list-cart'} variant="outlined" color="primary">
                        Cart
                    </Button>
                </Link>
                <div className='hoverable'>
                <Button className={'register-button'} variant="outlined" color="primary">
                    Register
                </Button>
                <div className='block-with-reg-buttons'>
                    <FacebookLogin
                        appId="3031270550346971"
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                    />

                    <GoogleLogin
                        onSuccess={this.responseGoogle}
                        clientId='905506068962-ulm3un04fdhu4ta74ub6f6qo8jsmv9j4.apps.googleusercontent.com'
                        onFailure={this.responseGoogle}
                    />
                </div>

                </div>
            </nav>
        );
    }
}

export default Navigation;
