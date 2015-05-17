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
    render() {
        return (
            <div>
                <p>invite leage</p>
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
