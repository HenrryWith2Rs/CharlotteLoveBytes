// src/utils/GuestListHandler.js
import { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import guestListData from '../data/guestlist.json';
import { v4 as uuidv4 } from 'uuid'; // using uuid for unique ID generation

const LOCAL_STORAGE_KEY = 'guestlist';

const useGuestList = () => {
  const [guestList, setGuestList] = useLocalStorage(LOCAL_STORAGE_KEY, []);

  useEffect(() => {
    if (guestList.length === 0) {
      setGuestList(guestListData);
    }
  }, [guestList, setGuestList]);

  const createGuest = (guest) => {
    const updatedGuestList = [...guestList, { ...guest, id: uuidv4() }];
    setGuestList(updatedGuestList);
    return guest;
  };

  const readGuest = (id) => {
    return guestList.find((guest) => guest.id === id);
  };

  const updateGuest = (id, updatedGuest) => {
    const updatedGuestList = guestList.map((guest) => (guest.id === id ? { ...guest, ...updatedGuest } : guest));
    setGuestList(updatedGuestList);
    return updatedGuest;
  };

  const deleteGuest = (id) => {
    const updatedGuestList = guestList.filter((guest) => guest.id !== id);
    setGuestList(updatedGuestList);
    return true; // or return the deleted guest if needed
  };

  return { guestList, createGuest, readGuest, updateGuest, deleteGuest };
};

export default useGuestList;
