const SET_COLOR_VISIBILITY = gql`
  mutation SetColorVisibility($id: ID!, $show: Boolean!) {
    setColorVisibility(matchId: $id, show: $show) {
      id
      showColors
    }
  }
`;

/* <Mutation mutation={SET_COLOR_VISIBILITY}>
                {setColorVisibility => (
                  <ToggleBox
                    onChange={val =>
                      setColorVisibility({
                        variables: { id: props.matchId, show: val.target.checked },
                      })
                    }
                    checked={showColors}
                    label="Show shirt colors"
                  />
                )}
                  </Mutation> */

/* <SelectBox text={homeTeam.color} color={homeTeam.color} selectText="Select color" /> */

/* <SelectBox
                  text={guestTeam.color}
                  color={guestTeam.color}
                  selectText="Select color"
                /> */
