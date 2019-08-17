import React, {Component} from "react";
import withStyles from "react-jss";
import {compose} from "redux";
import classNames from "classnames";
import {readTextFile} from "../utils/file";

const styles = {
    wrappedComponent: {
        "&:hover": {
            cursor: "pointer"
        }
    },
    selected: {
        backgroundColor: '#ffaaaa'
    }
};

export const withHighlight = WrappedComponent => {
    class Wrapper extends Component {
        constructor(props) {
            super(props);

            this.state = {
                selected: false
            };

            this.handleClick = this.handleClick.bind(this);
            this.openPopup = this.openPopup.bind(this);
            this.closePopup = this.closePopup.bind(this);
        }

        handleClick(event) {
            if (this.state.selected) {
                this.setState({selected: false});
                this.closePopup(event);
            }
            else {
                this.setState({selected: true});
                this.openPopup(event);
            }
            event.stopPropagation(event);
        }

        openPopup(event) {
            let content = readTextFile("src/components/Counter.js");
            let element = document.createElement('pre');
            element.style.backgroundColor = "#eee";
            element.style.overflowY = "auto";
            element.style.padding = "1rem";
            element.style.position = "absolute";
            element.style.fontFamily = "\"Arial\", sans-serif";
            element.style.fontSize = "15px";
            element.style.top = event.clientY + "px";
            element.style.left = event.clientX + "px";
            element.setAttribute("contenteditable", "true");
            element.setAttribute("id","popup");
            element.innerText = content;
            document.getElementById('root').appendChild(element);
        }

        closePopup() {
            let popup = document.getElementById("popup");
            popup ? popup.remove() : null;
        }

        render() {
            return (
                <WrappedComponent
                    onClick={this.handleClick}
                    className={classNames(
                        this.props.classes.wrappedComponent,
                        this.state.selected ? this.props.classes.selected : null
                    )}
                    {...this.props}
                >
                    {this.props.children}
                </WrappedComponent>
            );
        }
    }

    Wrapper.propTypes = {};

    Wrapper.defaultProps = {};

    Wrapper = compose(
        withStyles(styles)
    )(Wrapper);

    return Wrapper;
};
