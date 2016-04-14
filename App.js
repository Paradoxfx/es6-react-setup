/*import React from 'react';

 class App extends React.Component {
 constructor() {
 super();
 this.state = {
 input: '/!* add you jsx here *!/',
 output: '',
 err: ''
 }
 this.update = this.update.bind(this);
 }

 update(e) {
 let code = e.target.value;
 try {
 this.setState({
 output: babel.transform(code, {
 state: 0,
 loose: 'all'
 }).code,
 er: ''
 })
 }
 catch (err) {
 this.setState({err: err.message})
 }
 }

 render() {
 return (
 <div>
 <header>{this.state.err}</header>
 <div className="container">
 <textArea
 onChange={this.update}
 defaultValue={this.state.input}>
 </textArea>
 <pre>
 {this.state.output}
 </pre>
 </div>
 </div>
 )
 }
 }

 export default App*/


// Dynamically generated List
import React from 'react'
 import ReactDOM from 'react-dom'

 class App extends React.Component {
 constructor() {
 super();
 this.state = {
 data: [
 {id: 1, name: "Martin Odersky"},
 {id: 2, name: "Dan Robinson"},
 {id: 3, name: "Alan Key"},
 {id: 4, name: "Richard Thompson"},
 {id: 5, name: "Andrew Norton"},
 {id: 6, name: "Petya Ivanov"},
 {id: 7, name: "Denis Markov"},
 ]
 }

 }

 render() {
 let rows = this.state.data.map(person => {
 return <PersonRow key={person.id} data={person}/>
 })
 return <table>
 <tbody>{rows}</tbody>
 </table>
 }

 }

 const PersonRow = (props) => {
 return <tr>
 <td>{props.data.id}</td>
 <td>{props.data.name}</td>
 </tr>
 }

 export default App

// Flexible component
/*
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            red: 0
        }
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
        })
    }

    render() {
        return (
            <div>
                <NumInput
                    ref="red"
                    min={0}
                    max={255}
                    step={1}
                    val={+this.state.red}
                    type="range"
                    label="Red"
                    update={this.update}/>

            </div>
        );
    }
}

class NumInput extends React.Component {
    render() {
        let label = this.props.label !== '' ?
            <label>{this.props.label} - {this.props.val}</label> : ''
        return (
            <div>
                <input ref="inp"
                       type={this.props.type}
                       min={this.props.min}
                       max={this.props.max}
                       step={this.props.step}
                       defaultValue={this.props.val}
                       onChange={this.props.update}/>
                {label}
            </div>
        );
    }
}

NumInput.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    val: React.PropTypes.number,
    label: React.PropTypes.string,
    update: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
    min: 0,
    max: 0,
    step: 1,
    val: 0,
    label: '',
    type: 'range'
}

export default App
*/

/*import React from 'react';
 import ReactDOM from 'react-dom';

 let  Mixin = InnerComponent => class extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this)
        this.state = {val: 0}
    }

    update() {
        this.setState({val: this.state.val + 1})
    }

    componentWillMount() {
        console.log('will mount')
    }

    render() {
        return <InnerComponent
                update={this.update}
                {...this.state}
                {...this.props} />

    }

    componentDidMount() {
        console.log('mounted')
    }

}

 const Button = (props) => <button
 onClick={props.update}>
 {props.txt} - {props.val}
 </button>

 const Label = (props) => <label
 onMouseMove={props.update}>
 {props.txt} - {props.val}
 </label>

 let ButtonMixed = Mixin(Button)
 let LabelMixed = Mixin(Label)

 class App extends React.Component {

    render() {
        return (
            <div>
                <ButtonMixed txt="Button"/>
                <LabelMixed txt="Label"/>
            </div>
        )
    }
}

 export default App*/

/*
 import React from 'react';
 import ReactDOM from 'react-dom';
 class App extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this)
        this.state = {increasing: false}
    }

    update() {
        ReactDOM.render(
            <App val={this.props.val + 1}/>,
            document.getElementById('app')
        );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val})
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps)
    }

    render() {
        console.log(this.state.increasing)
        return <button onClick={this.update}>
            {this.props.val}
        </button>;
    }

}


 App.defaultProps = {val: 0}

 export default App
 */

/*import React from 'react';
 import ReactDOM from 'react-dom';
 class App extends React.Component {
    constructor() {
        super();
        this.state = {val: 0};
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({val: this.state.val + 1})
    }

    // this component will be called only once - before it placed in the DOM
    componentWillMount() {
       this.setState({k: 2})
    }

    render() {
        console.log("rendering!");
        return <button onClick={this.update}>{this.state.val * this.state.k}</button>;
    }

    // after component has been placed to the DOM
    componentDidMount() {
       this.inc = setInterval(this.update, 500)
    }

    // when wi will remove the component from the DOM
    componentWillUnmount() {
        clearInterval(this.inc)
    }

}

 class Wrapper extends React.Component {
    constructor() {
        super();
    }
    mount() {
        ReactDOM.render(<App />, document.getElementById('a'));
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
    }

    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="a"></div>
            </div>
        );
    }

}

 export default Wrapper*/


// Accessing  Child Properties

/*import React from 'react';
 import ReactDOM from 'react-dom';
 class App extends React.Component {
 render() {
 return  <Button>I <Heart/> REACT</Button>;
 }
 }

 class Button extends React.Component {
 render(){
 return <button>{this.props.children}</button>
 }
 }

 const Heart = () => <span className="glyphicon glyphicon-heart"> </span>

 ReactDOM.render(
 <App />
 ,
 document.getElementById('app')
 );

 export default App*/



// Sliders
/*import React from 'react';
 import ReactDOM from 'react-dom';
 class App extends React.Component {
 constructor() {
 super();
 this.state = {
 red: 0,
 green: 0,
 blue: 0
 }
 this.update = this.update.bind(this)
 }

 update(e) {
 this.setState({
 red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
 green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
 blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
 })
 }

 render() {
 return (
 <div>
 <Slider ref="red" update={this.update}/>
 {this.state.red}
 <br />
 <Slider ref="green" update={this.update}/>
 {this.state.green}
 <br />
 <Slider ref="blue" update={this.update}/>
 {this.state.blue}
 <br />
 </div>
 );
 }
 }

 class Slider extends React.Component {
 render() {
 return (
 <div>
 <input ref="inp" type="range"
 min="0"
 max="255"
 onChange={this.props.update}/>
 </div>
 );
 }
 }*/

// Stateless function component
/*const Widget = (props) => {
 return (
 <div>
 <input type="text"
 onChange={props.update}/>
 <h1>{props.txt}</h1>
 </div>
 );
 }*/

/*
 App.propTypes = {
 txt: React.PropTypes.string,
 cat: React.PropTypes.number
 };

 App.defaultProps = {
 txt: ' React is awesome!!!',
 cat: 12
 };
 */


