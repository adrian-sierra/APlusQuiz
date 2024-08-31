import { table_of_contents, chapters } from "./data";
import Section from "./Section";
export default function Chapter({ index }) {
  return (
    <>
      <h1>{chapters[index]}</h1>
    </>
  );
}
