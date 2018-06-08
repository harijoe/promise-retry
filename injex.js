const promiseRetry = async (generatePromise, n = 3) => {
  try {
    return await generatePromise()
  } catch(err) {
    if (n === 1) throw err;
    return await promiseRetry(generatePromise, n - 1);
  }
};

export default promiseRetry
