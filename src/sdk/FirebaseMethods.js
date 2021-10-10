import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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
  try {
    const db = firebase.firestore();
    const querySnapshot = await db.collection("users").get();

    let temp = [];
    querySnapshot.forEach((doc) => {
      //console.log(doc.id);
      temp.push({ id: doc.id, ...doc.data() });
    });

    // console.log(temp);
    return temp;
  } catch (error) {
    console.log(error);
  }
}

/*
  Incedents
*/

// new incedents

export async function getNewIncedents() {
  try {
    const db = firebase.firestore();
    const querySnapshot = await db
      .collection("incedents")
      .where("status", "==", "Open")
      .get();

    let temp = [];
    querySnapshot.forEach((doc) => {
      //console.log(doc.id);
      temp.push({ id: doc.id, ...doc.data() });
    });

    return temp;
  } catch (error) {
    console.log(error);
  }
}
