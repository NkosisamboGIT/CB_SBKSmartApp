var DDTDriver = require("DDTDriver");
      // Creates a driver
 // DDT.ExcelDriver("C:\\Users\\Nkosi\\OneDrive - CloudBadger Pty Ltd\\Documents\\TestComplete 15 Projects\\SAppProject\\CBSmartApp.xlsx","LoginDetails");
 // DDT.CurrentDriver.DriveMethod("TC1_LogInSBK.TC1_LogInSBK");

function TC000_LogInSBK()
{
   // Opening the SmartApp/seting up the SmartApp
  Mobile.SetCurrent("emulator-5554"); 
   // Delay for 10 seconds
  aqUtils.Delay(5000)
    ImageRepository.android_apps_nexuslauncher.TextView_Unayo.Touch();
//  aqUtils.Delay(10000)
//   editText.Touch(89, 46);
//  //OCR.Recognize(editText).BlockByText("PIN").Touch();
//  
//  // Declaring the variable that will be used to pass the value
//  
//  aqUtils.Delay(500)
//  Mobile.Device().Keys(loginSmartApp.Username);
// // Mobile.Device().Keys(DDT.CurrentDriver.Value("PIN")); // Entering the PIN
//  Mobile.Device().Touch(838, 2153); // touch anywhere to hide the keyboard
//  OCR.Recognize(Mobile.Device()).BlockByText("Login").Touch();
//  
//  //DDT.CloseDriver("PIN");
//  
// //Login message
// Log.Message("Logged in Successfully on the SmartApp");
 }


module.exports.TC000_LogInSBK = TC000_LogInSBK;

