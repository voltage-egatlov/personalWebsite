"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  file: string;
  className?: string;
  width?: number;
  showControls?: boolean;
}

export default function PDFViewer({
  file,
  className = "",
  width = 800,
  showControls = true,
}: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {isLoading && (
        <div className="text-sm text-gray-500">Loading PDF...</div>
      )}

      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div className="text-sm text-gray-500">Loading document...</div>}
        error={<div className="text-sm text-red-500">Failed to load PDF</div>}
        className="border border-gray-200 shadow-lg"
      >
        <Page
          pageNumber={pageNumber}
          width={width}
          loading={<div className="text-sm text-gray-500">Loading page...</div>}
          renderTextLayer={true}
          renderAnnotationLayer={true}
        />
      </Document>

      {showControls && numPages > 0 && (
        <div className="flex items-center gap-4 text-sm">
          <button
            onClick={previousPage}
            disabled={pageNumber <= 1}
            className="px-4 py-2 bg-black text-white disabled:bg-gray-300 disabled:cursor-not-allowed rounded hover:bg-gray-800 transition-colors"
          >
            Previous
          </button>

          <p className="text-gray-700">
            Page {pageNumber} of {numPages}
          </p>

          <button
            onClick={nextPage}
            disabled={pageNumber >= numPages}
            className="px-4 py-2 bg-black text-white disabled:bg-gray-300 disabled:cursor-not-allowed rounded hover:bg-gray-800 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
