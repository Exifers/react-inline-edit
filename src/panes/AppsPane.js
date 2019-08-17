import React, {Component} from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import {compose} from "redux";
import Counter from "../components/Counter";
import TodoList from "../components/TodoList";
import {withHighlight} from "../hocs/withHighlight";

const styles = {
    appsPane: {
        padding: "2rem"
    }
};

class AppsPane extends Component {
    render() {
        return (
            <div {...this.props} className={classNames(this.props.className, this.props.classes.appsPane)}>
                <Counter/>
                <TodoList/>
            </div>
        );
    }
}

AppsPane.propTypes = {};

AppsPane.defaultProps = {};

export default compose(
    withStyles(styles)
)(AppsPane);