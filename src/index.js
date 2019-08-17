import ReactDOM from "react-dom";
import React, {Component} from "react";
import AppsPane from "./panes/AppsPane";

class App extends Component {
    render() {
        return (
            <AppsPane/>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
