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
            leagues: props.leagues
        };
    }
    shouldComponentUpdate () {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }
    render() {
        var pageSize = 6;
        var createLeague = <CreateLeague />;
        var leagueComponents = this.state.leagues.map(
            league => league.isInvitation ?
                <InviteLeague
                    key={league.leagueId}
                    leagueId={league.leagueId}
                    name={league.name}
                    sport={league.sport}
                    inviterName={league.inviterName}
                    leagueSource={league.leagueSource} /> :
                <League
                    key={league.leagueId}
                    leagueId={league.leagueId}
                    name={league.name}
                    sport={league.sport}
                    leagueSource={league.leagueSource}
                    isCommissioner={league.isCommissioner}
                    leagueDues={league.leagueDues}
                    players={league.players} />
                );
        return (
            <div>
                <h1>container</h1>
                {createLeague}
                {leagueComponents.slice(0, (pageSize - 1))}
                <span>{this.state.leagues.length - pageSize} more</span>
            </div>
        );
    }
}

HomeContainer.propTypes = {
    leagues: PropTypes.array.isRequired//PropTypes.instanceOf(Map).isRequired
};

export default HomeContainer;
