function ConnecttoBitBar()
{
  var capabilities = {
  "platformName": "ANDROID", 
  "bitbar_target": "android", 
  "bitbar_findDevice": "true", 
  "bitbar_multiSessionWait": "60", 
  "bitbar_device": "Samsung Galaxy S9+ SM-G965F", 
  "deviceName": "Samsung Galaxy S9+ SM-G965F", 
  "automationName": "UiAutomator2", 
  "bitbar_app": "232824667"
};
var server = "https://eu-mobile-hub.bitbar.com/wd/hub";
Mobile.ConnectDevice(server, capabilities);
}
