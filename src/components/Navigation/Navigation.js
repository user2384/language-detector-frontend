import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange, signed}) => {
    if (!signed) {
        return (
            <nav className="dt w-100 border-box pa3 ph5-ns fixed add-z">
                <div className="dtc v-mid w-75 tr ">
                    <p onClick={() => onRouteChange('signin')} className="white link dim f6 f5-ns dib mr3 mr4-ns b">Sign in</p>
                    <p onClick={() => onRouteChange('register')} className="white link dim f6 f5-ns dib mr3 mr4-ns b">Register</p>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="dt w-100 border-box pa3 ph5-ns fixed add-z">
                <div className="dtc v-mid w-75 tr ">
                    <p onClick={() => onRouteChange('signout')} className="white link dim f6 f5-ns dib mr3 mr4-ns b">Sign out</p>
                </div>
            </nav>
        )
    }
}

export default Navigation;

//<p className="white link dim f6 f5-ns dib mr3 mr4-ns ">Register</p>