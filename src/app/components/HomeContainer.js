'use strict';

import React from 'react/addons';
import InviteLeague from './InviteLeague';
import CreateLeague from './CreateLeague';
import League from './League';

var { Component } = React;

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var league = <League />;
        var inviteLeage = <InviteLeague />;
        var createLeague = <CreateLeague />;
        return (
            <div>
                <h1>container</h1>
                {createLeague}
                {league}
                {inviteLeage}
            </div>
        );
    }
}

export default HomeContainer;
