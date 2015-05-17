'use strict';

import React from 'react/addons';

var {
    Component,
    PropTypes
} = React;

class EntryGraphic extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p>graphic</p>
        );
    }
}

EntryGraphic.propTypes = {
    leagueDues: PropTypes.number.isRequired,
    players: PropTypes.array
};

export default EntryGraphic;
