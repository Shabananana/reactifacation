'use strict';

import React from 'react/addons';

var {
    Component,
    PropTypes
} = React;

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
                <h3>Create A League</h3>
            </div>
        );
    }
}

export default CreateLeague;
