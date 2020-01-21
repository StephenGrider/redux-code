import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const GoogleAuth = ({ signIn, signOut, isSignedIn }) => {
  const [auth, setAuth] = useState(null);

  const onAuthChange = isSignedIn => {
    if (isSignedIn) {
      signIn(auth.currentUser.get().getId());
    } else {
      signOut();
    }
  };

  useEffect(() => {
    if (!auth) {
      return;
    }

    onAuthChange(auth.isSignedIn.get());
    auth.isSignedIn.listen(onAuthChange);
  }, [auth]);

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          setAuth(window.gapi.auth2.getAuthInstance());
        });
    });
  }, []);

  if (isSignedIn === null) {
    return null;
  } else if (isSignedIn) {
    return (
      <button onClick={() => auth.signOut()} className="ui red google button">
        <i className="google icon" />
        Sign Out
      </button>
    );
  } else {
    return (
      <button onClick={() => auth.signIn()} className="ui red google button">
        <i className="google icon" />
        Sign In with Google
      </button>
    );
  }
};

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
