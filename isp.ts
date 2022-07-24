// ISP: Many client specific interfaces are better than one general purpose interface


// Violationg ISP
// interface Database {
//   connect(uri: string): any;
//   storeData(data: any): any;
// }
// class SQLDatabase implements Database {
//   connect(uri: string) { }
//   storeData(data: any) { }
// }
// // The above general purpose interface fails in case of Inmemory databases because Inmemory databases don't need to have connect method
// class InMemoryDatabase implements Database{
//   connect(uri: string) { }  //This method doesn't make any sense for this class but still we have to implement this method because of general purpose interface implementation
//   storeData(data: any) { }  
// }


// Following ISP
interface Connectable {
  connect(uri: string): any;
}
interface Storable {
  storeData(data: any): any;
}
class SQLDatabase implements Connectable, Storable {
  connect(uri: string) { }
  storeData(data: any) { }
}
// Here since we have specific interface for Storable data we can implement that interface without having to implement connect method
class InMemoryDatabase implements Storable {
  storeData(data: any) { }
}