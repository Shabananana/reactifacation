import Immutable from 'immutable';
import HomeContainer from '../../app/components/home/HomeContainer';
import React from 'react/addons';

var players = [];
var leagues = [
    {
        leagueId: 1,
        name: 'Test 1',
        sport: 1,
        leagueSource: '/',
        players: players,
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
        players: players,
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
        players: players,
        deadline: new Date(),
        isCommissioner: false,
        isInvitation: true,
        inviterName: 'Joe Shmoe',
        leagueDues: 1000
    },
    {
        leagueId: 4,
        name: 'Test 4',
        sport: 3,
        leagueSource: '/',
        players: players,
        deadline: new Date(),
        isCommissioner: false,
        isInvitation: false,
        leagueDues: 1000
    },
    {
        leagueId: 5,
        name: 'Test 5',
        sport: 12,
        leagueSource: '/',
        players: players,
        deadline: new Date(),
        isCommissioner: true,
        isInvitation: false,
        leagueDues: 1000
    },
    {
        leagueId: 6,
        name: 'Test 6',
        sport: 6,
        leagueSource: '/',
        players: players,
        deadline: new Date(),
        isCommissioner: false,
        isInvitation: true,
        inviterName: 'Bob Test',
        leagueDues: 1000
    },
    {
        leagueId: 7,
        name: 'Test 7',
        sport: 7,
        leagueSource: '/',
        players: players,
        deadline: new Date(),
        isCommissioner: false,
        isInvitation: false,
        leagueDues: 1000
    },
    {
        leagueId: 8,
        name: 'Test 8',
        sport: 4,
        leagueSource: '/',
        players: players,
        deadline: new Date(),
        isCommissioner: true,
        isInvitation: false,
        leagueDues: 1000
    },
    {
        leagueId: 9,
        name: 'Test 9',
        sport: 8,
        leagueSource: '/',
        players: players,
        deadline: new Date(),
        isCommissioner: false,
        isInvitation: true,
        inviterName: 'Jill Someone',
        leagueDues: 1000
    }
]

var homeContainerElement = <HomeContainer leagues={leagues} />;

React.render(homeContainerElement, document.getElementById('react-container'));
