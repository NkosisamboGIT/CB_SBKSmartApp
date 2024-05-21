function TC007_CashInSBK()
{
  aqUtils.Delay(5000);
  ImageRepository.standardbank.ImageView_UnnamedCtrl.Touch(70, 145);
  aqUtils.Delay(5000);
  OCR.Recognize(Mobile.Device()).BlockByText("0.00").Touch();
  // Delay before entering the Cash In value
  aqUtils.Delay(2000);
  Mobile.Device().Keys("125");// Cash In Value
  
 Mobile.Device().Touch(838, 2153);// touch anywhere to hide the keyboard
  
  ImageRepository.standardbank.View_UnnamedCtrl3.Touch(579, 92);// Next
  //Go to Home 
  aqUtils.Delay(9000);
  ImageRepository.standardbank.View_UnnamedCtrl4.Touch(255, 94);
  
  //Message
  Log.Message("Cash-in transaction created successfully");
}


module.exports.TC007_CashInSBK = TC007_CashInSBK;