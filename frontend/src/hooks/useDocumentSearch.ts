import { useState, useCallback } from "react";
import documentService from "../services/documentService";
import type { SearchResponse } from "../types";

interface UseDocumentSearchResult {
    response: SearchResponse | null;
    loading: boolean;
    error: string | null;
    searched: boolean; // indicates a search was performed vs initial load
    search: (query: string) => Promise<void>;
    clearError: () => void;
}

export function useDocumentSearch(): UseDocumentSearchResult {
    const [response, setResponse] = useState<SearchResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searched, setSearched] = useState(false);

    const search = useCallback(async (query: string) => {
        setLoading(true);
        setError(null);
        setSearched(true);
        try {
            const res = await documentService.getDocuments(query);
            setResponse(res);
        } catch (err: any) {
            setError(err.message || "Failed to search documents");
        } finally {
            setLoading(false);
        }
    }, []);

    const clearError = () => setError(null);

    return { response, loading, error, searched, search, clearError };
}

export default useDocumentSearch;
