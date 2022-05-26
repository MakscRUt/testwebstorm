import './App.css';
import NavBar  from "./components/NavBar"
import {
    Button,
    InputGroup,
    FormControl,
} from 'react-bootstrap';
import {useState} from "react";

function App() {
    const [data, setData] = useState({
        name: '',
        lastname: '',
        email: ''
    })

    const consoleLog = () =>{
        console.log(data)
    }

    const changeHandler = (event) =>{
        setData( {...data , [event.target.name]:event.target.value })
    }

  return (
    <div className="App">
        <NavBar />
      <header className="App-header">
          <br/>
          <InputGroup className="mb-3 w-50">
              <FormControl
                  placeholder="name"
                  aria-label="Username"
                  name="name"
                  aria-describedby="basic-addon1"
                  onChange={changeHandler}
              />
          </InputGroup>

          <InputGroup className="mb-3 w-50">
              <FormControl
                  placeholder="lastname"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="lastname"
                  onChange={changeHandler}
              />
          </InputGroup>

          <InputGroup className="mb-3 w-50">
              <FormControl
                  placeholder="email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  type="email"
                  name="email"
                  onChange={changeHandler}
              />
          </InputGroup>
          <br/>
          <Button variant="primary" onClick={consoleLog}>Send</Button>
      </header>
    </div>
  );
}

export default App;
