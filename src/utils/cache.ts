export const cacheData = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  export const getCachedData = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  