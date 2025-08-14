# Use EAS build to create a insatllable apk for android devices

## 1. Install & Configure EAS CLI

Make sure you have the EAS CLI installed:

`npm install -g eas-cli`

Login to your Expo account:

`eas login`

## 2. Configure Your Project for EAS

Inside your project folder:

`eas build:configure`

This will create an eas.json file in your project.

Choose "**Android**" and then "**APK**" or "**AAB**" based on your need.

## 3. Set Build Type

Open `eas.json` and make sure it has something like:

```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

"**apk**" → directly installable on devices (good for testing or sideloading).

"**app-bundle**" → Google Play Store upload (AAB).

## 4. Start the Build

For an APK:

`eas build --platform android --profile preview`

For an AAB:

`eas build --platform android --profile production`

EAS will:

- Upload your project to Expo’s build servers
- Build your APK/AAB
- Give you a download link when it’s done

## 5. create the signing key (Android Keystore) for your app

**Option 1 – Yes (Recommended for most cases)**

- EAS will create and store the keystore securely for you.
- You don’t have to worry about generating it manually.
- You can later download it with:

`eas credentials`

This is the easiest route unless you already have an existing Play Store app you want to update.

✅ Choose this if:

You’re building your app for the first time.

You don’t already have a keystore from a previous release.

**Option 2 – No (Use existing keystore)**

- You’ll need to provide:
  - Keystore file (.jks)
  - Keystore password
  - Key alias
  - Key password

This is necessary if you already published an app to Google Play and want to release an update (to avoid breaking updates for existing users).

✅ Choose this if:

Your app is already on Google Play.

You must use the exact same signing key as before.

## 6. Install on Device

Once the build finishes, download the APK from the provided link and install it on your Android device (enable “Install from Unknown Sources” if needed).
