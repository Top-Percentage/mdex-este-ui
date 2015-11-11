export const FETCH_MONSTER_ERROR = 'FETCH_MONSTER_ERROR';
export const FETCH_MONSTER_START = 'FETCH_MONSTER_START';
export const FETCH_MONSTER_SUCCESS = 'FETCH_MONSTER_SUCCESS';

export function fetchMonster({location, params}) {
  const dexId = params.dexId;
  console.log("GONNA FETCH SOMETHING: " + dexId);
  return ({fetch}) => ({
    type: 'FETCH_MONSTER',
    payload: {
      promise: fetch('http://localhost:3000/v1/monsters/dex/' + dexId)
        .then(response => response.json())
    }
  });
}
