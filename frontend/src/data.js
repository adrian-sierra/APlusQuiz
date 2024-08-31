export const chapters = ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"];

export const table_of_contents = [
  // table_of_contents.push({
  {
    type: "part",
    number: "1",
    title: "220-1101",
    page_start: "1",
    page_end: "814",
    children: [
      {
        type: "chapter",
        number: "1",
        title: "Motherboards, Processors, and Memory",
        page_start: "3",
        page_end: "78",
        children: [
          {
            type: "section",
            number: "1",
            title: "Understanding Motherboards",
            page_start: "7",
            page_end: "41",
            children: [
              {
                type: "subsection",
                number: "1",
                title: "Motherboard Form Factors",
                page_start: "7",
                page_end: "9",
              },
              {
                type: "subsection",
                number: "2",
                title: "System Board Components",
                page_start: "10",
                page_end: "41",
              },
            ],
          },
          {
            type: "section",
            number: "2",
            title: "Understanding Processors",
            page_start: "42",
            page_end: "49",
            children: [
              {
                type: "subsection",
                number: "1",
                title: "CPU Architecture",
                page_start: "43",
                page_end: "44",
              },
              {
                type: "subsection",
                number: "2",
                title: "CPU Characteristics",
                page_start: "45",
                page_end: "48",
              },
            ],
          },
          {
            type: "section",
            number: "3",
            title: "Understanding Memory",
            page_start: "49",
            page_end: "62",
            children: [
              {
                type: "subsection",
                number: "1",
                title: "Important Memory Terms",
                page_start: "50",
                page_end: "53",
              },
              {
                type: "subsection",
                number: "2",
                title: "Types of Memory",
                page_start: "54",
                page_end: "58",
              },
              {
                type: "subsection",
                number: "3",
                title: "Memory Packaging",
                page_start: "59",
                page_end: "62",
              },
            ],
          },
          {
            type: "section",
            number: "4",
            title: "Understanding Cooling Systems",
            page_start: "63",
            page_end: "70",
            children: [
              {
                type: "subsection",
                number: "1",
                title: "Fans",
                page_start: "63",
                page_end: "65",
              },
              {
                type: "subsection",
                number: "2",
                title: "Memory Cooling",
                page_start: "66",
                page_end: "67",
              },
              {
                type: "subsection",
                number: "3",
                title: "Hard Drive Cooling",
                page_start: "67",
                page_end: "67",
              },
              {
                type: "subsection",
                number: "4",
                title: "Chipset Cooling",
                page_start: "67",
                page_end: "67",
              },
              {
                type: "subsection",
                number: "5",
                title: "CPU Cooling",
                page_start: "67",
                page_end: "70",
              },
            ],
          },
        ],
      },
    ],
  },
];

table_of_contents.push({
  type: "part",
  number: "2",
  title: "220-1102",
  page_start: "814",
  page_end: "1651",
  children: [],
});
