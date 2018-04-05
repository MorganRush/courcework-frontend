const initialState = [
    {
        "id": 1,
        "name": null,
        "refNations": "https://futhead.cursecdn.com/static/img/18/nations/8.png",
        "createdAt": "2018-03-31T11:50:13.857Z",
        "updatedAt": "2018-03-31T11:50:13.857Z"
    },
    {
        "id": 2,
        "name": null,
        "refNations": "https://futhead.cursecdn.com/static/img/18/nations/8.png",
        "createdAt": "2018-03-31T12:38:50.956Z",
        "updatedAt": "2018-03-31T12:38:50.956Z"
    },
    {
        "id": 3,
        "name": null,
        "refNations": "https://futhead.cursecdn.com/static/img/18/nations/8.png",
        "createdAt": "2018-03-31T12:39:48.825Z",
        "updatedAt": "2018-03-31T12:39:48.825Z"
    }
];

export default function countries(state = initialState, action ) {
    switch(action.type)
    {
        case 'ADD_COUNTRY':{
            return [
                ...state,
                action.payload
            ];
        }
        default: break;
    }
    return state;
}
