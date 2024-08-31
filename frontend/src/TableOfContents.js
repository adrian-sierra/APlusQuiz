import { table_of_contents, chapters } from "./data";
import Chapter from "./Chapter";

export default function TableOfContents() {
  const Chapter_array = chapters.map((chapter, index) => (
    <Chapter key={index} index={index}></Chapter>
  ));
  return (
    <div className="table-of-contents">
      {Chapter_array}
      <div className="table-of-contents-part">
        <ul className="table-of-contents-list part-list">
          {table_of_contents.map((part, index) => (
            <li key={index}>
              <a href="#">
                <div className="table-of-contents-title part-title">
                  {/* {part.type + " " + part.number + " " + part.title} */}
                  <p className="object-type">{part.type}</p>
                  <p>{part.number}.</p>
                  <p>{part.title}</p>
                </div>
              </a>
              {/*  */}
              <div className="table-of-contents-chapter">
                <ul className="table-of-contents-list chapter-list">
                  {part.children.map((chapter, index) => (
                    <li key={index}>
                      <a href="chapter.html">
                        <div className="table-of-contents-title chapter-title">
                          <p className="object-type">{chapter.type}</p>
                          <p>{chapter.number}.</p>
                          <p>{chapter.title}</p>
                        </div>
                      </a>
                      {/*  */}
                      <div className="table-of-contents-section">
                        <ul className="table-of-contents-list section-list">
                          {chapter.children.map((section, index) => (
                            <li key={index}>
                              <a href="#">
                                <div className="table-of-contents-title section-title">
                                  <p className="object-type">{section.type}</p>
                                  <p>{section.number}.</p>
                                  <p>{section.title}</p>
                                </div>
                              </a>
                              {/*  */}
                              <div className="table-of-contents-subsection">
                                <ul className="table-of-contents-list subsection-list">
                                  {section.children.map((subsection, index) => (
                                    <li key={index}>
                                      <a href="#">
                                        <div className="table-of-contents-title subsection-title">
                                          {/* <p className="object-type">
                                            {subsection.type}
                                          </p> */}
                                          {/* <p>{subsection.number}</p> */}
                                          <p>{subsection.title}</p>
                                        </div>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              {/*  */}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/*  */}
                    </li>
                  ))}
                </ul>
              </div>
              {/*  */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
