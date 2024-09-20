function ConnecttoBitBar()
{
  var capabilities = {
    "autoGrantPermissions": true,
    "appPackage": "com.cloudbadger.standardbank",
    "appActivity": "crc64bdac1fab992d0e8d.SplashScreen",
    "automationName": "UiAutomator2", 
    "bitbar_app": "232824667", 
    "bitbar_device": "Samsung Galaxy S22 SM-S901U1 -US", 
    "bitbar_findDevice": "true", 
    "bitbar_multiSessionWait": "60", 
    "bitbar_target": "android", 
    "deviceName": "Samsung Galaxy S22 SM-S901U1 -US", 
    "platformName": "ANDROID"
  };
  var server = "https://eu-mobile-hub.bitbar.com/wd/hub";
  Mobile.ConnectDevice(server, capabilities, 600);
  
  // Actions
  let device = Aliases.Device;
  Delay(20000)
  //Aliases.Device.processSecAndroidAppLauncher.textViewAppsIcon.Touch();

}

// testing Github