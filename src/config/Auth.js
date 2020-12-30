import AsyncStorage from '@react-native-community/async-storage';

export const setLogin = async (user) => {
    await AsyncStorage.setItem('login', JSON.stringify(user));
};

export const getLogin = async () => {
    let us = await AsyncStorage.getItem('login');
    if (us !== null) {
        return JSON.parse(us);
    } else {
        return null;
    }
};

export const clearLogin = async () => {
    await AsyncStorage.clear();
};