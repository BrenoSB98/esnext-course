// Classes
class Person {
  constructor(name, age, dateOfBirth, cpf, levelEducation) {
    this._name = name;
    this._age = age;
    this._dateOfBirth = dateOfBirth;
    this._cpf = cpf;
    this._levelEducation = levelEducation;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }

  get dateOfBirth() {
    return this._dateOfBirth;
  }
  set dateOfBirth(value) {
    this._dateOfBirth = value;
  }

  get cpf() {
    return this._cpf;
  }
  set cpf(value) {
    this._cpf = value;
  }

  get levelEducation() {
    return this._levelEducation;
  }
  set levelEducation(value) {
    this._levelEducation = value;
  }
}

class Employee extends Person {
  constructor(
    name,
    age,
    dateOfBirth,
    cpf,
    levelEducation,
    salary,
    position,
    department
  ) {
    super(name, age, dateOfBirth, cpf, levelEducation);
    this._salary = salary;
    this._position = position;
    this._department = department;
  }

  get salary() {
    return this._salary;
  }
  set salary(value) {
    this._salary = value;
  }

  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
  }

  get department() {
    return this._department;
  }
  set department(value) {
    this._department = value;
  }

  toString() {
    return `Employee name: ${this._name}, Age: ${this._age}, Date of Birth: ${this._dateOfBirth}, Document CPF: ${this._cpf}, Education: ${this._levelEducation}, Salary: ${this._salary}, Position: ${this._position}, Department: ${this._department}`;
  }
}

// name, age, dateOfBirth, cpf, levelEducation, salary, position, department
const employee = new Employee(
  "Freekie Watson",
  30,
  "28/02/1994",
  "057.755.126-03",
  "Higher Education",
  100000,
  "Software Engineer Senior",
  "Information Technology"
);

console.log(employee.toString());
