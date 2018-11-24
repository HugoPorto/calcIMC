## GENERATION FINAL BUILD PRODUCTION
###### - NEED BY EXECYTED IN FOLDER apk_build
- [1] $ionic cordova build android --prod --release --minSdkVersion=20 --versionCode=1
- [2] $zipalign -v -p 4 app-release-unsigned.apk salmos-release-unsigned-aligned.apk
- [3] $apksigner sign --ks bible-psalms-release-key.jks --out salmos.apk salmos-release-unsigned-aligned.apk
######
##