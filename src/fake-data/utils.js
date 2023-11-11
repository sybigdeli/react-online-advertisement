const fakeRequest = (data, timeout = 1) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, timeout);
  });
};

export { fakeRequest };
