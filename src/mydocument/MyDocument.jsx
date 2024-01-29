import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingBottom: 60,
    paddingHorizontal: 30,
  },
  section: {
    marginBottom: 30,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  paragraph: {
    fontFamily: "Helvetica",
  },
});

const MyDocument = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>My Custom PDF Document</Text>
        <Text style={styles.paragraph}>
          This is the content of my PDF document. You can include multiple
          paragraphs, images, tables, and other elements using the available
          components from React PDF. Portable Document Format (PDF) has become a
          ubiquitous and versatile file format in the digital landscape. Created
          by Adobe, PDF is widely used for presenting documents in a consistent
          manner across different platforms. It preserves the formatting, fonts,
          and images of a document, ensuring that it looks the same regardless
          of the device or software used to view it. PDFs are commonly utilized
          for business reports, academic papers, legal documents, and various
          forms of digital communication. One of the key advantages of PDF is
          its ability to be easily shared and accessed while maintaining
          document integrity. PDFs can include interactive elements, hyperlinks,
          and multimedia, making them suitable for a wide range of purposes.
          Additionally, the security features in PDFs, such as password
          protection and encryption, contribute to their popularity in handling
          sensitive information. As technology continues to evolve, the PDF
          format remains an essential tool for efficient and reliable document
          exchange in both professional and personal spheres.
        </Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
