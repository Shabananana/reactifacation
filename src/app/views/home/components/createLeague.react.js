'use strict';

import React from 'react';

var { Component } = React;

class CreateLeague extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate () {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }
    render() {
        return (
            <div>
                create league
            </div>
        );
    }
}

export default CreateLeague;
