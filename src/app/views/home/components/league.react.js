'use strict';

import React from 'react';
import EntryGraphic from '../../lib/components/entryGraphic';

var { Component } = React;

class League extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate () {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }
    render() {
        var entryGraphic = <EntryGraphic />;
        return (
            <div>
                <p>league</p>
                {entryGraphic}
            </div>
        );
    }
}

export default League;
