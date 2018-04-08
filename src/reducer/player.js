const initialState = {
    "id": 1,
    "reiting": 99,
    "pac": 98,
    "sho": 99,
    "pas": 94,
    "dri": 98,
    "def": 50,
    "phy": 95,
    "refImage": "https://futhead.cursecdn.com/static/img/18/players_alt/p67129665.png",
    "createdAt": "2018-04-07T14:01:44.627Z",
    "updatedAt": "2018-04-07T14:01:44.627Z",
    "playerID": 1,
    "teamID": 5,
    "characteristics": {
        "id": 1,
        "strongFoot": "Right",
        "age": "32 - 05/02/1985",
        "height": "185cm | 6'1\"",
        "workrates": "High / Low",
        "acceleration": 96,
        "sprintSpeed": 99,
        "positioning": 99,
        "finishing": 99,
        "shotPower": 99,
        "longShots": 97,
        "volleys": 93,
        "penalties": 90,
        "vision": 97,
        "crossing": 97,
        "freeKick": 87,
        "shortPassing": 95,
        "longPassing": 88,
        "curve": 92,
        "agility": 96,
        "balance": 68,
        "reactions": 99,
        "ballControl": 99,
        "dribbling": 99,
        "composure": 95,
        "interceptions": 43,
        "heading": 99,
        "marking": 33,
        "standingTackle": 46,
        "slidingTackle": 34,
        "jumping": 99,
        "stamina": 99,
        "strength": 95,
        "aggression": 74,
        "createdAt": "2018-04-08T14:13:59.296Z",
        "updatedAt": "2018-04-08T14:13:59.296Z",
        "contractID": 1
    },
    "player": {
        "id": 1,
        "name": "Cristiano Ronaldo",
        "createdAt": "2018-04-07T14:01:26.747Z",
        "updatedAt": "2018-04-07T14:01:26.747Z"
    }
};

export default function player(state = initialState, action ) {
    switch(action.type)
    {
        case 'ADD_PLAYER':{
            return [
                ...state,
                action.payload
            ];
        }
        default: break;
    }
    return state;
}