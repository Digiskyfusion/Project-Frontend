importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyCQGCmOKNwU7KtNGSv021WIJ7Cs2r8_by8",
  authDomain: "digisky-25d9e.firebaseapp.com",
  projectId: "digisky-25d9e",
  storageBucket: "digisky-25d9e.firebasestorage.app",
  messagingSenderId: "835432871383",
  appId: "1:835432871383:web:0861b20a9d1324571f8792",
  measurementId: "G-TGQSFXYEDF"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png', // optional
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
