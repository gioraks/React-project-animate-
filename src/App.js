import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';
import './App.css';
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
{new Date().toDateString()}
{new Date().toLocaleDateString()}
function App() {
      const timer=function(){
          let time=new Date().toLocaleTimeString()
          return
  
  };
    return <><Clock date={new Date()} />
    </>

}

export default App;

/*class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Привет, **мир**!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Входные данные</h3>
        <label htmlFor="markdown-content">
          Введите что-то в формате Markdown
        </label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Вывод</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
  function App() {
    return (
        <div>
            <Welcome name="FIO:" /> <br />
            <Welcome name="Nomer:" /><br />
            <Welcome name="Email:" /><br />
            <Welcome name="data rogdeniya:" /><br />
            <Welcome name="biografia:" /><br />
        </div>


    );

}
*/