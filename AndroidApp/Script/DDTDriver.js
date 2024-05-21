// Function for Login Details TestData
var excelObject = new getActiveXObject("Excel.Application");

  //excelObject.Visible = true;
  var excelWorkbookObj = excelObject.Workbooks.Open("C:\\\\Users\\Nkosi\\OneDrive - CloudBadger Pty Ltd\\Documents\\TestComplete 15 Projects\\SAppProject\\CBSmartApp.xlsx");

function getLoginByRow(row)
{

  var excelLoginDetailsSheet = excelWorkbookObj.Sheets.Item("LoginDetails");
  var result = {
   Username: VarToStr(excelLoginDetailsSheet.Cells.Item(row, 1)),
    
  };
  
  excelObject.Quit();
  return result;
}

function getSendMoneyByRow(row)
{
  //excelObject.Visible = true;
  var excelWorkbookObj = excelObject.Workbooks.Open("C:\\\\Users\\Nkosi\\OneDrive - CloudBadger Pty Ltd\\Documents\\TestComplete 15 Projects\\SAppProject\\CBSmartApp.xlsx");
  var excelLoginDetailsSheet = excelWorkbookObj.Sheets.Item("SendMoneySBK");
  var result = {
   SendMoney: VarToStr(excelLoginDetailsSheet.Cells.Item(row, 1)),
   Value: VarToStr(excelLoginDetailsSheet.Cells.Item(row, 2)),
    
  };
  
  excelObject.Quit();
  return result;
}
module.exports.getLoginByRow = getLoginByRow;
module.exports.getSendMoneyByRow = getSendMoneyByRow;