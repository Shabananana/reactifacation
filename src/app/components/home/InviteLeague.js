'use strict';

import React from 'react/addons';

var {
    Component,
    PropTypes
} = React;

class InviteLeague extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate() {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }
    render() {
        return (
            <div>
                <h3>Invite League</h3>
                <p>Name: {this.props.name}</p>
                <p>SportId: {this.props.sport}</p>
            </div>
        );
    }
}

InviteLeague.propTypes = {
    leagueId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sport: PropTypes.number.isRequired,
    leagueSource: PropTypes.string.isRequired,
    inviterName: PropTypes.string.isRequired
};

export default InviteLeague;
