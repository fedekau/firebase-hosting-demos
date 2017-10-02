# Ember Fastboot on Firebase Hosting

## Build steps

```bash
git clone https://github.com/davideast/ember-fastboot-firebase-hosting
firebase use --add # add your own firebase project
npm run build:client
npm run build:server
npm run clean
cd functions
firebase deploy
```