const prompt =require("prompt-sync")()
let basicSalary=prompt("Input user's salary")

// calculate  nhif by subtracting nhif from salary
function nhif() {
    if (salary <= 5999){
        console.log(salary - 150);
    }
    else if (salary >= 6000 && salary <= 7999) {
        console.log(salary - 300);
    }
    else if (salary >= 8000 && salary <= 11999) {
        console.log(salary - 400);
    }
    else if (salary >= 12000 && salary <= 14999) {
        console.log(salary - 500);
    }
    else if (salary >= 15000 && salary <= 19999) {
        console.log(salary - 600);
    }
    else if (salary >= 20000 && salary <= 24999) {
        console.log(salary - 750);
    }
    else if (salary >= 25000 && salary <= 29999) {
        console.log(salary - 850);
    }
    else if (salary >= 30,000 && salary <= 34999) {
        console.log(salary - 900);
    }
    else if (salary >= 35000 && salary <= 39999) {
        console.log(salary - 900);
    }
    else if (salary >= 40000 && salary <= 44999) {
        console.log(salary - 1000);
    }
    else if (salary >= 45000 && salary <= 49999) {
        console.log(salary - 1100);
    }
    else if (salary >= 50000 && salary <= 59999) {
        console.log(salary - 1200);
    }
    else if (salary >= 60000 && salary <= 69999) {
        console.log(salary - 1300);
    }
    else if (salary >= 70000 && salary <= 79999) {
        console.log(salary - 1400);
    }
    else if (salary >= 80000 && salary <= 89999) {
        console.log(salary - 1500);
    }
    else if (salary >= 90000 && salary <= 99999) {
        console.log(salary - 1600);
    }
    else if (salary >= 100000) {
        console.log(salary - 1700);
    }
}
nhif();

//  Calculate nssf by multiplying 5% of salary
function nssf() {
    //calculate 5% of the gross pay
    nssf = salary *(5/100);
}
nssf();

//Calculate paye by multuiplying rates and salary
function paye() {
    if (salary <= 24000) {
        console.log (salary * (10/100));
    }
    else if (salary <= 24001 && salary >= 32333) {
        console.log(salary * (25/100));
    }
    else if (salary >= 32333) {
        console.log(salary * (30/100))
    }
}
paye();

let deduction=(nhif+nssf+paye)
deduction();
basicSalary =(salary-nhif-nssf-paye)