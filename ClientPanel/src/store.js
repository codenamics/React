import { createStore, combineReducers, compose } from "redux"
import firebase from "firebase"
import "firebase/firestore"
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase"
import { reduxFirestore, firestoreReducer } from "redux-firestore"
import notifyReducer from "./reducers/notifyReducer"

const firebaseConfig = {
  apiKey: "AIzaSyAZBZh8EuCyX7G2db_Ednzw7RJubLy5iag",
  authDomain: "clientpanel-84706.firebaseapp.com",
  databaseURL: "https://clientpanel-84706.firebaseio.com",
  projectId: "clientpanel-84706",
  storageBucket: "clientpanel-84706.appspot.com",
  messagingSenderId: "240828658491",
}

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
}

//Init firebase instance
firebase.initializeApp(firebaseConfig)
//Init firestore instance
const firestore = firebase.firestore()

const settings = {
  timestampsInSnapshots: true,
}
firestore.settings(settings)

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore)

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
})

const initialState = {}

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
export default store
