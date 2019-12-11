const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const async_inc_counter = () => {
    return {
        type: INCREMENT
    }
};
export const inc_counter=() =>{
    return (dispatch) => {
        setTimeout(() => {
            dispatch(async_inc_counter())
        }, 5000)

    }

};
export const dec_counter = () => {
    return {
        type: DECREMENT
    }
};

