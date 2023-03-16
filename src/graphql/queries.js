/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      stage
      stageId
      plannedKickoffTime
      venue
      home
      away
      gameStatus
      events
      stats
      createdAt
      updatedAt
      programId
      desc
      name
      league
      gameImg
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        stage
        stageId
        plannedKickoffTime
        venue
        home
        away
        gameStatus
        events
        stats
        createdAt
        updatedAt
        programId
        desc
        name
        league
        gameImg
      }
      nextToken
    }
  }
`;
