// Write your solution in this file!

const employee = {
    name: 'Daniel', 
    streetAddress: '123 park ave',
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newName = {... employee};
    newName[key] = value;

    return newName;
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee, 
    'name', 
    'Sam'
);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    
    return employee;
}

const newAddress = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {... employee};
    delete newEmployee[key];

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    
    return employee;
}
