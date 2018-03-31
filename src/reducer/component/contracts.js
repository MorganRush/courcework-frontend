const initialState = [
    {
        "id": 1,
        "description": null,
        "createdAt": "2018-03-31T11:50:14.103Z",
        "updatedAt": "2018-03-31T11:50:14.103Z",
        "playerID": 1,
        "teamID": 1,
        "player": {
            "id": 1,
            "name": "Jonas",
            "reiting": 86,
            "pac": 69,
            "sho": 90,
            "pas": 82,
            "dri": 88,
            "def": 40,
            "phy": 69,
            "refImage": "https://futhead.cursecdn.com/static/img/18/players_alt/p100840065.png",
            "createdAt": "2018-03-31T11:50:14.098Z",
            "updatedAt": "2018-03-31T11:50:14.098Z"
        },
        "team": {
            "id": 1,
            "name": "SLBenfica",
            "refClubs": "https://futhead.cursecdn.com/static/img/18/clubs/52.png",
            "createdAt": "2018-03-31T11:50:14.082Z",
            "updatedAt": "2018-03-31T11:50:14.082Z",
            "countryId": 1,
            "country": {
                "id": 1,
                "name": null,
                "refNations": "https://futhead.cursecdn.com/static/img/18/nations/8.png",
                "createdAt": "2018-03-31T11:50:13.857Z",
                "updatedAt": "2018-03-31T11:50:13.857Z"
            }
        }
    },
    {
        "id": 2,
        "description": null,
        "createdAt": "2018-03-31T12:48:49.930Z",
        "updatedAt": "2018-03-31T12:48:49.930Z",
        "playerID": 2,
        "teamID": 8,
        "player": {
            "id": 2,
            "name": "Alex Sandro",
            "reiting": 86,
            "pac": 86,
            "sho": 65,
            "pas": 77,
            "dri": 81,
            "def": 81,
            "phy": 84,
            "refImage": "https://futhead.cursecdn.com/static/img/18/players/191043.png",
            "createdAt": "2018-03-31T12:48:49.925Z",
            "updatedAt": "2018-03-31T12:48:49.925Z"
        },
        "team": {
            "id": 8,
            "name": "Juventus",
            "refClubs": "https://futhead.cursecdn.com/static/img/18/clubs/21.png",
            "createdAt": "2018-03-31T12:48:49.901Z",
            "updatedAt": "2018-03-31T12:48:49.901Z",
            "countryId": 9,
            "country": {
                "id": 9,
                "name": null,
                "refNations": "https://futhead.cursecdn.com/static/img/18/nations/21.png",
                "createdAt": "2018-03-31T12:48:49.739Z",
                "updatedAt": "2018-03-31T12:48:49.739Z"
            }
        }
    }
];

export default function contracts(state = initialState, action ) {
    switch(action.type)
    {
        case 'ADD_CONTRACT':{
            return [
                ...state,
                action.payload
            ];
        }
        default: break;
    }
    return state;
}
