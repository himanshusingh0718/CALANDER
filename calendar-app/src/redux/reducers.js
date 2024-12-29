const initialState = {
    companies: [],
};

export const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMPANY':
            return { ...state, companies: [...state.companies, action.payload] };
        case 'DELETE_COMPANY':
            return { ...state, companies: state.companies.filter(company => company.id !== action.payload) };
        default:
            return state;
    }
};