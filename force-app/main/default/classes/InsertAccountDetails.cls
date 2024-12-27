public  class InsertAccountDetails {
    public void InsertAccounts(String name,String Address,String Description) {
        Account Acc = new Account();
        Acc.Name = name;
        Acc.ShippingCity = Address;
        Acc.Description = Description;
        insert Acc; 

    }
}