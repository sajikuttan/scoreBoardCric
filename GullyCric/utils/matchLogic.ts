// This file contains the logic for managing match interactions, including player management, scoring, and innings tracking.

import { Player, Match } from '../utils/firestoreSchema';

export class MatchLogic {
    private match: Match;

    constructor(match: Match) {
        this.match = match;
    }

    addPlayer(player: Player) {
        if (!this.match.teams.teamA.includes(player.id) && !this.match.teams.teamB.includes(player.id)) {
            // Add player to the default team (teamA)
            this.match.teams.teamA.push(player.id);
        }
    }

    removePlayer(playerId: string) {
        this.match.teams.teamA = this.match.teams.teamA.filter(id => id !== playerId);
        this.match.teams.teamB = this.match.teams.teamB.filter(id => id !== playerId);
    }

    splitTeams(autoSplit: boolean) {
        if (autoSplit) {
            const midIndex = Math.ceil(this.match.players.length / 2);
            this.match.teams.teamA = this.match.players.slice(0, midIndex).map(player => player.id);
            this.match.teams.teamB = this.match.players.slice(midIndex).map(player => player.id);
        }
    }

    recordBall(ballData: { runs: number; extras?: number; wicket?: boolean }) {
        this.match.innings.push(ballData);
        this.updateScores(ballData);
    }

    private updateScores(ballData: { runs: number; extras?: number; wicket?: boolean }) {
        this.match.currentScore.runs += ballData.runs + (ballData.extras || 0);
        if (ballData.wicket) {
            this.match.currentScore.wickets += 1;
        }
    }

    endOver() {
        if (this.match.innings.length % 6 === 0) {
            this.match.currentOver += 1;
        }
    }

    startSecondInnings() {
        this.match.currentInnings += 1;
        this.match.currentScore = { runs: 0, wickets: 0 };
        this.match.innings = [];
    }

    calculateMatchResult() {
        // Logic to calculate match result based on scores
        const teamAScore = this.match.currentScore.runs; // Example, implement actual logic
        const teamBScore = this.match.currentScore.runs; // Example, implement actual logic
        return teamAScore > teamBScore ? 'Team A Wins' : 'Team B Wins';
    }
}