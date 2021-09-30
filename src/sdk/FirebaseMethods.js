import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export async function registration(
  email,
  password,
  lastName,
  firstName,
  cellphone,
  dob,
  occupation
) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();

    db.collection("users").doc(currentUser.uid).set({
      email: currentUser.email,
      lastName: lastName,
      firstName: firstName,
      cellphone: cellphone,
      dob: dob,
      occupation: occupation,
      userid: currentUser.uid,
    });
  } catch (err) {
    alert("There is something wrong!!!!", err.message);
  }
}

export async function usersList() {
  console.log("usersList");
}
