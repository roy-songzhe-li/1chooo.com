"use client";

import { useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log(`
|￣￣￣￣￣￣￣￣￣￣￣￣|
| Open-source ≠ Free |
|____________________|
      \\ (•◡•) /
       \\     /
        -————
        |   |
       _|   |_

Hi There 👋 This is Roy!

Love the design? Star ✨ on https://github.com/roy-songzhe-li/herai.com.au
`);
  }, []);

  return null;
}

export default Hello;
