import React, { useState } from "react";

let citations = [
  "pommes",
  "abricot",
  "pears",
  // { key: "1", auteur: "Paul", citation: "je suis un loup" },
  // { key: "2", auteur: "Louis", citation: "je suis un chien" },
  // { key: "3", auteur: "Marc", citation: "je suis un loup" },
  // { key: "4", auteur: "Ben", citation: "je suis un loup" },
];
let randomCitation = citations[Math.floor(Math.random() * citations.length)];
function Works() {
  const [state, setState] = useState("");
  setTimeout(() => {}, 3000);

  return (
    <div>
      <h1>Works</h1>
    </div>
  );
}

export default Works;
