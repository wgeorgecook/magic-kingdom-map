import React, { Component } from 'react';


class ErrorBoundary extends Component {

    state = {
        hasError: false,
        log: false,
        data: false
    }

    componentDidCatch(error, info) {
        this.setState(
            {
                hasError: true,
            })
    }

    render() {
        if (this.state.hasError) {
            return(
                <div id="mapError">
                    We apologize, but the map could not be loaded right now. Please try again soon.
                </div>
            )
        }
        return(this.props.children)
    }
}

export default ErrorBoundary