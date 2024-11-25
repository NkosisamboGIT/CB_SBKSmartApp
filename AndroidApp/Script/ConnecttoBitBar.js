function ConnecttoBitBar()
{
  var capabilities = {
    "autoGrantPermissions": true,
    "appPackage": "com.cloudbadger.standardbank",
    "appActivity": "crc64bdac1fab992d0e8d.SplashScreen",
    "platformName": "ANDROID", 
    "bitbar:target": "android", 
    "bitbar:findDevice": "true", 
    "bitbar:multiSessionWait": "60", 
    "bitbar:device": "Google Pixel 3a Android 12", 
    "deviceName": "Google Pixel 3a Android 12", 
    "automationName": "UiAutomator2", 
    "bitbar:app": "232824667"
  };
  var server = "https://eu-mobile-hub.bitbar.com/wd/hub";
  Mobile.ConnectDevice(server, capabilities, 600);
  
  // Actions
  let device = Aliases.Device;
  Delay(20000)
  //Aliases.Device.processSecAndroidAppLauncher.textViewAppsIcon.Touch();

}
test