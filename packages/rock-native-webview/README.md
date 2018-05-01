
# react-native-web-view

## Getting started

`$ npm install react-native-web-view --save`

### Mostly automatic installation

`$ react-native link react-native-web-view`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-web-view` and add `RNWebView.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNWebView.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNWebViewPackage;` to the imports at the top of the file
  - Add `new RNWebViewPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-web-view'
  	project(':react-native-web-view').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-web-view/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-web-view')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNWebView.sln` in `node_modules/react-native-web-view/windows/RNWebView.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Web.View.RNWebView;` to the usings at the top of the file
  - Add `new RNWebViewPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNWebView from 'react-native-web-view';

// TODO: What to do with the module?
RNWebView;
```
  