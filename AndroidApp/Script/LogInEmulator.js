//function Test1()
//{
//  Mobile.SetCurrent("emulator-5554");
//  ImageRepository.android_apps_nexuslauncher.TextView_Unayo.Touch();
//  let view = Aliases.Device.Process_cloudbadger_standardbank.Layout_NO_ID.Layout_action_bar_root.Layout_content.View_NO_ID.View.View_crc643f46942d9dd1fff9PageContainer.View.View_NO_ID.View_NO_ID.View_NO_ID.View_NO_ID;
//  let view2 = view.View_NO_ID;
//  let editText = view2.Layout_crc64ee486da937c010f4FrameRenderer.View_NO_ID.View_NO_ID.View_NO_ID.EditText_crc643f46942d9dd1fff9Forms;
//  editText.Touch(147, 61);
//  ImageRepository.standardbank.TextView_Forgot_PIN.Touch();
//  ImageRepository.standardbank.TextView_Forgot_PIN.Touch();
//  ImageRepository.standardbank.ViewGroup_UnnamedCtrl35.Touch(781, 189);
//  ImageRepository.standardbank.ViewGroup_UnnamedCtrl35.Touch(259, 186);
//  ImageRepository.standardbank.View_UnnamedCtrl17.Touch(507, 139);
//  editText.Keys("55640");
//  view2.Touch(526, 1207);
//  OCR.Recognize(view.View_NO_ID1.View_crc648e35430423bd4943SKCanvas).BlockByText("Login").Touch();
//}

function Test2()
{
  Mobile.SetCurrent("emulator-5554");
  Regions.EditText_crc643f46942d9dd1fff9Forms.Check(Aliases.Device.Process_cloudbadger_standardbank.Layout_NO_ID.Layout_action_bar_root.Layout_content.View_NO_ID.View.View_crc643f46942d9dd1fff9PageContainer.View.View_NO_ID.View_NO_ID.View_NO_ID.View_NO_ID.View_NO_ID.Layout_crc64ee486da937c010f4FrameRenderer.View_NO_ID.View_NO_ID.View_NO_ID.EditText_crc643f46942d9dd1fff9Forms);
  let view = Aliases.Device.Process_cloudbadger_standardbank.Layout_NO_ID.Layout_action_bar_root.Layout_content.View_NO_ID.View.View_crc643f46942d9dd1fff9PageContainer.View.View_NO_ID.View_NO_ID.View_NO_ID.View_NO_ID;
  let view2 = view.View_NO_ID;
  view2.Touch(342, 17);
  let editText = view2.Layout_crc64ee486da937c010f4FrameRenderer.View_NO_ID.View_NO_ID.View_NO_ID.EditText_crc643f46942d9dd1fff9Forms;
  editText.Touch(183, 53);
  editText.Keys("55640");
  view2.Touch(596, 1217);
  OCR.Recognize(view.View_NO_ID1.View_crc648e35430423bd4943SKCanvas).BlockByText("Login").Touch();
  Browsers.Item(btChrome).Navigate("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/FMfcgzQVwxGQqPjngHPlhPkXkHmGCZlZ");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageInbox115Nkosisambocb1GmailCo.cell.Click();
}