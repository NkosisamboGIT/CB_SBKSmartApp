function TC001_PayContacts()
{
  Delay(5000) //delay the image before touching the pay contact module
  ImageRepository.standardbank.ImageView_UnnamedCtrl7.Touch(92, 87); // Touch the paycontact module
  ImageRepository.standardbank.View_UnnamedCtrl8.Touch(78, 130);
  Delay(500)
  OCR.Recognize(Mobile.Device()).BlockByText("Moses").Touch();
  OCR.Recognize(Mobile.Device()).BlockByText("Next").Touch();
  Delay(500)
  ImageRepository.standardbank.ViewGroup_UnnamedCtrl13.Touch(106, 84);
  Mobile.Device().Keys("121");// Enter the Value
  OCR.Recognize(Mobile.Device()).BlockByText("Done").Touch();
  Delay(500)
  OCR.Recognize(Mobile.Device()).BlockByText("Next").Touch();
  Delay(5000)
  OCR.Recognize(Mobile.Device()).BlockByText("Confirm", spRightMost).Touch();
  aqUtils.Delay(18000)
  OCR.Recognize(Mobile.Device()).BlockByText("Home").Touch();
  
  //  Success massage
  Log.Message("PayContact successfully paid");
}

module.exports.TC001_PayContacts = TC001_PayContacts;

