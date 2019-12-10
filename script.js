marked.setOptions({
  breaks: true });


// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder };


  }
  handleChange(event) {
    this.setState({
      markdown: event.target.value });

  }
  render() {
    return (

      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-md-6" },
      React.createElement("h1", { style: { textAlign: 'center', color: 'green' } }, "Markdown"),
      React.createElement("textarea", {
        style: { width: "350", height: "400" },
        id: "editor",
        value: this.state.markdown,
        onChange: () => this.handleChange(event) })),

      React.createElement("div", { className: "col-md-6" },
      React.createElement("h1", { style: { textAlign: 'center', color: 'green' } }, " Preview"),
      React.createElement("div", null,
      React.createElement(Preview, { markdown: this.state.markdown })))));





  }}



const Preview = props => {
  return React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(props.markdown) } });
};

const placeholder =
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

There's also [links](https://www.freecodecamp.com), and
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


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
ReactDOM.render(React.createElement(App, null), document.getElementById("app"));