// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { setUser } from '../userSlice';
import { useDispatch } from 'react-redux';
import { clearFavorites } from '../favoritesSlice';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.firebase_key}`,
  authDomain: `${process.env.authDomain}`,
  projectId: 'bookflix-4892d',
  storageBucket: 'bookflix-4892d.appspot.com',
  messagingSenderId: '833962837938',
  appId: '1:833962837938:web:b3a3cc1495d1b8023646ab',
  measurementId: 'G-5CBMEPBL54',
};
console.log(process.env.authDomain);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function Login(dispatch) {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('user', user);

      dispatch(setUser(user));
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

function SignOut() {
  const dispatch = useDispatch();
  return (
    auth.currentUser && (
      <div className="px-6 sm:px-0 w-full mx-2">
        <button
          onClick={() => {
            auth.signOut(), dispatch(setUser(null));
          }}
          type="button"
          className="text-white w-full  bg-[#d62222] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55"
        >
          <svg
            className="ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign Out<div></div>
        </button>
      </div>
    )
  );
}

function SignIn() {
  const dispatch = useDispatch();
  return (
    <div className="px-6 sm:px-0 w-full">
      <button
        onClick={() => Login(dispatch)}
        type="button"
        className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mx-2"
      >
        <svg
          className="mr-2 -ml-1 w-4 h-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        Sign in with Google<div></div>
      </button>
    </div>
    // <div classNameName="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
    //   <button
    //     onClick={() => Login(dispatch)}
    //     type="button"
    //     classNameName="block px-6 py-2 text-center text-white bg-red-400 rounded-md"
    //   >
    //     <p classNameName="block px-6 py-2 text-center text-white bg-red-400 rounded-md">
    //       Sign in with Google
    //     </p>
    //   </button>
    // </div>
  );
}

export { SignIn, SignOut, auth, app };
