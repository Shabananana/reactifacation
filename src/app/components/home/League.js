'use strict';

import React from 'react/addons';
import EntryGraphic from '../EntryGraphic';

var {
    Component,
    PropTypes
} = React;

class League extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate () {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }
    render() {
        var entryGraphic = <EntryGraphic leagueDues={this.props.leagueDues} players={this.props.players} />;
        return (
            <div>
                <h3>League</h3>
                <p>Name: {this.props.name}</p>
                <p>SportId: {this.props.sport}</p>
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
    isCommissioner: PropTypes.bool.isRequired
};

export default League;
