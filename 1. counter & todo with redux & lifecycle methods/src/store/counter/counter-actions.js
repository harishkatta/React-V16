const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const inc_counter = () => {
    return {
        type: INCREMENT
    }
};
export const dec_counter = () => {
    return {
        type: DECREMENT
    }
};

