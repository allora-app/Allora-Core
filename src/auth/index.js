import * as firebase from 'firebase';

export const login = async (email, pwd) => {
  return await firebase.auth().signInWithEmailAndPassword(email, pwd);
};

export const logout = async () => {
  return await firebase.auth().signOut();
};

export const createUser = async (email, pwd) => {
  return await firebase.auth().createUserWithEmailAndPassword(email, pwd);
};

export const getCurrentUser = () => {
  return firebase.auth().currentUser || {};
};

export const onChange = handler => {
  firebase.auth().onAuthStateChanged(handler);
};
