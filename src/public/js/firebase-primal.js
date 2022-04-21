// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getStorage, ref, getDownloadURL} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABNsUpFyxJ8LALPJJaMKip6yVht-wZUhc",
  authDomain: "fir-storage-primal.firebaseapp.com",
  projectId: "fir-storage-primal",
  storageBucket: "fir-storage-primal.appspot.com",
  messagingSenderId: "162539405734",
  appId: "1:162539405734:web:9c1ad2c1bcc57631aa4f67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create a reference with an initial file path and name
const storage = getStorage();
const pathReference = ref(storage, 'apps/Looper - Setup.exe');

// Create a reference from a Google Cloud Storage URI
const gsReference = ref(storage, 'gs://fir-storage-primal.appspot.com/apps');

// Create a reference from an HTTPS URL
// Note that in the URL, characters are URL escaped!
const httpsReference = ref(storage, 'https://firebasestorage.googleapis.com/v0/b/fir-storage-primal.appspot.com/o/apps%2FLooper%20-%20Setup.exe?alt=media&token=d5bd1162-5c68-4038-9b2a-b84b09a242ee');  
  
  const starsRef = ref(storage, pathReference);
// Create a reference to the file we want to download
  // Get the download URL
  getDownloadURL(starsRef)
    .then((url) => {
      // Insert url into an <img> tag to "download"
      // `url` is the download URL for 'images/stars.jpg'
      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      // xhr.send();

      // Or inserted into an <img> element
      

      const enlace = document.querySelector("#refer");
      enlace.setAttribute('href', url);
    })
    .catch((error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;

        // ...

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });