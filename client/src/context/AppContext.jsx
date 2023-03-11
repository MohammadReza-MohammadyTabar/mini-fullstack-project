import React, { createContext, useEffect, useReducer, useState } from 'react';
import { getUsers } from '../api/userApi';

export const appContext = createContext();

const initialValue = {
  userList: [],
  modalOpen: false
};

const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_USERS':
      return {
        ...state,
        userList: payload
      };

    case 'OPEN_MODAL':
      return {
        ...state,
        modalOpen: true
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        modalOpen: false
      };

    case 'ADD_USER':
      return {
        ...state,
        userList: [...state.userList, payload]
      };

    default:
      return state;
  }
};

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialValue);

  const fetchUsers = async () => {
    try {
      const users = await getUsers();

      dispatch({ type: 'ADD_USERS', payload: users });
    } catch (error) {
      // todo fix errors
      console.log(error);
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const openModal = () => {
    dispatch({ type: 'OPEN_MODAL' });
  };

  const addUser = (user) => {
    dispatch({ type: 'ADD_USER', payload: user });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <appContext.Provider
      value={{
        userList: state.userList,
        modalOpen: state.modalOpen,
        closeModal,
        openModal,
        addUser
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};

export default AppContextProvider;
