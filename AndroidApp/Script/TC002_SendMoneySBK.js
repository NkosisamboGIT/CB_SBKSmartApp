var DDTDriver = require("DDTDriver");
function TC002_SendMoneySBK()
{
  Delay(5000)
  ImageRepository.standardbank.ViewGroup_UnnamedCtrl7.Touch(113, 201); // send money
  ImageRepository.standardbank.EditText_Please_ent.Touch(214, 66);
  Delay(3093);
  
  // Declaring the variable that will be used to pass the value
  var SendMoneyMV = DDTDriver.getSendMoneyByRow(2)
  
  Mobile.Device().Keys(SendMoneyMV.SendMoney);
  OCR.Recognize(Mobile.Device()).BlockByText("0.00").Touch(); // enter the value
  Delay(1890);
  Mobile.Device().Keys(SendMoneyMV.Value);
  Mobile.Device().Touch(838, 2153);// touch anywhere to hide the keyboard
  ImageRepository.standardbank.CheckBox_UnnamedCtrl.Touch();
  ImageRepository.standardbank.View_UnnamedCtrl5.Touch(567, 87);
  ImageRepository.standardbank.View_UnnamedCtrl5.Touch(565, 89);
  Delay(5000);
//  ImageRepository.standardbank.View_UnnamedCtrl6.Touch(225, 96);
//  Delay(1890);
//  ImageRepository.standardbank.View_UnnamedCtrl7.Touch(543, 89);
  OCR.Recognize(Mobile.Device()).BlockByText("Next").Touch();
  aqUtils.Delay(5000)
  OCR.Recognize(Mobile.Device()).BlockByText("Confirm", spRightMost).Touch();
  
  //Home
  aqUtils.Delay(5000)
  OCR.Recognize(Mobile.Device()).BlockByText("Home").Touch();
  // Message
  Log.Message("SendMoney(Transaction created Successfully");
}


module.exports.TC002_SendMoneySBK = TC002_SendMoneySBK;