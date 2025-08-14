async function loadFirebaseSDK(url) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = url;
        script.onload = resolve;
        document.head.appendChild(script);
    });
}

async function initializeFirebase() {
    await loadFirebaseSDK("https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js");
    await loadFirebaseSDK("https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js");
    await loadFirebaseSDK("https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js");

    const firebaseConfig = {
        apiKey: "AIzaSyCfXn9djVCpWZxlI2GqjfKc8lWkBMPB0zU",
        authDomain: "psicproject-8fd77.firebaseapp.com",
        projectId: "psicproject-8fd77",
        storageBucket: "psicproject-8fd77.firebasestorage.app",
        messagingSenderId: "304151760002",
        appId: "1:304151760002:web:ec0b74ec8c576826abf89b",
        measurementId: "G-X0KPPMKEJS"
    };

    firebase.initializeApp(firebaseConfig);
    window.auth = firebase.auth();
    window.db = firebase.firestore();

    // avisa que Firebase está pronto
    document.dispatchEvent(new Event("firebaseReady"));
}

initializeFirebase();
