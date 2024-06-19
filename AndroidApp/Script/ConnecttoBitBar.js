function ConnecttoBitBar()
{
  var capabilities = {
  "autoGrantPermissions": "true",
  "appActivity": "com.android.permissioncontroller.permission.ui.GrantPermissionsActivity",
  "appPackage": "com.google.android.permissioncontroller",
  "platformName": "ANDROID", 
  "bitbar_target": "android", 
  "bitbar_findDevice": "true", 
  "bitbar_multiSessionWait": "60", 
  "bitbar_device": "Google Pixel 3a Android 12", 
  "deviceName": "Google Pixel 3a Android 12", 
  "automationName": "UiAutomator2", 
  "bitbar_app": "232824667"
//    "autoGrantPermissions": "true",
//    "appActivity": "com.android.permissioncontroller.permission.ui.GrantPermissionsActivity",
//    "appPackage": "com.google.android.permissioncontroller"
  };
  var server = "https://eu-mobile-hub.bitbar.com/wd/hub";
  Mobile.ConnectDevice(server, capabilities, 600);
  
  let device = Aliases.Device;
  device.processGoogleAndroidAppsNexuslauncher.scrollViewWorkspace.textView.Touch();
  let processCloudbadgerStandardbank = device.Process_cloudbadger_standardbank;
  let viewGroup = processCloudbadgerStandardbank.viewGroup;
  viewGroup.Touch();
  viewGroup.Touch();
  viewGroup.Touch();
  viewGroup.Touch();
  viewGroup = processCloudbadgerStandardbank.viewGroup2;
  viewGroup.Touch();
  viewGroup.Touch();
}

//
//function ConnecttoBitBar()
//{
// var capabilities = {
//  "platformName": "ANDROID", 
//  "bitbar_target": "android", 
//  "bitbar_findDevice": "true", 
//  "bitbar_multiSessionWait": "60", 
//  "bitbar_device": "Samsung Galaxy S9+ SM-G965F", 
//  "deviceName": "Samsung Galaxy S9+ SM-G965F", 
//  "automationName": "UiAutomator2", 
//  "bitbar_app": "232824667",
//  "autoGrantPermissions": "true",
//  "appActivity": "com.android.permissioncontroller.permission.ui.GrantPermissionsActivity",
//  "appPackage": "com.google.android.permissioncontroller"
//
//};
//var server = "https://eu-mobile-hub.bitbar.com/wd/hub";
//Mobile.ConnectDevice(server, capabilities);
//}var capabilities = {
