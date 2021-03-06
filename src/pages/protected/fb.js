
export function init(firebase) {
	// body...
      // Your web app's Firebase configuration
      if (firebase.apps.length) return;

	  var firebaseConfig = {
	    apiKey: "AIzaSyAOP_MeUsh8GcZ6EYmGEha7qGU2zyDux0M",
	    authDomain: "auth-4e0df.firebaseapp.com",
	    databaseURL: "https://auth-4e0df.firebaseio.com",
	    projectId: "auth-4e0df",
	    storageBucket: "auth-4e0df.appspot.com",
	    messagingSenderId: "980511748555",
	    appId: "1:980511748555:web:287179239e2c08e2"
	  };
	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);
}

export function init_ui(firebase,firebaseui,eid,loader_eid) {
		var ui = new firebaseui.auth.AuthUI(firebase.auth());

    var uiConfig = {
        callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById(loader_eid).style.display = 'none';
        }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '.',
        signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.
        tosUrl: '.',
        // Privacy policy url.
        privacyPolicyUrl: '.',
    };
    // The start method will wait until the DOM is loaded.
    ui.start(eid, uiConfig);
}