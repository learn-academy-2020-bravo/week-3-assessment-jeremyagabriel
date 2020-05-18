// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. Set initial state of the user input variable, which is an empty string. This must be done within the constructor
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. Setting state of user input variable as the actual user input, i.e. "e.target.value.", where "e" represents the event being passed in which is the user input
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3. Destructuring userInput from state
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. Setting the on change event of the input to the robot method declared above */}
          onChange={ this.robot }
          {/* 5. Setting the value of the input to the actual user input */}
          value={ userInput }
        />

        <div>
          {/* 6. Rendering the GoodRobot component */}
          <GoodRobot
            {/* 7. Passing in the state variable userInput as a prop to the child component so that GoodRobot can use or display this value */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. Each render return can only return one node, so all HTML tags are placed in one div, though <React.Fragment> is preferred
      <div>
        <h3>Good Robot</h3>
        {/* 9. Use the passed in userInput variable from App to display whatever the current state userInput is*/}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. Exporting the GoodRobot component so it can render
export default GoodRobot
