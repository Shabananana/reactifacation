'use strict';

import React from 'react';
import InviteLeague from 'inviteLeague';
import CreateLeague from 'createLeague';
import League from 'league';

var { Component } = React;

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate () {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
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
