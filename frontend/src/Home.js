// import React from "react";
import TableOfContents from "./TableOfContents";
import QuickSelect from "./QuickSelect";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <h1 className="home-title">A+ Quiz</h1>
        <QuickSelect />
        <TableOfContents />
      </div>
    </>
  );
}
