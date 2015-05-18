'use strict';

jest.dontMock('../HomeContainer');

import Immutable from 'immutable';
import React from 'react/addons';
import HomeContainer from '../HomeContainer';
import InviteLeague from '../InviteLeague';
import CreateLeague from '../CreateLeague';
import League from '../League';

var { TestUtils } = React.addons;

var mockPlayers = [];
var mockLeagues = Immutable.fromJS([
    {
        leagueId: 1,
        name: 'Test 1',
        sport: 1,
        leagueSource: '/',
        players: mockPlayers,
        deadline: new Date(),
        isCommissioner: false,
        isInvitation: false,
        leagueDues: 1000
    },
    {
        leagueId: 2,
        name: 'Test 2',
        sport: 1,
        leagueSource: '/',
        players: mockPlayers,
        deadline: new Date(),
        isCommissioner: true,
        isInvitation: false,
        leagueDues: 1000
    },
    {
        leagueId: 3,
        name: 'Test 3',
        sport: 8,
        leagueSource: '/',
        players: mockPlayers,
        deadline: new Date(),
        isCommissioner: false,
        isInvitation: true,
        inviterName: 'Joe Shmoe',
        leagueDues: 1000
    }
]);

describe('HomeContainer', () => {
    it('renders appropriate league components', () => {
        var homeContainer = TestUtils.renderIntoDocument(
            <HomeContainer leagues={mockLeagues} />
        );
        var leagues = TestUtils.scryRenderedComponentsWithType(homeContainer, League);
        var inviteLeagues = TestUtils.scryRenderedComponentsWithType(homeContainer, InviteLeague);
        var createLeagues = TestUtils.scryRenderedComponentsWithType(homeContainer, CreateLeague);
        expect(leagues.length).toBe(2);
        expect(inviteLeagues.length).toBe(1);
        expect(createLeagues.length).toBe(1);
    });
});
