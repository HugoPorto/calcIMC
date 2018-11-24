## GENERAL OBSERVATIONS
In general, it is necessary to execute three commands to align and sign the APK after it has already been generated, but the whole is four, including generation, which is mentioned in the article referring to this action, within this file.
##

## ABSTRACT BUILD
- [1] $ionic cordova build android --prod --release --minSdkVersion=19 --versionCode=1
- [2] $keytool -genkey -v -keystore bible-psalms-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias psalms-application
- [3] zipalign -v -p 4 app-release-unsigned.apk app-release-unsigned-aligned.apk
- [4] apksigner sign --ks harpia-release-key.jks --out HarpiaApp-release.apk app-release-unsigned-aligned.apk
##
