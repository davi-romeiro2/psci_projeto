// firebase.js
async function loadFirebaseSDK(url) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = url;
        script.onload = resolve;
        document.head.appendChild(script);
    });
}

async function initializeFirebase() {
    await loadFirebaseSDK("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
    await loadFirebaseSDK("https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js");
    await loadFirebaseSDK("https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js");

    const firebaseConfig = {
        apiKey: "AIzaSyCfXn9djVCpWZxlI2GqjfKc8lWkBMPB0zU",
        authDomain: "psicproject-8fd77.firebaseapp.com",
        projectId: "psicproject-8fd77",
        storageBucket: "psicproject-8fd77.appspot.com",
        messagingSenderId: "304151760002",
        appId: "1:304151760002:web:ec0b74ec8c576826abf89b",
        measurementId: "G-X0KPPMKEJS"
    };

    firebase.initializeApp(firebaseConfig);

    window.auth = firebase.auth();
    window.db = firebase.firestore();
    window.firebaseRef = firebase; // referência global se precisar de FieldValue

    document.dispatchEvent(new Event("firebaseReady"));
}

initializeFirebase();
