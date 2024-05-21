function TC008_CashOutSBK()
{
  ImageRepository.standardbank.ImageView_UnnamedCtrl1.Touch(89, 118);
  aqUtils.Delay(3000);
  OCR.Recognize(Mobile.Device()).BlockByText("0.00").Touch();
  Delay(4341);
  Mobile.Device().Keys("110");
  Mobile.Device().Touch(838, 2153);// touch anywhere to hide the keyboard
  ImageRepository.standardbank.View_UnnamedCtrl3.Touch(609, 111);
  aqUtils.Delay(2000);
  ImageRepository.standardbank.View_UnnamedCtrl4.Touch(269, 101);
  
  // Message
  Log.Message("Cash out transaction created successfully");
}
module.exports.TC008_CashOutSBK = TC008_CashOutSBK;