const initialState = [
    {
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
    },
    {
        "id": 2,
        "name": "Roma",
        "refClubs": "https://futhead.cursecdn.com/static/img/18/clubs/52.png",
        "createdAt": "2018-03-31T12:38:51.225Z",
        "updatedAt": "2018-03-31T12:38:51.225Z",
        "countryId": 2,
        "country": {
            "id": 2,
            "name": null,
            "refNations": "https://futhead.cursecdn.com/static/img/18/nations/8.png",
            "createdAt": "2018-03-31T12:38:50.956Z",
            "updatedAt": "2018-03-31T12:38:50.956Z"
        }
    },
    {
        "id": 3,
        "name": "SevillaFC",
        "refClubs": "https://futhead.cursecdn.com/static/img/18/clubs/52.png",
        "createdAt": "2018-03-31T12:39:49.151Z",
        "updatedAt": "2018-03-31T12:39:49.151Z",
        "countryId": 3,
        "country": {
            "id": 3,
            "name": null,
            "refNations": "https://futhead.cursecdn.com/static/img/18/nations/8.png",
            "createdAt": "2018-03-31T12:39:48.825Z",
            "updatedAt": "2018-03-31T12:39:48.825Z"
        }
    },
    {
        "id": 4,
        "name": "WestHamUnited",
        "refClubs": "https://futhead.cursecdn.com/static/img/18/clubs/32.png",
        "createdAt": "2018-03-31T12:41:34.146Z",
        "updatedAt": "2018-03-31T12:41:34.146Z",
        "countryId": 4,
        "country": {
            "id": 4,
            "name": null,
            "refNations": "https://futhead.cursecdn.com/static/img/18/nations/21.png",
            "createdAt": "2018-03-31T12:41:33.918Z",
            "updatedAt": "2018-03-31T12:41:33.918Z"
        }
    },
    {
        "id": 5,
        "name": "FCIngolstadt04",
        "refClubs": "https://futhead.cursecdn.com/static/img/18/clubs/217.png",
        "createdAt": "2018-03-31T12:42:01.987Z",
        "updatedAt": "2018-03-31T12:42:01.987Z",
        "countryId": 5,
        "country": {
            "id": 5,
            "name": null,
            "refNations": "https://futhead.cursecdn.com/static/img/18/nations/18.png",
            "createdAt": "2018-03-31T12:42:01.739Z",
            "updatedAt": "2018-03-31T12:42:01.739Z"
        }
    }
];

export default function teams(state = initialState, action ) {
    switch(action.type)
    {
        case 'ADD_TEAM':{
            return [
                ...state,
                action.payload
            ];
        }
        default: break;
    }
    return state;
}
