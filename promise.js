function sayPhrase(segunds, phrase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(phrase);
    }, segunds * 1000);
  });
}

sayPhrase(2, "Hello")
  .then((phrase) => phrase.concat(" World!"))
  .then((outherPhrase) => console.log(outherPhrase))
  .catch((error) => console.log(error));
