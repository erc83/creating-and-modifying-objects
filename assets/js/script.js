// crea Hospital
function Hospital(name){
    this.name = name;
    this.patients = [];
    this.newPatient = function (patient) {
        this.patients.push(patient);
        console.log(`${name} - Paciente: ${patient.name}`);
    }
};
// crea pacientes
function Patients(name, age, dni, diagnosis){
    this.name = name;
    this.age = age;
    this.dni = dni;
    this.diagnosis = diagnosis;
};    

// Crear pacientes nuevos
var p1 = new Patients("luis", 51, "12345678-9", "asmas")
var p2 = new Patients("luisa", 19, " 20345678-9", "diabetes");
var p3 = new Patients("raquel", 21, " 20345678-9", "diabetes");

// crear hospital y asignarle pacientes
var centralHospital = new Hospital("hoospital el pino");
centralHospital.newPatient(p1);
centralHospital.newPatient(p2);
centralHospital.newPatient(p3);

// buscar pacientes por nombres
Hospital.prototype.search = function (name) {
    return this.patients.find(patient => patient.name == name);
}
Hospital.prototype.searchAll = function () {
    this.patients.forEach(patient => {
        console.log(patient);
    });
}
console.log(centralHospital.search("luis"))
console.log(centralHospital.searchAll());