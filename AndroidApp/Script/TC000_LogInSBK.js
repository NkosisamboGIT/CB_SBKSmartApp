var DDTDriver = require("DDTDriver");
      // Creates a driver
 // DDT.ExcelDriver("C:\\Users\\Nkosi\\OneDrive - CloudBadger Pty Ltd\\Documents\\TestComplete 15 Projects\\SAppProject\\CBSmartApp.xlsx","LoginDetails");
 // DDT.CurrentDriver.DriveMethod("TC1_LogInSBK.TC1_LogInSBK");

function TC000_LogInSBK()
{
   // Opening the SmartApp/seting up the SmartApp
  Mobile.SetCurrent("SM-G965F"); 
   // Delay for 10 seconds
  aqUtils.Delay(5000)
  ImageRepository.android_app_launcher.TextView_Unayo.Touch();
  aqUtils.Delay(10000)
  ImageRepository.standardbank.EditText_PIN.Touch(264, 52);
  
  // Declaring the variable that will be used to pass the value
  var loginSmartApp = DDTDriver.getLoginByRow(2)
  
  aqUtils.Delay(500)
  Mobile.Device().Keys(loginSmartApp.Username);
 // Mobile.Device().Keys(DDT.CurrentDriver.Value("PIN")); // Entering the PIN
  Mobile.Device().Touch(838, 2153); // touch anywhere to hide the keyboard
  ImageRepository.standardbank.View_UnnamedCtrl2.Touch(538, 95);
  
  //DDT.CloseDriver("PIN");
  
 //Login message
 Log.Message("Logged in Successfully on the SmartApp");
  }


module.exports.TC000_LogInSBK = TC000_LogInSBK;