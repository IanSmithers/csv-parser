import PDFDocument from "pdfkit";
import { createWriteStream } from "fs";
import path from "path";

export default class PdfFileService {
  
  // NOTE: I was curious how this package worked so wired up something very simply from their example on GitHub.
  // It creates a horrible looking PDF, but it was just for my own curiosity's sake. :>
  public static CreatePdfDocument(jsonArray: object[]) {
    const doc = new PDFDocument();
    
    doc.pipe(createWriteStream('output.pdf'));
    
    const fontPath = path.join(__dirname, "../../assets/fonts", "PalatinoBold.ttf");

    doc.font(fontPath)
      .fontSize(25)
      .text("Some text with an embedded font!", 100, 100);
    
    doc.fontSize(16);
    
    jsonArray.forEach((item) => {
      for(const [key, value] of Object.entries(item)) {
        doc.text(`${key}: ${value}`);
      }
    });
    
    doc.end(); 
  }
}