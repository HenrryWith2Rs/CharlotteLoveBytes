// src/utils/GuestListHandler.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/guestlist.json');

const readGuestList = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading the guest list file:', err);
    return [];
  }
};

const writeGuestList = (guestList) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(guestList, null, 2));
  } catch (err) {
    console.error('Error writing to the guest list file:', err);
  }
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

export const updateGuest = (id, updatedGuest) => {
  const guestList = readGuestList();
  const index = guestList.findIndex((guest) => guest.id === id);
  if (index !== -1) {
    guestList[index] = { ...guestList[index], ...updatedGuest };
    writeGuestList(guestList);
    return guestList[index];
  }
  return null;
};

export const deleteGuest = (id) => {
  const guestList = readGuestList();
  const index = guestList.findIndex((guest) => guest.id === id);
  if (index !== -1) {
    const deletedGuest = guestList.splice(index, 1);
    writeGuestList(guestList);
    return deletedGuest[0];
  }
  return null;
};

module.exports = {
  createGuest,
  readGuest,
  updateGuest,
  deleteGuest,
  readGuestList,
};
