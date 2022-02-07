import KeyChain from './KeyChain';

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
        console.log("Login Response", res);
      })
      .catch((error) => console.log(error));

    return result;
}