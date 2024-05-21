function TC009_Transfer()
{
  // Click to Transfer
  aqUtils.Delay(5000)
  ImageRepository.standardbank.ImageView_UnnamedCtrl13.Touch(97, 116);
  aqUtils.Delay(5000)
  OCR.Recognize(Mobile.Device()).BlockByText("Please enter reference").Touch();
  Delay(3443);
  Mobile.Device().Keys("Testing");
  OCR.Recognize(Mobile.Device()).BlockByText("Done").Touch();
  aqUtils.Delay(3000)
  ImageRepository.standardbank.EditText_UnnamedCtrl.Touch(22, 62);
  //ImageRepository.standardbank.ViewGroup_UnnamedCtrl32.Touch(146, 1228);
  Mobile.Device().Keys("125");// Enter the value
  aqUtils.Delay(3000)
  OCR.Recognize(Mobile.Device()).BlockByText("Done").Touch();
  aqUtils.Delay(3000)
  OCR.Recognize(Mobile.Device()).BlockByText("Next").Touch();
  aqUtils.Delay(3000)
  OCR.Recognize(Mobile.Device()).BlockByText("Confirm", spRightMost).Touch();
  aqUtils.Delay(10000)
  OCR.Recognize(Mobile.Device()).BlockByText("Home").Touch();
}
module.exports.TC009_Transfer = TC009_Transfer;

