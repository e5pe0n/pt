{
  type CompanyID = string & { readonly brand: unique symbol };
  type OrderID = string & { readonly brand: unique symbol };
  type UserID = string & { readonly brand: unique symbol };
  type ID = CompanyID | OrderID | UserID;

  function CompanyID(id: string) {
    return id as CompanyID;
  }
  function OrderID(id: string) {
    return id as OrderID;
  }
  function UserID(id: string) {
    return id as UserID;
  }

  function queryForUser(id: UserID) {
    // ...
  }

  const companyId = CompanyID("8a607cf");
  const orderId = OrderID("9994acc1");
  const userId = UserID("d21b1dbf");

  queryForUser(userId);
  queryForUser(companyId); // Error TS2345
}
