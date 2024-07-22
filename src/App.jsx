import React from 'react';
import './App.css'
import ReactMarkdown from "react-markdown";

const defualtMarkdown = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userMarkdown : defualtMarkdown,
      outputMarkdown: defualtMarkdown
    };

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event){
    this.setState({
      userMarkdown: event.target.value,
      outputMarkdown: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1 id="main-header">Markdown Previewer</h1>
        <div className="boxes-container">
          <div id="editor-div">
            <h2 id="editor-header">Editor</h2>
            <textarea value={this.state.userMarkdown} onChange={this.handleChange} name="editor" id="editor"></textarea>
          </div>
          <div id="preview-div">
            <h2 id="preview-header">Preview</h2>
            <div id="preview"><ReactMarkdown>{this.state.outputMarkdown}</ReactMarkdown></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
