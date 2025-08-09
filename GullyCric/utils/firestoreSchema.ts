// Firestore schema definitions for GullyCric application

export const playerSchema = {
  id: '', // auto-generated
  name: '',
  type: 'allrounder', // default value
  stats: {
    runs: 0,
    wickets: 0,
    fours: 0,
    sixes: 0,
    average: 0,
  },
  isBowler: false,
};

export const matchSchema = {
  id: '', // auto-generated
  teams: {
    teamA: [], // array of player ids
    teamB: [], // array of player ids
  },
  overs: 0,
  toss_winner: '',
  innings: [], // array of ball-by-ball records
};