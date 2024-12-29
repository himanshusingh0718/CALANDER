export const addCompany = (company) => ({
    type: 'ADD_COMPANY',
    payload: company,
});

export const deleteCompany = (id) => ({
    type: 'DELETE_COMPANY',
    payload: id,
});