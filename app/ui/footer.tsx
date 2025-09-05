import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p className="text-center p-4">
        Copyright © 2025 -
        <Link
          type="link"
          className="p-2 ml-1 bg-blue-500 text-white rounded-md"
          target="_blank"
          href="http://jualo.uy"
        >
          jualo.uy
        </Link>
      </p>
    </footer>
  );
}
