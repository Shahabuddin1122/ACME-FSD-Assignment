import ErrorMessage from "../components/common/ErrorMessage";
import SearchBar from "../components/ui/SearchBar";
import DocumentDisplay from "../components/ui/DocumentDisplay";
import useDocumentSearch from "../hooks/useDocumentSearch";

function Home() {
    const { response, loading, error, searched, search, clearError } =
        useDocumentSearch();

    // Handle closing error message
    const handleCloseError = () => {
        clearError();
    };

    return (
        <div className="py-8">
            {/* Error Toast */}
            {error && (
                <ErrorMessage message={error} onClose={handleCloseError} />
            )}

            {/* Heading */}
            <div className="w-full max-w-4xl mx-auto px-4 mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                    Legal Document Search
                </h1>
                <p className="text-sm text-gray-600">
                    Search and analyze legal documents
                </p>
            </div>

            {/* Search Bar */}
            <SearchBar onSearch={search} loading={loading} />

            {/* Results */}
            <DocumentDisplay
                response={response}
                loading={loading}
                searched={searched}
            />
        </div>
    );
}

export default Home;
