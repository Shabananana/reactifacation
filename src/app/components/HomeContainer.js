'use strict';

import { Map } from 'immutable';
import React from 'react/addons';
import InviteLeague from './InviteLeague';
import CreateLeague from './CreateLeague';
import League from './League';

var {
    Component,
    PropTypes
} = React;

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 6,
            leagues: props.leagues
        };
    }
    render() {
        var createLeague = <CreateLeague />;
        var leagueComponents = this.state.leagues.map(
            league => league.isInvitation ? <InviteLeague /> : <League />);
        return (
            <div>
                <h1>container</h1>
                {createLeague}
                {leagueComponents}
                <span>{this.state.leagues.length - this.state.pageSize} more</span>
            </div>
        );
    }
}

HomeContainer.propTypes = {
    leagues: PropTypes.array.isRequired//PropTypes.instanceOf(Map).isRequired
};

export default HomeContainer;
