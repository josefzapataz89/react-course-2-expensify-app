// Higher Order Component (HOC) - A component (HOC) that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: { props.info }</p>
    </div>
);

const withAdminWarning = ( WrappedComponent ) => {
    return ( props ) => (
        <div>
            { props.isAdmin && <p>This is a private Info, Please don't share.</p> }
            <WrappedComponent { ...props }/>
        </div>
    );
};

const requireAuthentication = ( WrappedComponent ) => {
    return ( props ) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>please LogIn to view the Info</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
    <AuthInfo isAuthenticated={true} info="there are the Details." />,
    document.getElementById('app')
);