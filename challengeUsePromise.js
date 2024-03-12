const http = require("http");

const getClass = (letter) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let result = "";
      res.on("data", (chunk) => {
        result += chunk;
      });
      res.on("end", () => {
        try {
          resolve(JSON.parse(result));
        } catch (error) {
          reject(error);
        }
      });
    });
  });
};

Promise.all([getClass("A"), getClass("B"), getClass("C")])
  .then((classes) => [].concat(...classes))
  .then((students) => students.map((student) => student.nome))
  .then((names) => console.log(names))
  .catch((error) => console.log(error.message));
