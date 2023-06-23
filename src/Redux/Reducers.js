const initialState = {
  dataItem: [],
  eventItems: [
    {
      id: Math.floor(Math.random() * 10000),
      time: {
        start: '2023-03-28T05:54:59.740Z',
        end: '2023-03-29T05:54:59.740Z',
      },
      room: 103,
      name: 'Test 1',
      position: {x: 5, y: 5},
      width: 270,
      type:'general',
      condition:'Arrived'
    },
    {
      id: Math.floor(Math.random() * 10000),
      time: {
        start: '2023-03-30T05:54:59.740Z',
        end: '2023-03-31T05:54:59.740Z',
      },
      room: 101,
      name: 'test 2',
      position: {x: 5, y: 5},
      width: 270,
      type:'general',
      condition:'Checkout'
    },
    {
      id: Math.floor(Math.random() * 10000),
      time: {
        start: '2023-03-27T05:54:59.740Z',
        end: '2023-03-29T05:54:59.740Z',
      },
      room: 105,
      name: 'test 3',
      position: {x: 5, y: 5},
      width: 410,
      type:'general',
      condition:'Day Out'
    },
  ],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        dataItem: action.payload,
      };
    case 'ADD_EVENT':
      return {
        ...state,
        eventItems: action.payload,
      };
    case 'EDIT_EVENT':
      let old = state.eventItems;
      let newData = old.filter(el => el.id != action.id);
      newData.push(action.payload);
      return {
        ...state,
        eventItems: newData,
      };
    default:
      return state;
  }
};

export default Reducer;
