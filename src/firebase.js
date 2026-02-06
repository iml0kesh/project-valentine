import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics"; // Added logEvent here

const firebaseConfig = {
    apiKey: "AIzaSyB0YDBgtUX6GOWjf14wUfyZH3bgrsH7tzA",
    authDomain: "project-valentine-c13d8.firebaseapp.com",
    projectId: "project-valentine-c13d8",
    storageBucket: "project-valentine-c13d8.firebasestorage.app",
    messagingSenderId: "198667630402",
    appId: "1:198667630402:web:01502e3b1ecc2ec984fadb",
    measurementId: "G-GS5YRMLH8F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const trackLoveEvent = (eventName, params = {}) => {
    // Adding debug_mode so you can see it in Firebase DebugView instantly
    logEvent(analytics, eventName, { ...params, debug_mode: true });
};