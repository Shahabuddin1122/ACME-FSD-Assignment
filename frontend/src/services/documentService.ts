import fetchService from "./fetchService";

interface GenerateRequest {
    query: string;
}

interface LegalDocument {
    id: number;
    title: string;
    content: string;
}

interface GenerateResponse {
    data: {
        summary: string;
        matched_docs: LegalDocument[];
    };
    message: string;
    success: boolean;
    status: number;
}

class DocumentService {
    private endpoint = "/generate";

    async getDocuments(query: string): Promise<GenerateResponse> {
        const payload: GenerateRequest = { query };
        return await fetchService.post<GenerateResponse>(
            this.endpoint,
            payload
        );
    }
}

const documentService = new DocumentService();
export default documentService;
