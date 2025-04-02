// app/components/molecules/ProductDescription.tsx
"use client";

import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

interface ProductDescriptionProps {
  description: string;
}

export default function ProductDescription({
  description,
}: ProductDescriptionProps) {
  const [sanitizedHTML, setSanitizedHTML] = useState("");

  useEffect(() => {
    // クライアントサイドでHTMLをサニタイズ
    const sanitized = DOMPurify.sanitize(description, {
      // 許可するタグをカスタマイズ - 必要に応じて調整
      ALLOWED_TAGS: [
        "p",
        "br",
        "strong",
        "em",
        "ul",
        "ol",
        "li",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "a",
        "img",
      ],
      // 許可する属性をカスタマイズ - 必要に応じて調整
      ALLOWED_ATTR: ["href", "target", "src", "alt", "class", "id", "style"],
    });

    setSanitizedHTML(sanitized);
  }, [description]);

  return (
    <div
      className="prose prose-sm max-w-none text-gray-600 font-light leading-relaxed"
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
}
