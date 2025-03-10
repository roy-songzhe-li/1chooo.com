import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-4 px-8 text-center text-sm text-light-gray">
      <div className="mb-2">
        &copy; 2024 - 2025{" "}
        <Link
          className="inline text-orange-yellow-crayola underline hover:text-opacity-70"
          href="https://herai.com.au"
          target="_blank"
          rel="noopener noreferrer"
        >
          Roy Li
        </Link>
      </div>
      <div className="space-x-4">
        <Link
          className="inline text-orange-yellow-crayola underline hover:text-opacity-70"
          href="https://github.com/roy-songzhe-li/herai.com.au"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vcard
        </Link>
        <Link
          className="inline text-orange-yellow-crayola underline hover:text-opacity-70"
          href="https://herai.com.au/terms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms
        </Link>
        <Link
          className="inline text-orange-yellow-crayola underline hover:text-opacity-70"
          href="https://herai.com.au/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
