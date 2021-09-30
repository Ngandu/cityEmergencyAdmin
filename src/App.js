import "./App.css";
import Screens from "./navigation/screens";
// import firebase from "firebase/app";

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyD0s20tQdc4bDanUJlii-6tlUna8FqdH78",
//   authDomain: "cityemergency-4f19d.firebaseapp.com",
//   projectId: "cityemergency-4f19d",
//   storageBucket: "cityemergency-4f19d.appspot.com",
//   messagingSenderId: "772955228732",
//   appId: "1:772955228732:web:aec96641a2b4051a1dd139",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app(); // if already initialized, use that one
// }

function App() {
  return <Screens />;
}

export default App;
