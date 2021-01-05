import { USERS_LIST_SUCCESS, USERS_LIST_FAIL } from "../constants";

const users = [
    {
        id:1,
        name:'test1',
        age: 11,
        gender: 'male',
        email: 'test1@gmail.com',
        phoneNo:986574536
    },

    {
        id:2,
        name:'test2',
        age: 12,
        gender: 'male',
        email: 'test2@gmail.com',
        phoneNo:986574536
    },

    {
        id:3,
        name:'test3',
        age: 13,
        gender: 'male',
        email: 'test3@gmail.com',
        phoneNo:986574536
    },

    {
        id:4,
        name:'test4',
        age: 14,
        gender: 'male',
        email: 'test4@gmail.com',
        phoneNo:986574536
    },
    {
        id:5,
        name:'test5',
        age: 15,
        gender: 'male',
        email: 'test5@gmail.com',
        phoneNo:986574536
    },
    {
        id:6,
        name:'test6',
        age: 16,
        gender: 'male',
        email: 'test6@gmail.com',
        phoneNo:986574536
    },
]

// Login user


export const userList = () => dispatch => {

    if (users) {
        dispatch({
            type: USERS_LIST_SUCCESS,
            payload: users
        });
    } else {
        dispatch({
            type: USERS_LIST_FAIL,
            payload: {message: 'Someting went wrong'}
        });
    }


}