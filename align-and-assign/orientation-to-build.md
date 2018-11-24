## BUILD COMMANDS IONIC
$ ionic cordova build ios

$ ionic cordova build ios --prod --release

$ ionic cordova build ios --device --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --packageType="app-store"

$ ionic cordova build android

$ ionic cordova build android --prod --release -- -- --keystore=filename.keystore --alias=myalias

$ ionic cordova build android --prod --release -- -- --minSdkVersion=21

$ ionic cordova build android --prod --release -- -- --versionCode=55

$ ionic cordova build android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true
##
## OPTIONS BUILD COMMANDS IONIC
--no-build	-> Do not invoke an Ionic build

--prod -> Build the application for production

--aot -> Perform ahead-of-time compilation for this build

--minifyjs -> Minify JS for this build

--minifycss	-> Minify CSS for this build

--optimizejs	-> Perform JS optimizations for this build

--debug	-> Create a Cordova debug build

--release -> Create a Cordova release build

--device -> Create a Cordova build for a device

--emulator -> Create a Cordova build for an emulator

--buildConfig -> Use the specified Cordova build configuration
##

## COMMANDS TO ALIGN EM ASSIGN RESPECTIVELY
zipalign -v -p 4 my-app-unsigned.apk my-app-unsigned-aligned.apk

apksigner sign --ks my-release-key.jks --out my-app-release.apk my-app-unsigned-aligned.apk
##