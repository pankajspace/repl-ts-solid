// OCP: The class should be open for extension and close for modification


// Violating OCP
// class Printer {
//   printPDF(data: any) { }
//   printHTML(data: any) { }
//   verifyData(data: any) { }
// }


// Following OCP
interface Printer {
  print(data: any): any;
}

// This class should be open for extension and close for modification
class PrinterData {
  verifyData(data: any) { }
}

class HTMLPrinter extends PrinterData implements Printer {
  print(data: any) { }
}

class PDFPrinter extends PrinterData implements Printer {
  print(data: any) { }
}