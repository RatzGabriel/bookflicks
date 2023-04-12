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
      <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
        <button
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2"
          onClick={() => {
            auth.signOut(), dispatch(setUser(null));
          }}
        >
          Sign Out
        </button>
      </div>
    )
  );
}

function SignIn() {
  const dispatch = useDispatch();
  return (
    <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
      <button
        onClick={() => Login(dispatch)}
        type="button"
        className="block px-6 py-2 text-center text-white bg-red-400 rounded-md"
      >
        <p className="block px-6 py-2 text-center text-white bg-red-400 rounded-md">
          Sign in with Google
        </p>
      </button>
    </div>
  );
}

export { SignIn, SignOut, auth, app };
