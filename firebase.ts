// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDGVRpkxU6Xn5xxH-NQswGvISBK_lpI9fg",
	authDomain: "website-abd5a.firebaseapp.com",
	projectId: "website-abd5a",
	storageBucket: "website-abd5a.appspot.com",
	messagingSenderId: "710194986880",
	appId: "1:710194986880:web:752b68604e5ee30e264b65",
	measurementId: "G-FF78DX66R0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };