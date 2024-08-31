import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SelectionOptions from "./SelectionOptions";
import { table_of_contents } from "./data";

const handleTopicButtonClick = (topic) => {
  let parts = [];
  if (topic == "part") {
    parts = table_of_contents.map(
      (part, index) => (parts[index] = part)
      //   console.log(part.number, part.title)
    );
    <SelectionOptions selection_array={parts}></SelectionOptions>;
    // console.log(parts);
  } else if (topic == "chapter") {
    table_of_contents.map((part, index) =>
      part.children.map((chapter, index) =>
        console.log(chapter.number, chapter.title)
      )
    );
  } else if (topic == "section") {
    table_of_contents.map((part, index) =>
      part.children.map((chapter, index) =>
        chapter.children.map((section, index) =>
          console.log("Chapter - " + chapter.number, section.title)
        )
      )
    );
  } else if (topic == "subsection") {
    table_of_contents.map((part, index) =>
      part.children.map((chapter, index) =>
        chapter.children.map((section, index) =>
          section.children.map((subsection, index) =>
            console.log(
              "Chapter - " + chapter.number + "." + section.number + " ",
              subsection.title
            )
          )
        )
      )
    );
  } else {
    console.log("error");
  }
  //   console.log(topic);
};

export default function QuickSelect() {
  return (
    <div className="quick-select-container">
      <h1 className="quick-select-title">Quick Select Study Topic:</h1>
      <InputGroup className="quick-select-search-bar mb-3">
        {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
        <Form.Control />
      </InputGroup>
      <ul className="quick-select-list">
        <div className="quick-select-list-container">
          <li>
            <Button
              variant="primary"
              onClick={() => handleTopicButtonClick("part")}
            >
              Part
            </Button>
          </li>
          <li>
            <Button
              variant="primary"
              onClick={() => handleTopicButtonClick("chapter")}
            >
              Chapter
            </Button>
          </li>
          <li>
            <Button
              variant="primary"
              onClick={() => handleTopicButtonClick("section")}
            >
              Section
            </Button>
          </li>
          <li>
            <Button
              variant="primary"
              onClick={() => handleTopicButtonClick("subsection")}
            >
              Subsection
            </Button>
          </li>
        </div>
      </ul>
    </div>
  );
}
