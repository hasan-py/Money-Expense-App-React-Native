import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncStorage = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    return '';
  }
};

export const getAsyncStorage = async (key: string) => {
  try {
    const value: any = await AsyncStorage.getItem(key);
    return JSON.parse(value) || '';
  } catch (e) {
    return '';
  }
};
