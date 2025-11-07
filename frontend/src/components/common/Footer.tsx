import React from "react";

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="w-full bg-gradient-to-r from-blue-900 to-indigo-800 text-blue-100 py-8 border-t border-blue-800 mt-10">
            <div className="max-w-6xl mx-auto px-4 text-center text-sm flex flex-col gap-2 items-center">
                <div className="flex items-center gap-2 justify-center mb-2">
                    <svg
                        className="h-5 w-5 text-yellow-400"
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
                    <span className="font-bold">LexiSearch</span>
                </div>
                <p className="text-xs">
                    &copy; {year} LexiSearch. All rights reserved.
                </p>
                <p className="text-xs text-blue-200">
                    For legal professionals, students, and researchers.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
