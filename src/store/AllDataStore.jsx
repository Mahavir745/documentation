import { createContext, useReducer, useState } from "react";

export const dataProvider = createContext({
  Overview: [],
  AllCurriculum: [],
  validationData: {},
  verifyUser:()=>{}
})

const HandleValidation = (currentData,action)=>{
  let newData = currentData;
  if(action.type === 'VERYFY_USER'){  let documentation = localStorage.getItem("documentation")
    newData = {...action.payload}
  }
  return newData;
}

const DataStoreProvider = ({ children }) => {

  const [validationData,dispatchedValidation] = useReducer(HandleValidation,{});

  const verifyUser = (batch,hvaId,emailId)=>{
    dispatchedValidation({
      type: "VERYFY_USER",
      payload:{
        batch,hvaId,emailId
      }
    })
  }

  //todo: summary Part
  const Overview = [
    {
      name: "frontend",
      about: "Frontend development focuses on creating the visual and interactive parts of a website or application that users see and interact with directly. It involves:",
      points: [
        "Structure with HTML: Defines the basic layout and content of a webpage.",
        "Styling with CSS: Adds design elements like colors, fonts, and layouts to make the site visually appealing.",
        "Interactivity with JavaScript: Brings life to the site by enabling features like buttons, animations, and dynamic content updates.",

      ],
      summary: "Frontend development is all about building user-friendly, attractive, and responsive interfaces for a great user experience.",
      link: "frontend"
    },
    {
      name: "backend",
      about: "Backend development focuses on the server-side logic, database interactions, and functionality that power a website or application behind the scenes. It involves:",
      points: [
        "Server-Side Programming: Uses languages like Python, Java, Node.js, or PHP to process requests and execute logic.",
        "Database Management: Stores, retrieves, and manages data using databases like MySQL, MongoDB, or PostgreSQL.",
        "API Development: Facilitates communication between the frontend and backend through RESTful APIs or GraphQL.",
        "Authentication and Security: Ensures data integrity, user authentication, and secure connections.",
      ],
      summary: "Backend development provides the foundation and functionality that make applications efficient, scalable, and secure.",
      link: "backend"
    },
    {
      name: "dataAnalysis",
      about: "Data analysis focuses on extracting meaningful insights and trends from raw data to support decision-making and predictions. It involves:",
      points: [
        "Data Collection: Gathering data from various sources such as databases, APIs, or third-party tools.",
        "Data Cleaning: Preparing and organizing data by removing inconsistencies and errors.",
        "Statistical Analysis: Identifying patterns and trends using mathematical and statistical techniques.",
        "Visualization: Presenting insights through charts, graphs, and dashboards using tools like Tableau or Matplotlib.",
        "Predictive Modeling: Applying machine learning and algorithms to forecast future outcomes.",
      ],
      summary: "Data analysis transforms raw data into actionable knowledge, helping businesses and individuals make informed decisions.",
      link: "dataAnalysis"
    }
  ]

  //todo: curriculum Part
  const AllCurriculum = [
    {
      name: "frontend",
      curriculum: [
        {
          title: "HTML Curriculum",
          data: [
            {
              summary: "Basic Concepts of Web Development",
              tasklist: [
                "Server and Client - General Terms",
                "Request and Response - Communication between a Client and a Server",
                "Internet and IP address",
                "Web Server, Browser and their role",
                "Communication between a Browser and a Web Server (Similar to any Client-Server communication HTML rendering by the browser, HTTP Protocol, View Page source for response) "
              ]
            },
            {
              summary: "HTML Introduction",
              tasklist: [
                " What is HTML and its significance?",
                "Basic structure of an HTML document",
                "Indentation and its importance",
                "HTML Tags, Elements and Attributes",
                "Self Closing Tags",
                "The different tags of the basic structure of an HTML document",
              ]
            },
            {
              summary: "Basic HTML Tags",
              tasklist: [
                "Elementary Tags like: <h1> <h2> <h3> <h4> <h5> <h6>, <p>, <br/>, <hr/>, <img>, <a>, <div>, <span>",
                "Formatting Tags: <b>, <i> etc",
                "Block v/s Inline Tags: Basic Idea",
                "Lists: <ol>, <ul>, <dl>, Nested list",
                "Tables: <table>, <tr>, <th>, <td>, Border, Cellspacing, Cellpadding, Height, Width",
              ]
            },
            {
              summary: "Forms",
              tasklist: [
                "Significance of an HTML Form",
                "Different Input Elements: Text Box, Password, Radio Button, Checkbox, Drop Down, Text Area",
                "Submit Button",
                "Action attribute. Method attribute (only type of request)",
              ]
            },
          ]
        },
        {
          title: "Css Curriculum",
          data: [
            {
              summary: "CSS Introduction",
              tasklist: [
                "What is CSS?",
                "Three ways to include styling: Inline Style, Internal Styling, External CSS",
                "CSS syntax: Selectors, Properties, Values",
                "Precedence of including styling",
                "Folder Structure",
                "How CSS is loaded and rendered - Separate request while the HTML gets rendered",
                "Absolute or Relative URLs when including CSS file",
              ]
            },
            {
              summary: "CSS Selectors",
              tasklist: [
                "Element / Type Selectors",
                "Id Selectors",
                "Class Selectors",
                "Combination Selectors",
                "Hierarchy: Child and Descendant",
                "Child Selectors",
                "Descendant Selectors",
                "Grouping Selectors",
                "Attribute Selectors",
              ]
            },
            {
              summary: "Length Units & Colour",
              tasklist: [
                "Pixels in General",
                "Pixels in Web Development",
                "Device Pixel v/s Logical Pixel",
                "Percentage length unit",
                "Colors: Names, RGB, Hex",
              ]
            },
            {
              summary: "Basic CSS Properties",
              tasklist: [
                "Default Values",
                "Color",
                "Background Color",
                "Font-family",
                "Font-size",
                "Font-weight",
                "Font-style",
                "Text-decoration",
                "Text-align",
                "Line-height",
              ]
            },
            {
              summary: "Box Model",
              tasklist: [
                "Borders: border-style, border-width, border-color, border (shorthand property), border sub-properties (border-top, border-right, border-bottom, border-left)",
                "Padding: Multiple values for individual sides, padding sub-properties",
                "Margin: Multiple values for individual sides, margin sub-properties",
                "Height and width: Box Sizing - Content Box vs Border Box",
                "Default values for height and width properties",
              ]
            },
            {
              summary: "Inspect Element",
              tasklist: [
                "Dock Side, Element Tab, Left Section, Right Section, Box Model, Computed Tab, Styles Tab (edits), Toggle Device, How to Debug",
              ]
            },
            {
              summary: "Display",
              tasklist: [
                "Block, Inline, Inline-block",
                "Tabular comparison - previous element, next element, default width, explicit height / width",
                "Display: none",
              ]
            },
            {
              summary: "Positioning",
              tasklist: [
                "Static | Positioned element",
                "Relative | top, bottom, left, right properties",
                "Fixed",
                "Absolute",
                "Tabular comparison of 'with respect to' and 'flow gap'",
                "Z-index - positioned",
              ]
            },
            {
              summary: "Page Layouts - Structuring a webpage",
              tasklist: [
                "How to create a layout - box inside another box, either horizontal or vertical.",
                "Vertical and Horizontal alignment of elements.",
                "Idea about height and width. Width is generally fixed, Height is generally content-based.",
                "Page Layout using Display: inline-block",
                "Page Layout using Float",
                "Idea of clearfix",
                "Page Layout using Flexbox",
              ]
            },
            {
              summary: "Flexbox",
              tasklist: [
                "The flex container and flex items",
                "The two axes of flexbox",
                "Flex-direction",
                "Flex-basis, Available and deficit space, Flex-grow, Flex-shrink, Flex shorthand",
                "Flex-wrap, Flex-flow shorthand",
                "Justify-content, Align-items, Align-self",
              ]
            },
            {
              summary: "Media Queries",
              tasklist: [
                "Explain the problem of viewing in different devices.",
                "Explain the possible solution - design for different views",
                "Viewport",
                "Media Query",
                "Inspect Element",
              ]
            },
          ]
        },
        {
          title: "JavaScript Curriculum",
          data: [
            {
              summary: "Introduction",
              tasklist: [
                "What is JavaScript?",
                "Introduce JavaScript as a simple programming language and not as a client-side language.",
                "What is Node? What is NPM? Installation",
                "Run the code on Command Line or Terminal.",
              ]
            },
            {
              summary: "Variables, Data Types and Operators",
              tasklist: [
                "Variables - concept",
                "let, var, const",
                "\"use strict\"; - restrict from using older syntax",
                "Datatypes",
                "Integer, float, string, etc",
                "Variables can store data of any datatype without having to mention it.",
                "Operators and Expressions",
                "Arithmetic Operators: + - * / % **",
                "Assignment Operators: = += -= *= /= %= **=",
                "Increment / Decrement Operators: ++ --",
                "Comparison Operators: == === != !== < <= > >=",
                "Logical Operators: && || !",
                "Typeof",
              ]
            },
            {
              summary: "Conditionals and Loops",
              tasklist: [
                "Conditional Statements",
                "If-statements",
                "if-else statements",
                "if-<else if>-else statements",
                "Switch statement",
                "Loops",
                "While",
                "Do While",
                "For",
                "Break",
                "Continue",
                "For-of (revisit in Arrays)",
                "For-in (revisit in Objects)",
                "Foreach (revisit in Arrays)",
              ]
            },
            {
              summary: "Functions",
              tasklist: [
                "What is a function? Why it is used?",
                "Syntax: the two parts, Function Definition and Function Calling",
                "Default Value for Arguments",
                "Call By Value / Reference",
                "Function Expressions",
                "Arrow functions",
                "Callback Functions and Higher Order Functions",
              ]
            },
            {
              summary: "Objects and Classes",
              tasklist: [
                "What is an Object?",
                "Properties and Methods",
                "Creating objects",
                "Object Initializer: Dot operator and Square Brackets",
                "Using new Object()",
                "Function constructor",
                "Class",
                "For-in loop",
              ]
            },
            {
              summary: "Arrays",
              tasklist: [
                "What is an Array?",
                "For-of Loop",
                "Arrays are Objects",
                "Array methods: foreach(), map(), filter()",
                "Rest Parameters",
                "Spread Operator",
              ]
            },
            {
              summary: "Strings",
              tasklist: [
                "What is a String?",
                "Concatenation",
                "Template Literals",
                "Strings as Objects",
                "String Methods: indexOf(), slice(), replace(), startsWith(), endsWith(), include() etc",
                "Regular expressions",
              ]
            },
            {
              summary: "JavaScript as a Client-side Language",
              tasklist: [
                "Idea of a client-side language and its extent",
                "JavaScript can run on a browser. This allows JavaScript to:",
                "Capture any user action",
                "Editing HTML elements",
                "Hence, JavaScript is used to create user-interactive web pages.",
                "Using JavaScript along with HTML and CSS",
                "Folder structure for JS files in a project.",
                "How to include JS files and how they are fetched as separate requests.",
                "<script> tags can also be used - should be at the end, we will learn later why.",
              ]
            },
            {
              summary: "Inspect Element",
              tasklist: [
                "Debugging using Source tab",
                "Analyzing Requests and Responses using Network Tab",
              ]
            },
            {
              summary: "DOM",
              tasklist: [
                "DOM Tree",
                "Document Object",
                "Document Object Methods: getElementById(), getElementsByClassName(), getElementsByTagName(), querySelectorAll()",
                "Return type: Node Object",
                "Node Object Properties: parentNode, childNodes, firstElementChild, etc",
                "Node Object Properties and Methods: innerHTML, style, etc",
                "Event Handlers: Click, Double Click, Mouse Enter, Key Press, Mouse Over",
              ]
            },
            {
              summary: "Asynchronous JavaScript",
              tasklist: [
                "Introduction to Asynchronous JavaScript",
                "Synchronous vs Asynchronous Programming",
                "The Event Loop",
                "Callbacks and the \"Callback Hell\" Problem",
                "Timers",
                "setTimeout",
                "setInterval",
                "Clearing Timers (clearTimeout, clearInterval)",
                "Promises",
                "Introduction to Promises",
                "Creating Promises",
                "Chaining Promises with .then()",
                "Error Handling with .catch()",
                "The finally Method",
                "Common Promise Methods: Promise.all, Promise.race, Promise.allSettled, Promise.any",
                "Async/Await",
                "Introduction to async and await",
                "Writing Asynchronous Functions",
                "Error Handling in Async/Await",
                "Combining Async/Await with Promises",
              ]
            },
            {
              summary: "API's",
              tasklist: [
                "Making HTTP Requests with Fetch",
                "Handling Responses (JSON, text, etc.)",
                "Error Handling in Fetch",
                "Using Fetch with Async/Await",
              ]
            },
          ]
        },
        {
          title: "React Curriculum",
          data: [
            {
              summary: "Introduction to Next.js",
              tasklist: [
                "What is Next.js?",
                "Overview of Next.js and its benefits over Create React App",
                "Understanding server-side rendering (SSR) and static site generation (SSG)",
              ]
            },
            {
              summary: "Setting Up a Next.js App",
              tasklist: [
                "Installation and creating a new Next.js project",
                "Understanding the folder structure",
                "Running the development server and building for production",
              ]
            },
            {
              summary: "Pages and Routing",
              tasklist: [
                "Pages in Next.js",
                "Creating pages using the pages directory",
                "Understanding file-based routing",
                "Linking Between Pages",
                "Using the Link component for client-side transitions",
                "Navigating programmatically using useRouter",
                "Dynamic Routing",
                "Creating dynamic routes with file names in square brackets [id].js",
                "Fetching data for dynamic routes",
              ]
            },
            {
              summary: "Creating and Rendering Elements",
              tasklist: [
                "React Elements in Next.js",
                "Creating elements using JSX and React.createElement",
                "Rendering elements within pages and components",
                "Nested Elements and Attributes",
                "Composing nested elements with attributes like className, id, etc.",
              ]
            },
            {
              summary: "Components",
              tasklist: [
                "What is a Component?",
                "Understanding components in the context of Next.js",
                "Creating Components",
                "Function components vs Class components in Next.js",
                "Organizing components in the components directory",
                "Using Components in Pages",
                "Importing and rendering components within pages",
                "Composing Components",
                "Nesting components to build more complex UIs",
              ]
            },
            {
              summary: "JSX in Next.js",
              tasklist: [
                "JSX Syntax and Purpose",
                "Understanding how JSX works in Next.js",
                "Writing clean and efficient JSX",
                "JSX in Components and Pages",
                "Using JSX for both page components and UI components",
                "Using Babel in Next.js",
                "How Next.js automatically handles JSX with Babel",
              ]
            },
            {
              summary: "Props",
              tasklist: [
                "Understanding Props in Next.js",
                "Passing props to components in pages",
                "Static generation and props with getStaticProps",
                "Accessing and Using Props",
                "Accessing props in class and functional components",
                "Using props for dynamic content rendering",
              ]
            },
            {
              summary: "State",
              tasklist: [
                "State in Next.js Components",
                "Using state within functional components with useState",
                "Initializing state and handling state changes",
                "Global State Management (Introduction)",
                "Introduction to global state management with Context API or third-party libraries",
              ]
            },
            {
              summary: "Fetching Data",
              tasklist: [
                "Data Fetching Methods",
                "Overview of getStaticProps, getServerSideProps, and getStaticPaths",
                "Fetching Data for Static Pages",
                "Using getStaticProps to fetch data at build time",
                "Fetching data for dynamic routes with getStaticPaths",
                "Fetching Data for Server-Side Rendering",
                "Using getServerSideProps for fetching data at request time",
              ]
            },
            {
              summary: "Handling Events",
              tasklist: [
                "Event Handling in Next.js",
                "Handling events in components",
                "Form Handling",
                "Creating and managing form submissions",
                "Method Binding",
                "Handling this context in class components (if used)",
              ]
            },
            {
              summary: "Routing and Navigation",
              tasklist: [
                "Next.js Routing Features",
                "Client-side transitions with Link",
                "Navigating between pages programmatically",
                "Nested and Dynamic Routes",
                "Building complex routes with Next.js",
                "API Routes",
                "Creating API routes within the pages/api directory",
                "Fetching data from these routes in components",
              ]
            },
            {
              summary: "Conditional Rendering",
              tasklist: [
                "Conditional Rendering Techniques",
                "Using JSX for conditional rendering",
                "Rendering based on data fetched with Next.js methods",
                "Handling Loading States",
                "Displaying loading indicators while fetching data",
              ]
            },
            {
              summary: "Forms and User Input",
              tasklist: [
                "Controlled Components in Next.js",
                "Managing form state with useState",
                "Form Validation",
                "Validating user input before submission",
                "Handling Submissions with API Routes",
                "Submitting form data to API routes in Next.js",
              ]
            },
            {
              summary: "Lifecycle and Effects",
              tasklist: [
                "Introduction to useEffect",
                "Managing side effects in functional components",
                "Component Lifecycle in Functional Components",
                "Understanding how useEffect mimics lifecycle methods",
                "Fetching Data with useEffect",
                "Fetching client-side data with useEffect",
              ]
            },
            {
              summary: "Advanced Topics (Introduction)",
              tasklist: [
                "Introduction to React Hooks",
                "useState, useEffect, and custom hooks",
                "Introduction to Context API",
                "Managing global state across components and pages",
                "Introduction to Styled JSX",
                "Writing scoped CSS within components",
              ]
            }
          ]
        }
      ]
    },
    {
      name: "backend",
      curriculum: [
        {
          title: "HTML Curriculum",
          data: [
            {
              summary: "Basic Concepts of Web Development",
              tasklist: [
                "Server and Client - General Terms",
                "Server and Client - General Terms"
              ]
            },
            {
              summary: "Basic Concepts of Web Development",
              tasklist: [
                "Server and Client - General Terms",
                "Server and Client - General Terms"
              ]
            },
            {
              summary: "Basic Concepts of Web Development",
              tasklist: [
                "Server and Client - General Terms",
                "Server and Client - General Terms"
              ]
            },
          ]
        },
        {
          title: "Css Curriculum",
          data: [
            {
              summary: "Basic Concepts of Web Development",
              tasklist: [
                "Server and Client - General Terms",
                "Server and Client - General Terms"
              ]
            },
            {
              summary: "Basic Concepts of Web Development",
              tasklist: [
                "Server and Client - General Terms",
                "Server and Client - General Terms"
              ]
            },
            {
              summary: "Basic Concepts of Web Development",
              tasklist: [
                "Server and Client - General Terms",
                "Server and Client - General Terms"
              ]
            },
          ]
        },
      ]
    },
    {
      name: "dataAnalysis",
      curriculum: [
        {
          title: "HTML Curriculum",
          data: [
            {
              summary: "Basic Concepts of Web Development",
              tasklist: [
                "Server and Client - General Terms",
                "Server and Client - General Terms"
              ]
            },
            {
              summary: "Basic Concepts of Web Development",
              tasklist: [
                "Server and Client - General Terms",
                "Server and Client - General Terms"
              ]
            },
            {
              summary: "Basic Concepts of Web Development",
              tasklist: [
                "Server and Client - General Terms",
                "Server and Client - General Terms"
              ]
            },
          ]
        },
        {
          title: "Css Curriculum",
          data: [
            {
              summary: "Basic Concepts of Web Development",
              tasklist: [
                "Server and Client - General Terms",
                "Server and Client - General Terms"
              ]
            },
            {
              summary: "Basic Concepts of Web Development",
              tasklist: [
                "Server and Client - General Terms",
                "Server and Client - General Terms"
              ]
            },
            {
              summary: "Basic Concepts of Web Development",
              tasklist: [
                "Server and Client - General Terms",
                "Server and Client - General Terms"
              ]
            },
          ]
        },
      ]
    },
  ]

  return (
    <dataProvider.Provider value={{
      Overview,
      AllCurriculum,
      validationData,
      verifyUser,
    }}>
      {children}
    </dataProvider.Provider>
  )
}

export const defaultVerifyUser = [
  {
    batch: "frontend",
    hvaId: "24034",
    email: "mahavir23@navgurukul.org"
  }
]

export default DataStoreProvider;


