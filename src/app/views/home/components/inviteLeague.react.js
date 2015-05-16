'use strict';

import React from 'react';

var { Component } = React;

class InviteLeague extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate () {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }
    render() {
        return (
            <div>
                <p>invite leage</p>
            </div>
        );
    }
}

export default InviteLeague;
