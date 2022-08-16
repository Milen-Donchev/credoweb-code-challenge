const getItem = (itemKey: string) => {
  const storageItem = localStorage.getItem(itemKey);

  if (storageItem) {
    return JSON.parse(storageItem);
  } else {
    return null;
  }
};

const setItem = (itemKey: string, data: any) =>
  localStorage.setItem(itemKey, JSON.stringify(data));

const deleteItem = (itemKey: string) => localStorage.removeItem(itemKey);

export default {
  getItem,
  setItem,
  deleteItem,
};
