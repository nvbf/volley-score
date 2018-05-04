const { fetchScore } = require('../score/score');

const resolvers = {
  Query: {
    score: async (parent, args, context, info) => {
      const code = args.code;
      if (!code) {
        return null;
      }

      const score = await fetchScore(code);

      return {
        code,
        homeTeam: {
          name: score.nameA,
          logo: score.logoA,
          color: score.colorA,
        },
        guestTeam: {
          name: score.nameB,
          logo: score.logoB,
          color: score.colorB,
        },
        homeTeamScore: {
          points: score.pointsA,
          sets: score.setA,
        },
        guestTeamScore: {
          points: score.pointsB,
          sets: score.setB,
        },
        showLogo: score.showLogos,
        showColor: score.showColors,
        showBoard: score.isShowing,
      };
    },
  },
};

module.exports = resolvers;
