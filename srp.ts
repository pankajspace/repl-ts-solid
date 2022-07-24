// SPR: The class should have a single responsibility 


// Violating SRP
class Report {
  generateReport(data: any) { }
  createPDF(report: any) { }
}


// Following SRP
class User {
  login(email: string, password: string) { }
  signup(email: string, password: string) { }
  assignRole(role: any) { }
}


