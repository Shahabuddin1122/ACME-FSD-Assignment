import React, { useState } from "react";
import type { SearchResponse, LegalDocument } from "../../types";
import LoadingSpinner from "../common/LoadingSpinner";
import DocumentModal from "./DocumentModal";

interface ResponseDisplayProps {
    response: SearchResponse | null;
    loading: boolean;
    searched: boolean;
}

const DocumentDisplay: React.FC<ResponseDisplayProps> = ({
    response,
    loading,
    searched,
}) => {
    const [selectedDocument, setSelectedDocument] =
        useState<LegalDocument | null>(null);

    if (loading) {
        return (
            <div className="w-full max-w-4xl mx-auto mt-8">
                <div className="bg-white border border-gray-200 rounded-lg p-12">
                    <LoadingSpinner />
                    <p className="text-center text-gray-600 mt-4">
                        Searching documents...
                    </p>
                </div>
            </div>
        );
    }

    if (!response) {
        return (
            <div className="w-full max-w-4xl mx-auto mt-8">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
                    <svg
                        className="mx-auto h-12 w-12 text-gray-400 mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Start your legal search
                    </h3>
                    <p className="text-gray-600">
                        Enter a query to find relevant legal documents.
                    </p>
                </div>
            </div>
        );
    }

    const documents = response.data?.matched_docs || [];
    const summary = response.data?.summary;

    return (
        <>
            <div className="w-full max-w-4xl mx-auto mt-8">
                {searched && summary && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-700">{summary}</p>
                    </div>
                )}

                {documents.length === 0 ? (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                        <svg
                            className="mx-auto h-10 w-10 text-yellow-600 mb-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        <p className="font-medium text-yellow-800 mb-1">
                            No documents found
                        </p>
                        <p className="text-sm text-yellow-700">
                            Try a different search query or refine your
                            keywords.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {documents.map((doc) => (
                            <div
                                key={doc.id}
                                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                            {doc.title}
                                        </h3>
                                        <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                            ID: {doc.id}
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <p className="text-sm font-medium text-gray-700 mb-1">
                                        Content Preview:
                                    </p>
                                    <p className="text-sm text-gray-600 line-clamp-3">
                                        {doc.content.substring(0, 220)}
                                        {doc.content.length > 220 && "..."}
                                    </p>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => setSelectedDocument(doc)}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm flex items-center gap-2"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 12a3 3 0 11-6 0 3 3 0 06 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                        View Full Document
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {selectedDocument && (
                <DocumentModal
                    document={selectedDocument}
                    onClose={() => setSelectedDocument(null)}
                />
            )}
        </>
    );
};

export default DocumentDisplay;
