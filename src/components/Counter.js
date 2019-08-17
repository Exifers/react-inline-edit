import React, {Component} from "react";
import withStyles from "react-jss";
import {compose} from "redux";
import {withHighlight} from "../hocs/withHighlight";
import classNames from "classnames";

const styles = {
    counter: {
        padding: "2rem"
    }
};

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    render() {
        return (
            <div {...this.props} className={classNames(this.props.classes.counter, this.props.className)}>
                <h3>Counter</h3>
                <p>Value : {this.state.count}</p>
                <button onClick={this.handleClick}>Click me !</button>
            </div>
        );
    }
}

Counter.propTypes = {};

Counter.defaultProps = {};

export default compose(
    withStyles(styles),
    withHighlight,
)(Counter);