import React from "react";

const Header: React.FC = () => {
    return (
        <header className="w-full bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-6 shadow-lg border-b border-blue-800">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                    <svg
                        className="h-10 w-10 text-yellow-400"
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
                    <span className="text-2xl font-extrabold tracking-tight">
                        LexiSearch
                    </span>
                </div>
                <div className="text-sm text-blue-100 font-medium italic text-center sm:text-right">
                    Empowering your legal research with AI-driven document
                    search
                </div>
            </div>
        </header>
    );
};

export default Header;
