function TC010_View_Transactions()
{

  // View the Transaction 
  aqUtils.Delay(5000);
  ImageRepository.standardbank.ImageView_UnnamedCtrl3.Touch(85, 90);
  aqUtils.Delay(5000);
  ImageRepository.standardbank.TextView_Account.Touch();// Click to view the Transactions
  
  // Message
  Log.Message("Transaction viewed Successfully)");
  // Terminate the app
  aqUtils.Delay(18000);
  OCR.Recognize(Mobile.Device()).BlockByText("|||").Touch();
  aqUtils.Delay(2000);
  Mobile.Device().Swipe(441, 795, 944, 872, 10, 62);
  aqUtils.Delay(2000);
  Mobile.Device().Swipe(498, 1514, 623, 273, 10, 64);
  
  // Message
  Log.Message("The App terminated Successfully");

}


module.exports.TC010_View_Transactions = TC010_View_Transactions;