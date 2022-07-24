// DIP: We should depend upon abstractions not upon concretions.


// Violating DIP
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
class InMemoryDatabase implements Storable {
  storeData(data: any) { }
}

// class App {
//   private database: SQLDatabase | InMemoryDatabase;

//   // here we are depending on concretions which is wrong. Code like this hard to maintain because more type of databases we add we need to ass more if checks. Also if connect methos changes we need to make change at all places.
//   constructor(database: SQLDatabase | InMemoryDatabase) {
//     if (database instanceof SQLDatabase) {
//       database.connect("uri");
//     }
//     this.database = database;
//   }

//   saveSettings(){
//     this.database.storeData("some data");
//   }
// }


// Following DIP
class App {
  private database: Storable;

  constructor(database: Storable) {
    if (database instanceof SQLDatabase) {
      database.connect("uri");
    }
    this.database = database;
  }

  saveSettings() {
    this.database.storeData("some data");
  }
}
// This is how we should do dependancy inversion
const db = new SQLDatabase();
db.connect("uri");
const app = new App(db);
