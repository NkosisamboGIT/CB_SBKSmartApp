 function DataDrivenTest()
{
    // Creates a driver
  DDT.ExcelDriver("C:\\Users\\Nkosi\\OneDrive - CloudBadger Pty Ltd\\Documents\\TestComplete 15 Projects\\SAppProject\\CBSmartApp.xlsx","LoginDetails");
  DDT.CurrentDriver.DriveMethod("DataDrivenTest.write");
  
  }
  
  function write()
  {
  
    //Gets a value from the storage and posts it to the log
  Log.Message(DDT.CurrentDriver.Value("PIN"));
 // DDT.CurrentDriver.Next();
  
  }
  
