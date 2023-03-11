import axios from 'axios';

const userApi = axios.create({
  baseURL: 'http://localhost:3000/users'
});

export const getUsers = async () => {
  const res = await userApi.get('/');
  return res.data;
};

export const createUser = async (formData) => {
  const { age, name, email } = formData;

  const res = await userApi.post(
    '/',
    { name, age, email },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return res.data;
};
