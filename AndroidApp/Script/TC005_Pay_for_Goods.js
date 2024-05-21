function TC005_Pay_for_Goods()
{
 // select to generate the payment voucher
  ImageRepository.standardbank.ImageView_UnnamedCtrl11.Touch(80, 152);
  aqUtils.Delay(5000)
  // Click Generate Payment Voucher
  OCR.Recognize(Mobile.Device()).BlockByText("Generate payment voucher").Touch();
  // Click the Amount
  aqUtils.Delay(5000)
  ImageRepository.standardbank.EditText_0Dot003.Touch(156, 63);
  // Enter the value
  Mobile.Device().Keys("250"); // Value
  OCR.Recognize(Mobile.Device()).BlockByText("Done").Touch();
  
  // create the voucher
  aqUtils.Delay(5000)
  OCR.Recognize(Mobile.Device()).BlockByText("Create").Touch();
  
  aqUtils.Delay(10000)
  OCR.Recognize(Mobile.Device()).BlockByText("Home").Touch();
    // Message
  Log.Message("Generate Payment Voucher (Transaction created Successfully");
}
module.exports.TC005_Pay_for_Goods = TC005_Pay_for_Goods;