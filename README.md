# Examples of Firebase Hosting

This are some basic examples of things you can do with [Firebase Hosting](https://firebase.google.com/docs/hosting/).

## Instructions

To run any of the examples follow the general instructions: 

- Go to Firebase Console and create a new app.
- Run `firebase login` (if it is the first time).
- Edit the `<example-name>/.firebaserc` and put your app name.
- Run `firebase deploy`.

### Example 1: Simple deploy

- Break something, and run `firebase deploy` again.
- Check that the site is broken.
- Go to Console >> Hosting, select previous verstion and restore it.
- Go to the site and check that is running the previous version.

### Example 2: Headers: Redirects, Rewrites & HTTP2 Push

- Go to the app URL. Check that the image is cached for 7200 seconds. And the `*.js`, `*.css` are send via HTTP2 Push.
- Go to `/home-rewrite`. This shows the same content as `/` with a different URL.
- Go to `/home-redirect`. This redirects you to `/` with `301` HTTP code.

### Example 3: Dynamic Content

- Edit the `assets/scripts/index.js` with the URL of your app. And run `firebase deploy`.
- Go to the app URL.
- Type something and hit the button. A MD5 hash is generated on the server and shown in an alert popup.
- Go to `<app-name>/token?email=email1@example.com` and check that the MD5 hash comes from the server. 
