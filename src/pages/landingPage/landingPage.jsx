import React from "react";
import BasePage from "../basePage/basePage";

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "YC"
        };
    }

    render() {
        return (
            <BasePage title={"Home Page"}>
                Hi, i am {this.state.name}
            </BasePage>
        );
    }
}
