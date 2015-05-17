'use strict';

import React from 'react/addons';
import EntryGraphic from './EntryGraphic';

var {
    Component,
    PropTypes
} = React;

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

League.propTypes = {
    leagueId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sport: PropTypes.number.isRequired,
    leagueSource: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired,
    deadline: PropTypes.instanceOf(Date),
    isCommisioner: PropTypes.bool.isRequired
};

export default League;
