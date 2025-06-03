package gw.si.ta

uses gw.api.database.Query
uses gw.api.database.Relop

@Export
class ABContactSummary {
    construct(){
    }
  var ExternalID : Integer
  var ContactID : String
  var Name : String
  var NumCheckingAccounts : Integer

function  loadSummaryData(anABContact : ABContact){
  var _abContactSummary = new ABContactSummary()
  _abContactSummary.ContactID = anABContact.PublicID
  if(_abContactSummary.ExternalID == 0){
    _abContactSummary.ExternalID = 198
  }
  _abContactSummary.Name = anABContact.DisplayName
     var totalbankAccounts = Query.make(BankAccount).select()
     var count : int = 0
     for (bank in totalbankAccounts){
        if(bank.AccountType.equals(BankAccountType.TC_CHECKING))
         count ++
     }
    _abContactSummary.NumCheckingAccounts = count
 }

  function buildConcatenatedSummary(_abContactSummary : ABContactSummary) : String{
        return  _abContactSummary.toString()
    //amitabh

    //Code changes 2 to test Version Control System
  }
}