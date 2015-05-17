'use strict';

import { Map, List } from 'immutable';
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
            leagues: props.leagues,
            displayAll: false
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
                    key={league.get('leagueId')}
                    leagueId={league.get('leagueId')}
                    name={league.get('name')}
                    sport={league.get('sport')}
                    inviterName={league.get('inviterName')}
                    leagueSource={league.get('leagueSource')} /> :
                <League
                    key={league.get('leagueId')}
                    leagueId={league.get('leagueId')}
                    name={league.get('name')}
                    sport={league.get('sport')}
                    leagueSource={league.get('leagueSource')}
                    isCommissioner={league.get('isCommissioner')}
                    leagueDues={league.get('leagueDues')}
                    players={league.get('players')} />
                );
        return (
            <div>
                <h1>container</h1>
                {createLeague}
                {leagueComponents.slice(0, (pageSize - 1))}
                <span>{this.state.leagues.size - pageSize} more</span>
            </div>
        );
    }
}

HomeContainer.propTypes = {
    leagues: PropTypes.instanceOf(List).isRequired
};

export default HomeContainer;
