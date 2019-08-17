import React, {Component} from "react";
import withStyles from "react-jss";
import {compose} from "redux";
import {withHighlight} from "../hocs/withHighlight";
import classNames from "classnames";

const styles = {
    todoList: {
        padding: "2rem"
    }
};

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: []
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.setState(state => ({
                items: [...state.items, state.value],
                value: ''
            }));
        }
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div {...this.props} className={classNames(this.props.className, this.props.classes.todoList)}>
                <h3>Todo list</h3>
                <input type={'text'}
                       onKeyPress={this.handleKeyPress}
                       onChange={this.handleChange}
                       value={this.state.value}/>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

TodoList.propTypes = {};

TodoList.defaultProps = {};

export default compose(
    withStyles(styles),
    withHighlight
)(TodoList);