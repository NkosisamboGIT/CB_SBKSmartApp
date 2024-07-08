function ConnecttoBitBar()
{

  var capabilities = {
    "appActivity": "com.android.permissioncontroller.permission.ui.GrantPermissionsActivity", 
    "appPackage": "com.google.android.permissioncontroller", 
    "autoGrantPermissions": "true", 
    "platformName": "ANDROID", 
    "bitbar_target": "android", 
    "bitbar_findDevice": "true", 
    "bitbar_multiSessionWait": "60", 
    "bitbar_device": "Google Pixel 6 Pro 5G -US", 
    "deviceName": "Google Pixel 6 Pro 5G -US", 
    "automationName": "UiAutomator2", 
    "bitbar_app": "232824667"
  };
  var server = "https://eu-mobile-hub.bitbar.com/wd/hub";
  Mobile.ConnectDevice(server, capabilities, 600);
  Aliases.Device.processGoogleAndroidAppsNexuslauncher.scrollViewWorkspace.textView.Touch();
}


