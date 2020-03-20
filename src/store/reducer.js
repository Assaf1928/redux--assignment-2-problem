const initialState = {
    persons: [{id:50,name:"Assaf",age:"12"}]
};

const reducer = (state = initialState, action) => {
switch (action.type)
{
    case "Add":
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }

        return {
            ...state,
            persons: state.persons.concat(newPerson)
        }

        case "Remove":
            const updatedArray = state.persons.filter(result => result.id !== action.deleteId);
            return {
                ...state,
                persons:updatedArray
            }

}
return state;

}

export default reducer;

