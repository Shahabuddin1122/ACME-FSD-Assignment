//Defined types for different API responses and requests

export interface LegalDocument {
    id: number;
    title: string;
    content: string;
}

export interface SearchQuery {
    query: string;
}

export interface SearchResponse {
    data: {
        summary: string;
        matched_docs: LegalDocument[];
    };
    message: string;
    success: boolean;
    status: number;
}

export interface ErrorDetail {
    loc: (string | number)[];
    msg: string;
    type: string;
}

export interface ErrorResponse {
    detail: ErrorDetail[] | string;
}
