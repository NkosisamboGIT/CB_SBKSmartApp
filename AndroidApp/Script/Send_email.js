function Send_email()
{
  if (SendMail("nkosisambo@cloudbadger.com","nkosisambo0@gmail.com","nkosisambocb1@gmail.com","Notification", "Please see the report.", "C:\\\\Users\\Nkosi\\OneDrive - CloudBadger Pty Ltd\\Documents\\TestComplete 15 Projects\\SAppProject\\Report.txt"))
    Log.Message("Mail was sent");
  else
    Log.Warning("Mail was not sent");
}

