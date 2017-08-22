importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-database.js')
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js')



// ON NOTIFICATION CLICK
self.addEventListener('notificationclick', event => {
    console.log(event)

    event.notification.close()

    event.waitUntil(
        self.clients.openWindow('https://push.artofmyself.com')
    )
})


firebase.initializeApp({
    apiKey: "AIzaSyCNWf72UrEdxbzu1YnW4Yd3zfzQIKtXl94",
    authDomain: "push-test-75834.firebaseapp.com",
    databaseURL: "https://push-test-75834.firebaseio.com",
    projectId: "push-test-75834",
    storageBucket: "push-test-75834.appspot.com",
    messagingSenderId: "858712102689"
})

const messaging = firebase.messaging()
