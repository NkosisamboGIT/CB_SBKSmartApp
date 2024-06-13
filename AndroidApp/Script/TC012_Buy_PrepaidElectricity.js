function TC012_Buy_PrepaidElectricity()
{
  aqUtils.Delay(5000)
  ImageRepository.standardbank.ImageView_UnnamedCtrl14.Touch(87, 78);// select buy to Buy Electricity
  ImageRepository.standardbank.ImageView_UnnamedCtrl16.Touch(68, 127);// select buy to Buy Electricity
  aqUtils.Delay(5000)
  OCR.Recognize(Mobile.Device()).BlockByText("Please enter meter number").Touch(); //Enter meter number
  Mobile.Device().Keys("37198277305");
  aqUtils.Delay(5000)
  OCR.Recognize(Mobile.Device()).BlockByText("Done").Touch();
  aqUtils.Delay(5000)
  //ImageRepository.standardbank.EditText_0Dot006.Touch(136, 63);// LS
  ImageRepository.standardbank.EditText_0Dot0010.Touch(134, 60);//MW
  Mobile.Device().Keys("400");
  OCR.Recognize(Mobile.Device()).BlockByText("Done").Touch();
  Delay(10000)
  OCR.Recognize(Mobile.Device()).BlockByText("Next").Touch();
  aqUtils.Delay(5000)
  OCR.Recognize(Mobile.Device()).BlockByText("Confirm", spRightMost).Touch();
  aqUtils.Delay(10000)
  OCR.Recognize(Mobile.Device()).BlockByText("Home").Touch();
  
  //Message
  Log.Message("VAS Electricity successfully");
}
module.exports.TC012_Buy_PrepaidElectricity = TC012_Buy_PrepaidElectricity;

