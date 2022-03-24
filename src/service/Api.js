import axios from 'axios';
import KeyChain from './KeyChain';

export const loginCheck = async (username, password) => {
  const formdata = new FormData();
  formdata.append("username", username);
  formdata.append("password", password);

  console.log(username, password);

  let requestOptions = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Referer': 'https://learn.hansung.ac.kr/login.php',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0'
    },
    method: 'POST',
    credentials: 'same-origin',
    body: formdata,
    redirect: 'follow',
  };

  const result = await fetch(`https://learn.hansung.ac.kr/login/index.php`, requestOptions)
    .then((response) => {
      if (response.url.search("errorcode") !== -1) {
        console.log("Login Error!!!");
        return false;
      }
      return true;
    })
    .then(async (res) => {
      console.log("Login Response", res);
      return res;
    })
    .catch((error) => console.log(error));

    return result;
}

export const getUserCookie = async () => {
    const username = await KeyChain.getData('username');
    const password = await KeyChain.getData('password');

    const formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);

    let requestOptions = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Referer': 'https://learn.hansung.ac.kr/login.php',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0'
      },
      method: 'POST',
      credentials: 'same-origin',
      body: formdata,
      redirect: 'follow',
    };

    const result = await fetch(`https://learn.hansung.ac.kr/login/index.php`, requestOptions)
      .then((response) => {
        if (response.url.search("errorcode") !== -1) {
          console.log("Login Error!!!");
          return;
        }
        return response;
      })
      .then(async (res) => {
        console.log("Login Response", res.headers);
      })
      .catch((error) => console.log(error));

    return result;
}

export const getClassList = () => {
  let requestOptions = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Referer': 'https://learn.hansung.ac.kr/',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0'
    },
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',
  };

  const result = axios(`https://learn.hansung.ac.kr/`, requestOptions)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    })

    return result;
}