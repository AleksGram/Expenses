import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export  { firebase, database as default };


// database.ref()
//     .once('value')
//     .then((data) => {
//         console.log(data.val())
//     }).catch((e) => {
//         console.log('Failed', e);
//     });

// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} from ${data.location.city} he is ${data.personData.height} cm `)
// }, (e) => {
//     console.log('Failed fetching data', e);
// })

// database.ref().on('child_removed', (snapshot) => {
//     console.log('Deleted ', snapshot.key, snapshot.val());
// })

// database.ref().on('child_changed', (snapshot) => {
//     console.log('Changed ', snapshot.key, snapshot.val());
// })

// database.ref().on('child_added', (snapshot) => {
//     console.log('Added ', snapshot.key, snapshot.val());
// })

//   database.ref().set({
//       name: 'AlexGram',
//       age: 32,
//       isSingle: false,
//       location: {
//           city: 'Odessa',
//           country: "UA"
//       },
//       workDays: [2,6,8,9]

//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((e) => {
//       console.log('Failed', e);
//   })

//   database.ref('personData').set({height: 180, weight: 75});
//   database.ref().update({
//       age: 30,
//       'location/city': 'Kyiv'
//   }).then(() => {
//     console.log('Data is updated');
// }).catch((e) => {
//     console.log('Failed update', e);
// })