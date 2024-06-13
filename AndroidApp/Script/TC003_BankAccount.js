function TC003_BankAccount()
{
  // Select Bank Account
  aqUtils.Delay(5000)
  ImageRepository.standardbank.ImageView_UnnamedCtrl10.Touch(92, 112);
  aqUtils.Delay(5000)
  OCR.Recognize(Mobile.Device()).BlockByText("Please enter account number").Touch(); //Enter the Bank Account
  // Enter the Account Number
  Mobile.Device().Keys("4100000007330");
  OCR.Recognize(Mobile.Device()).BlockByText("Done").Touch();
  // Enter the Amount
  aqUtils.Delay(5000)
  //ImageRepository.standardbank.EditText_0Dot002.Touch(137, 79);
  ImageRepository.standardbank.EditText_0Dot007.Touch(185, 77);
  // Enter the value
  Mobile.Device().Keys("250"); // Value
  OCR.Recognize(Mobile.Device()).BlockByText("Done").Touch();
  aqUtils.Delay(5000)
  OCR.Recognize(Mobile.Device()).BlockByText("Next").Touch();
  aqUtils.Delay(5000)
  OCR.Recognize(Mobile.Device()).BlockByText("Confirm", spRightMost).Touch();
  aqUtils.Delay(10000)
  OCR.Recognize(Mobile.Device()).BlockByText("Home").Touch();
  
    // Message
  Log.Message("EFT (Transaction created Successfully");
}

module.exports.TC003_BankAccount = TC003_BankAccount;

