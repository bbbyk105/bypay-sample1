// app/search/page.tsx
"use client";

import SearchFallback from "@/src/components/molecules/SearchFallback";
import SearchResults from "@/src/components/organisms/SearchResults";
import React, { Suspense } from "react";

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
