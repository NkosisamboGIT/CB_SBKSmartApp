function TC011_Buy_VAS_Airtime()
{
  // select to buy VAS
  Delay(5000)
  ImageRepository.standardbank.ImageView_UnnamedCtrl14.Touch(90, 78); //Click Buy
  ImageRepository.standardbank.ImageView_UnnamedCtrl15.Touch(77, 115);// Click Airtime
  // Enter and clear the mobile number
  //ImageRepository.standardbank.EditText_Plus276268.Touch(323, 42);// LS
  Delay(5000)
   ImageRepository.standardbank.EditText_Plus2773011.Touch(323, 59);//MW
  Delay(3203);
  Mobile.Device().PressButton(mbkDel);
  Delay(626);
  Mobile.Device().PressButton(mbkDel);
  Delay(340);
  Mobile.Device().PressButton(mbkDel);
  Delay(165);
  Mobile.Device().PressButton(mbkDel);
  Delay(233);
  Mobile.Device().PressButton(mbkDel);
  Delay(166);
  Mobile.Device().PressButton(mbkDel);
  Delay(269);
  Mobile.Device().PressButton(mbkDel);
  Delay(239);
  Mobile.Device().PressButton(mbkDel);
  Delay(160);
  Mobile.Device().PressButton(mbkDel);
  Delay(219);
  Mobile.Device().PressButton(mbkDel);
  Delay(163);
  Mobile.Device().PressButton(mbkDel);
  Delay(182);
  Mobile.Device().PressButton(mbkDel);
  Delay(159);
  Mobile.Device().PressButton(mbkDel);
  Delay(335);
  Mobile.Device().PressButton(mbkDel); //Clear the textbox
  aqUtils.Delay(2000)
  Mobile.Device().Keys("+27626829829");
  aqUtils.Delay(8000)
  OCR.Recognize(Mobile.Device()).BlockByText("Done").Touch();
  // Enter the amount
  aqUtils.Delay(2000)
  //ImageRepository.standardbank.EditText_0Dot004.Touch(131, 56);// LS
  ImageRepository.standardbank.EditText_0Dot009.Touch(143, 70);//MW
  Mobile.Device().Keys("100");
  aqUtils.Delay(2000)
  OCR.Recognize(Mobile.Device()).BlockByText("Done").Touch();
  aqUtils.Delay(2000)
  OCR.Recognize(Mobile.Device()).BlockByText("Next").Touch();
  aqUtils.Delay(2000)
  OCR.Recognize(Mobile.Device()).BlockByText("Confirm", spRightMost).Touch();
  aqUtils.Delay(10000)
  OCR.Recognize(Mobile.Device()).BlockByText("Home").Touch();
  
    //Message
  Log.Message("VAS Airtime Successfully");
}

module.exports.TC011_Buy_VAS_Airtime = TC011_Buy_VAS_Airtime;

