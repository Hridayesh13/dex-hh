import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/Hridayesh13/dex-hh" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="DEX"
        subTitle="prototype"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
