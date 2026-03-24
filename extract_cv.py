import pypdf
import sys
import os

def extract_text(pdf_path):
    try:
        reader = pypdf.PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    pdf_path = r"C:\Users\Hemant\OneDrive\Desktop\Daivd.Genral.pdf"
    if not os.path.exists(pdf_path):
        print(f"Error: File not found at {pdf_path}")
        sys.exit(1)
    
    extracted_text = extract_text(pdf_path)
    output_path = r"c:\Users\Hemant\OneDrive\Documents\portfolio\cv_extracted.txt"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(extracted_text)
    print(f"Text extracted to {output_path}")
