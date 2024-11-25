var DDTDriver = require("DDTDriver");
      // Creates a driver
 // DDT.ExcelDriver("C:\\Users\\Nkosi\\OneDrive - CloudBadger Pty Ltd\\Documents\\TestComplete 15 Projects\\SAppProject\\CBSmartApp.xlsx","LoginDetails");
 // DDT.CurrentDriver.DriveMethod("TC1_LogInSBK.TC1_LogInSBK");

// this is the change



function TC000_LogInSBK()
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
  
  Delay(20500)
  let processCloudbadgerStandardbank = Aliases.Device.Process_cloudbadger_standardbank;
  let scrollView = processCloudbadgerStandardbank.scrollView;
  scrollView.imageView2.Touch();
  processCloudbadgerStandardbank.viewLoginButton.Touch();
  processCloudbadgerStandardbank.scrollView2.textView2.Touch();
  scrollView.editText.Touch();
  let viewGroup = scrollView.viewGroup5;
  viewGroup.Touch();
  processCloudbadgerStandardbank.viewGroup3.Touch();
  viewGroup.Touch();
  viewGroup.Touch();
  viewGroup.Touch();
  viewGroup.Touch();
  viewGroup.Touch();
  viewGroup.Touch();
  viewGroup.Touch();
  viewGroup.Touch();
  viewGroup.Touch();
  viewGroup.Touch();
  viewGroup.Touch();
  viewGroup.Touch();
  processCloudbadgerStandardbank.viewNextButton2.Touch();
  
  Aliases.Device.processGoogleAndroidAppsNexuslauncher.scrollViewWorkspace.textView.Touch();

//   // Opening the SmartApp/seting up the SmartApp
//  Mobile.SetCurrent("emulator-5554"); 
//   // Delay for 10 seconds
//  aqUtils.Delay(5000)
//    ImageRepository.android_apps_nexuslauncher.TextView_Unayo.Touch();
  aqUtils.Delay(10000)
   //editText.Touch(89, 46);
  OCR.Recognize(editText).BlockByText("PIN").Touch();
  OCR.Recognize(editText).BlockByText("PIN").SendKeys(55640);
  
  // Declaring the variable that will be used to pass the value
  
  aqUtils.Delay(500)
  Mobile.Device().Keys(loginSmartApp.Username);
 // Mobile.Device().Keys(DDT.CurrentDriver.Value("PIN")); // Entering the PIN
  Mobile.Device().Touch(838, 2153); // touch anywhere to hide the keyboard
  OCR.Recognize(Mobile.Device()).BlockByText("Login").Touch();
  
  //DDT.CloseDriver("PIN");
  
 //Login message
 Log.Message("Logged in Successfully on the SmartApp");
 }


module.exports.TC000_LogInSBK = TC000_LogInSBK;

