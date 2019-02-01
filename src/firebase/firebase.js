import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyAqoqBE5O_etUXIbph-006ip4DHhDNyWLE",
    authDomain: "expenses-73cea.firebaseapp.com",
    databaseURL: "https://expenses-73cea.firebaseio.com",
    projectId: "expenses-73cea",
    storageBucket: "expenses-73cea.appspot.com",
    messagingSenderId: "755394546538"
  };

  firebase.initializeApp(config);

  const database = firebase.database()

  database.ref().set({
      name: 'AlexGram',
      age: 32,
      isSingle: false,
      location: {
          city: 'Odessa',
          country: "UA"
      },
      workDays: [2,6,8,9]

  })

  database.ref('personData').set({height: 180, weight: 75});