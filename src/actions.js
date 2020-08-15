export const addItem = (text) => {
    return {
        type: 'ADD_ITEM',
        payload: {
            text: text
        }
    }
}

export const removeItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        payload: {
            id: id,
        }
    }
}