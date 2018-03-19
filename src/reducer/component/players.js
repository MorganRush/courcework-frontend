const initialStste = [
    'player1',
    'player2'
];

export default function players(state = initialStste, action ) {
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
