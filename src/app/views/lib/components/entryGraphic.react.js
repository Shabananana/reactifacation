'use strict';

import React from 'react';

var { Component } = React;

class EntryGraphic extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate () {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }
    render() {
        return (
            <p>graphic</p>
        );
    }
}

module.exports = EntryGraphic;
