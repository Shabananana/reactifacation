'use strict';

import React from 'react/addons';
import EntryGraphic from './EntryGraphic';

var { Component } = React;

class League extends Component {
    constructor(props) {
        super(props);
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
