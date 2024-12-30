@istest
public class InsertAccountDetails {

    private static void listAddAccount(List<Account> accountList) {
   
            insert accountList;  
       
    }
    @istest
    public static void testing(){
        insertAccounts('name', 'street', 'country', 'city', 'province', 'postalCode', 'description');
        system.debug('this debug ');
    }

    @AuraEnabled
    public static void insertAccounts(String name, String street, String country, String city, String province, String postalCode, String description) {
        // Create a new Account
        Account acc = new Account();
        acc.Name = name;
        acc.BillingStreet = street;
        acc.BillingCountry = country;
        acc.BillingCity = city;
        acc.BillingState = province;
        acc.BillingPostalCode = postalCode;
        acc.Description = description;

        List<Account> accountList = new List<Account>();
        accountList.add(acc);

        listAddAccount(accountList);
    }
}
