import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfV9KL2_0KA91GEAzwnMc3-QOWKhEmh8g",
  authDomain: "fortunusvision-a560b.firebaseapp.com",
  projectId: "fortunusvision-a560b",
  storageBucket: "fortunusvision-a560b.appspot.com",
  messagingSenderId: "1054263352598",
  appId: "1:1054263352598:web:9c343822d33502bbd1c437",
  measurementId: "G-993K3XG8HR",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
