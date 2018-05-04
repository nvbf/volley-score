const typeDefs = `
  type Query {
    score(code: String!): Scoreboard
    allClubs: [Club!]!
  }

  type Team {
    name: String
    logo: String
    color: String
  }

  type Score {
    points: Int
    sets: Int
  }

  type Scoreboard {
    code: String!
    homeTeam: Team
    guestTeam: Team
    homeTeamScore: Score
    guestTeamScore: Score
    showLogo: Boolean
    showColor: Boolean
    showBoard: Boolean
  }

  type Club {
    name: String
    shortName: String
    logo: String
  }

`;

module.exports = typeDefs;
