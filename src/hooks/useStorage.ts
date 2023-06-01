const APP_KEY = "@BikesApp:";

const useStorage = () => {
  const setData = (key: string, value: string) => {
    try {
      localStorage.setItem(APP_KEY + key, value);
    } catch (error) {
      console.error(error);
    }
  };
  const getData = <T>(key: string): T | undefined => {
    try {
      const value = localStorage.getItem(APP_KEY + key);
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  return {
    setData,
    getData,
  };
};

export default useStorage;
