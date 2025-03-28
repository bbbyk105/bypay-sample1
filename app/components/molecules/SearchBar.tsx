// app/components/molecules/SearchBar.tsx
"use client";

import React, { useState, FormEvent, ChangeEvent, JSX } from "react";
import { useRouter } from "next/navigation"; // app routerの場合

interface SearchBarProps {
  placeholder?: string;
  initialQuery?: string;
}

const SearchBar = ({
  placeholder = "検索...",
  initialQuery = "",
}: SearchBarProps): JSX.Element => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 text-gray-700 bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mr-2 mt-2 text-gray-600 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
