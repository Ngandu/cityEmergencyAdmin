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

// Update incedent

export async function updateIncedents(inc) {
  let id = inc.id;
  let newInc = { ...inc };
  delete newInc.id;
  try {
    const db = firebase.firestore();
    await db.collection("incedents").doc(id).update(newInc);
    return true;
  } catch (error) {
    console.log(error);
  }
}

/*
  response to incedents
*/

export async function sendresponse(resp) {
  try {
    const db = firebase.firestore();
    await db.collection("responses").add(resp);
    return true;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

// fetch responses

export async function fetchresponses(id) {
  try {
    const db = firebase.firestore();

    const querySnapshot = await db
      .collection("responses")
      .orderBy("respnsetime", "desc")
      .where("incedentId", "==", id)
      .get();

    let temp = [];
    querySnapshot.forEach((doc) => {
      //console.log(doc.id);
      temp.push({ id: doc.id, ...doc.data() });
    });

    return temp;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

/*
  Service Providers

*/

export async function fetchserviceProviders(service) {
  try {
    const db = firebase.firestore();

    const querySnapshot = await db
      .collection("serviceProvider")
      .where("service", "==", service)
      .where("serviceStatus", "==", "available")
      .get();

    let temp = [];
    querySnapshot.forEach((doc) => {
      //console.log(doc.id);
      temp.push({ id: doc.id, ...doc.data() });
    });

    return temp;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}
