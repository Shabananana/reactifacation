'use strict';

import {List} from 'immutable';
import React from 'react/addons';

var {
    Component,
    PropTypes
} = React;

class EntryGraphic extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate() {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }
    render() {
        return (
            <p>graphic</p>
        );
    }
}

EntryGraphic.propTypes = {
    leagueDues: PropTypes.number.isRequired,
    players: PropTypes.instanceOf(List)
};

export default EntryGraphic;
