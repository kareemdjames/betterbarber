import React from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase';

const User = (props) => {
    console.log('props', props)
    const user = props.user
    return (
        <div className="CurrentUser">
            <img
                className="CurrentUser--photo"
                src={ user.photoURL }
                alt={ user.displayName }
            />
            <div className="CurrentUser--identification">
                <h3 className="CurrentUser--displayName">{ user.displayName }</h3>
                <p className="CurrentUser--email">{ user.email }</p>
                <button
                    className="CurrentUser--signout"
                    onClick={() => auth.signOut()}
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.shape({
        displayName: PropTypes.string,
        email: PropTypes.string.isRequired,
        photoURL: PropTypes.string,
        uid: PropTypes.string.isRequired
    })
};

export default User;