// app/search/page.tsx
"use client";

import React, { Suspense } from "react";
import SearchResults from "../components/organisms/SearchResults";
import SearchFallback from "../components/molecules/SearchFallback";

export default function SearchPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4 pt-12">
        <Suspense fallback={<SearchFallback />}>
          <SearchResults />
        </Suspense>
      </div>
    </div>
  );
}
