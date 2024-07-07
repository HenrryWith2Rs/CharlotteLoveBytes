// src/utils/GuestListHandler.js
const LOCAL_STORAGE_KEY = 'guestlist';

const readGuestList = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const writeGuestList = (guestList) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(guestList));
};

const createGuest = (guest) => {
  const guestList = readGuestList();
  guest.id = guestList.length ? guestList[guestList.length - 1].id + 1 : 1;
  guestList.push(guest);
  writeGuestList(guestList);
  return guest;
};

const readGuest = (id) => {
  const guestList = readGuestList();
  return guestList.find((guest) => guest.id === id);
};

const updateGuest = (id, updatedGuest) => {
  const guestList = readGuestList();
  const index = guestList.findIndex((guest) => guest.id === id);
  if (index !== -1) {
    guestList[index] = { ...guestList[index], ...updatedGuest };
    writeGuestList(guestList);
    return guestList[index];
  }
  return null;
};

const deleteGuest = (id) => {
  const guestList = readGuestList();
  const index = guestList.findIndex((guest) => guest.id === id);
  if (index !== -1) {
    const deletedGuest = guestList.splice(index, 1);
    writeGuestList(guestList);
    return deletedGuest[0];
  }
  return null;
};

export { createGuest, readGuest, updateGuest, deleteGuest, readGuestList };
