function LogInEmulator()
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