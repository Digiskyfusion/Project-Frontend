import { initializeApp } from "firebase/app";
import { getToken } from "firebase/messaging";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCQGCmOKNwU7KtNGSv021WIJ7Cs2r8_by8",
  authDomain: "digisky-25d9e.firebaseapp.com",
  projectId: "digisky-25d9e",
  storageBucket: "digisky-25d9e.firebasestorage.app",
  messagingSenderId: "835432871383",
  appId: "1:835432871383:web:0861b20a9d1324571f8792",
  measurementId: "G-TGQSFXYEDF"
};


const vapidKey = "BBfXwijezQm9-3mJc6aU-aCOjHxLcToTuOSBtG4-vZsaxVe75FYyG05WkcUuHhzY7cX0HinOWngJ7zJyM3-SugQ";

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

export const requestFCMToken = async () => {
  return Notification.requestPermission()
  .then((permission) => {
    if(permission == 'granted'){
      return getToken(messaging, { vapidKey });
    }else{
      throw new Error("Notification Permission not granted");
    }
  })
  .catch((err)=>{
    console.log(err);
    throw err;
  } )
}