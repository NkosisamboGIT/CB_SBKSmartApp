function Test()
{
  var capabilities = {
    "appActivity": "com.android.permissioncontroller.permission.ui.GrantPermissionsActivity", 
    "appPackage": "com.google.android.permissioncontroller", 
    "autoGrantPermissions": "true", 
    "automationName": "UiAutomator2", 
    "bitbar_app": "232824667", 
    "bitbar_device": "Google Pixel 6 Pro 5G -US", 
    "bitbar_findDevice": "true", 
    "bitbar_multiSessionWait": "60", 
    "bitbar_target": "android", 
    "deviceName": "Google Pixel 6 Pro 5G -US", 
    "platformName": "ANDROID"
  };
  var server = "https://eu-mobile-hub.bitbar.com/wd/hub";
  Mobile.ConnectDevice(server, capabilities, 600);
  
  Delay(20000)
  
}