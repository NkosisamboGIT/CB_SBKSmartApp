function TC006_AcceptPayment()
{ 
  
  // Click to view Code to accept payment
  ImageRepository.standardbank.ImageView_UnnamedCtrl12.Touch(80, 76);
  aqUtils.Delay(10000)
  OCR.Recognize(Mobile.Device()).BlockByText("Home").Touch();
    // Message
  Log.Message("View Code to accept payment is successfully");
}
module.exports.TC006_AcceptPayment = TC006_AcceptPayment;