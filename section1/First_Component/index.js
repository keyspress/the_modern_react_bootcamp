class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello bear!</h1>
        <h1>Hello Cher!</h1>
        <h1>Hello there!</h1>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));
