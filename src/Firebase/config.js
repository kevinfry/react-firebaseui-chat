import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyDTLBEJkps8iDRWWQxcavcPlJhzY8mGQ4w",
  authDomain: "ticket-snatchers-3e50a.firebaseapp.com",
  databaseURL: "https://ticket-snatchers-3e50a.firebaseio.com",
  projectId: "ticket-snatchers-3e50a",
  storageBucket: "ticket-snatchers-3e50a.appspot.com",
  messagingSenderId: "413108406408",
  appId: "1:413108406408:web:005ebc082009b432eef73d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;
