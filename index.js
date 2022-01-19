// Write your solution in this file!
    const employee = {
        name: "Sam",
        streetAddress: "11 Broadway"
    }
    function updateEmployeeWithKeyAndValue(employee, key, value){
        return {
            ...employee,[key]:value
        }
    }
    function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
        employee.streetAddress = "12 Broadway";
        return {
            ...employee
        }
    }
    function deleteFromEmployeeByKey(emoloyee, key){
        const newEmployee = employee["name"]
        delete newEmployee.name;
        return {
            ...newEmployee
        }
    }
    function destructivelyDeleteFromEmployeeByKey(employee, key){
        const newEmploye = employee["name"]
        delete employee["name"];
        return {
            ...employee
        }
    }