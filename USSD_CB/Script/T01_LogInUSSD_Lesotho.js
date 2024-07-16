function T01_LogInUSSD_Lesotho()
{
  var i;
  for (i = 0; i < 1; i ++)
  {
  // Clean the catch
  WshShell.Run ("RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 255", 1, true);
  // Launching the Browser
  var url = "https://ussd-uat.unayo.com/";
  Browsers.Item(btFirefox).Run(url);
  // Maximize the window
  Sys.Browser().BrowserWindow(0).Maximize();
  // var page = Sys.Browser("*").Page("*");
  var browser = Sys.Browser("*");
  var page = browser.Page("*");

   // Click create a new session button
   Delay(1000);
   page.NativeWebObject.Find("contentText", "Create a new Session").Click();
   // select an instance
   var dropdown = page.FindChildByXPath("//*[@id='instanceId']");
   Delay(1000);
   dropdown.Click();
   Delay(1000);
   dropdown.Keys("[Down][Down][Down][Down]");// Lesotho Instance
   
   //Enter Mobile Number
   page.FindChildByXPath("//*[@id='msisdn']").Click();
   page.FindChildByXPath("//*[@id='msisdn']").SetText("+27626829829"); 
   // Enter Network ID
   page.FindChildByXPath("//*[@id='networkId']").Click();
   page.FindChildByXPath("//*[@id='networkId']").SetText("1"); 
   // Enter IMSI
   page.FindChildByXPath("//*[@id='imsi']").Click();
   page.FindChildByXPath("//*[@id='imsi']").SetText("1"); 
   //Apply
   page.FindChildByXPath("//*[@id='newSessionDetailsModal']/div/div/div[2]/form/button[2]").Click();
   //Submit
   Delay(3000);
   page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
   // Enter the password
   Delay(3000);
   page.FindChildByXPath("//*[@id='inputText']").SetText("55640");
   //Submit
   Delay(3000);
   page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
   Delay(3000);
   page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
   var Resume = page.FindChildByXPath("//*[@id='ussd_display_text']")
   //page.NativeWebObject.Find("contentText", "Do you want to continue where you left off?");
   if(Resume.Exists,"contentText", "Do you want to continue where you left off?")
    {
    //Do you want to continue where you left off?
    Delay(3000);
    page.FindChildByXPath("//*[@id='inputText']").SetText("2");
    //Submit
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
    // Enter the password
    Delay(3000);
    page.FindChildByXPath("//*[@id='inputText']").SetText("55640");
    //Submit
    Delay(3000);
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
     Log.Message("LogIn successfully");
      }
     //declare passport
    Delay(3000);
    var Passport = page.FindChildByXPath("//*[@id='ussd_display_text']")
     //var Passport= page.NativeWebObject.Find("contentText", "Welcome back to Unayo!  We need to confirm some of your details again.");
    //var Passport = "Welcome back to Unayo!  We need to confirm some of your details again."
    if(Passport.Exists, "contentText", "Welcome back to Unayo!  We need to confirm some of your details again.")
      {
     page.FindChildByXPath("//*[@id='inputText']").SetText("11111985");
     Delay(3000);
     page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
     Delay(3000);
     page.FindChildByXPath("//*[@id='inputText']").SetText("19851111");
     Delay(3000);
     page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
      // Enter the password
     Delay(3000);
     page.FindChildByXPath("//*[@id='inputText']").SetText("55640");
     //Submit
     Delay(5000);
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
    Log.Message("LogIn successfully");
   }

  }

}

module.exports.T01_LogInUSSD_Lesotho = T01_LogInUSSD_Lesotho;

