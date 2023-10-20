// GLOBAL VARIABLES
let empForm             // THE EMPLOYEE FORM
let id                  // THE ID TEXT BOX
let fullName            // THE NAME TEXT BOX
let ext                 // THE EXT TEXT BOX
let email               // THE EMAIL TEXT BOX
let department          // THE DEPARTMENT TEXT BOX

function getDomElements() {
    // HELPER FUNCTION TO RETURN DOM ELEMENT
    const $ = (id) => document.getElementById(id)

    // GET THE DOM ELEMENTS
    empForm         = $('empForm')
    id              = $('id')
    fullName        = $('fullName')
    ext             = $('ext')
    email           = $('email')
    department      = $('department')
}

function displayEmployeeData() {
    // DISPLAY THE EMPLOYEE DATA IN THE CONSOLE
    console.log(`ID: ${id.value}`)
    console.log(`Name: ${fullName.value}`)
    console.log(`Extension: ${ext.value}`)
    console.log(`Email: ${email.value}`)
    console.log(`Department: ${department.value}`)
}

window.onload = function(){
    getDomElements();
    
     empForm.addEventListener('submit', function (e) { 
        // prevent form from submitting by default so the values can be displayed within the console window without the form trying to submit to a non-existent action.
        e.preventDefault();
        displayEmployeeData();
    });
};
