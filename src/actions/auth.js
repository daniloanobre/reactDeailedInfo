import { firebase, googleAuthProvider } from "../firebase/firebase";
import { callbackify } from "util";

export const login = uid => ({
  type: "LOGIN",
  uid
});

export const startLogin = e => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startSignin = formProps => {
  const { email, password } = formProps;
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        callback();
      })
      .catch(e => {
        dispatch({ type: "ERROR", errorMessage: e.message });
      });
  };
};

export const startSignup = formProps => {
  const { email, password } = formProps;

  return dispatch => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        callback();
      })
      .catch(e => {
        dispatch({ type: "ERROR", errorMessage: e.message });
      });
  };
};

export const error = erroMessage => ({ type: "ERROR", erroMessage });

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
