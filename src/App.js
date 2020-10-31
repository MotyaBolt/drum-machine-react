import React from 'react';
import Main from './components/Main';
import './styles.css';
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div id="container">
        <Main/>
      </div>
    )
  }
}
export default App;
