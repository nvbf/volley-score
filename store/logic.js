export function getHomeTeamColor(state) {
  return state.HOMETEAM_COLOR;
}

export function getAwayTeamColor(state) {
  return state.AWAYTEAM_COLOR;
}

export function getAwayTeamString(state) {
  const bFirstPlayer = state.AWAYTEAM_FIRST_PLAYER_NAME;
  const bSecondPlayer = state.AWAYTEAM_SECOND_PLAYER_NAME;

  return `${bFirstPlayer} / ${bSecondPlayer}`;
}

export function getHomeTeamString(state) {
  const aFirstPlayer = state.HOMETEAM_FIRST_PLAYER_NAME;
  const aSecondPlayer = state.HOMETEAM_SECOND_PLAYER_NAME;

  return `${aFirstPlayer} / ${aSecondPlayer}`;
}

export function getLastName(name) {
  if (!name.includes(' ')) {
    return name;
  }

  const names = removeCountry(name).split(" ");
  return names[names.length - 1];
}

function removeCountry(name) {
  const countryStartPos = name.indexOf("(");
  if (countryStartPos === -1) {
    return name;
  }
  const endOfLastNameIndex = countryStartPos - 1;
  return name.substring(0, endOfLastNameIndex);
}


export function getHomeTeamLastNameString(state) {
  const firstPlayer = getLastName(state.HOMETEAM_FIRST_PLAYER_NAME);
  const secondPlayer = getLastName(state.HOMETEAM_SECOND_PLAYER_NAME);
  return `${firstPlayer} / ${secondPlayer}`;
}

export function getAwayTeamLastNameString(state) {
  const firstPlayer = getLastName(state.AWAYTEAM_FIRST_PLAYER_NAME);
  const secondPlayer = getLastName(state.AWAYTEAM_SECOND_PLAYER_NAME);
  return `${firstPlayer} / ${secondPlayer}`;
}

function hasAwayteamWonSet(aSet, limit) {
  const point1 = aSet.HOMETEAM_POINT;
  const point2 = aSet.AWAYTEAM_POINT;
  const awayteamHas21orMorePoints = point2 >= limit;
  const awayteamHas2orMorePointThenHometeam = point2 > point1 + 1;
  return awayteamHas21orMorePoints && awayteamHas2orMorePointThenHometeam;
}

function hasHometeamWonSet(aSet, limit) {
  const point1 = aSet.HOMETEAM_POINT;
  const point2 = aSet.AWAYTEAM_POINT;
  const hometeamHas21orMorePoints = point1 >= limit;
  const hometeamHas2orMorePointThenAwayteam = point1 > point2 + 1;
  return hometeamHas21orMorePoints && hometeamHas2orMorePointThenAwayteam;
}

function hasHometeamWonFirstSet(score) {
  return hasHometeamWonSet(score.FIRST_SET, 21);
}

function hasHometeamWonSecondSet(score) {
  return hasHometeamWonSet(score.SECOND_SET, 21);
}

function hasHometeamWonThirdSet(score) {
  return hasHometeamWonSet(score.THIRD_SET, 15);
}

function hasAwayteamWonFirstSet(score) {
  return hasAwayteamWonSet(score.FIRST_SET, 21);
}

function hasAwayteamWonSecondSet(score) {
  return hasAwayteamWonSet(score.SECOND_SET, 21);
}

function hasAwayteamWonThirdSet(score) {
  return hasAwayteamWonSet(score.THIRD_SET, 15);
}

export function getHomeTeamSets(matchState) {
  let sets = 0;
  if (hasHometeamWonFirstSet(matchState)) {
    sets += 1;
  }
  if (hasHometeamWonSecondSet(matchState)) {
    sets += 1;
  }
  if (hasHometeamWonThirdSet(matchState)) {
    sets += 1;
  }
  return sets;
}

export function getAwayTeamSets(matchState) {
  let sets = 0;
  if (hasAwayteamWonFirstSet(matchState)) {
    sets += 1;
  }
  if (hasAwayteamWonSecondSet(matchState)) {
    sets += 1;
  }
  if (hasAwayteamWonThirdSet(matchState)) {
    sets += 1;
  }
  return sets;
}

function getCurrentSet(state) {
  const totalSets = getAwayTeamSets(state) + getHomeTeamSets(state);
  return [state.FIRST_SET, state.SECOND_SET, state.THIRD_SET][Math.min(totalSets, 2)];
}

export function getHomeTeamPoints(state) {
  return getCurrentSet(state).HOMETEAM_POINT || 0;
}

export function getAwayTeamPoints(state) {
  return getCurrentSet(state).AWAYTEAM_POINT || 0;
}
