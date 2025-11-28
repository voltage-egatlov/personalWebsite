"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
    file: string;
    className?: string;
    width?: number;
    showControls?: boolean;
    maxHeight?: number;
}

export default function PDFViewer({
    file,
    className = "",
    width = 800,
    showControls = true,
    maxHeight = 600,
}: PDFViewerProps) {
    const [numPages, setNumPages] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setIsLoading(false);
    }

    return (
        <div className={`flex flex-col items-center gap-4 ${className}`}>
            {isLoading && (
                <div className="text-sm text-gray-500">Loading PDF...</div>
            )}

            <div
                className="overflow-y-auto border border-gray-200 shadow-lg"
                style={{ maxHeight: `${maxHeight}px` }}
            >
                <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                        <div className="text-sm text-gray-500 p-4">
                            Loading document...
                        </div>
                    }
                    error={
                        <div className="text-sm text-red-500 p-4">
                            Failed to load PDF
                        </div>
                    }
                >
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            width={width}
                            loading={
                                <div className="text-sm text-gray-500 p-4">
                                    Loading page {index + 1}...
                                </div>
                            }
                            renderTextLayer={true}
                            renderAnnotationLayer={true}
                            className="mb-2"
                        />
                    ))}
                </Document>
            </div>

            {showControls && numPages > 0 && (
                <div className="text-sm text-gray-700">
                    {numPages} {numPages === 1 ? "page" : "pages"}
                </div>
            )}
        </div>
    );
}
