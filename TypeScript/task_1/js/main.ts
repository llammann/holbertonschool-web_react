//Teacher interface with index signature
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; //additional properties with any type
}

//Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

//Example object using Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17, //required attribute specific to Directors
};

//Log the object to the console
console.log(director1);
