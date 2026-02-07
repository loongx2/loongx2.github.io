#!/usr/bin/env python3
import pdfplumber
import json

def extract_pdf_content(pdf_path):
    """Extract text content from a PDF file."""
    content = []
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for i, page in enumerate(pdf.pages):
                text = page.extract_text()
                if text:
                    content.append({
                        'page': i + 1,
                        'text': text
                    })
    except Exception as e:
        print(f"Error reading {pdf_path}: {e}")
    return content

def main():
    # Extract content from both PDFs
    cv_content = extract_pdf_content('assets/OngHeanLoong-CV.pdf')
    presentation_content = extract_pdf_content('assets/HeanLoongInterviewPresentation.pdf')
    
    # Save to JSON for easier reading
    output = {
        'cv': cv_content,
        'presentation': presentation_content
    }
    
    with open('pdf_content.json', 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    
    print("Content extracted successfully!")
    print(f"CV pages: {len(cv_content)}")
    print(f"Presentation pages: {len(presentation_content)}")
    
    # Print a preview
    print("\n=== CV Preview (First Page) ===")
    if cv_content:
        print(cv_content[0]['text'][:500] + "...")
    
    print("\n=== Presentation Preview (First Page) ===")
    if presentation_content:
        print(presentation_content[0]['text'][:500] + "...")

if __name__ == '__main__':
    main()
