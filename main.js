console.log('sono dentro');

/* const variables:
    form
    name
    surname
    mail
    job
    textArea
    promoCode
    checkBox
    hours=10        hours needed 
*/

const form = document.getElementById("budgetRequest");
const name = document.getElementById("inputName");
const surname = document.getElementById("inputSurname");
const eMail = document.getElementById("inputEmail");
const job = document.getElementById("jobSelection");
const textArea = document.getElementById("testArea");
const userCode = document.getElementById("promoCode");
const policyCheck = document.getElementById("checkBox");
const hours = 10;   // const for calculate final price 


/*job array-objects
    [
        {type}
        {pricePerHour}

        {type}
        {pricePerHour}

        {type}
        {pricePerHour}
    
    ]

*/

const jobs = [ 
    {
        jobId: "Backend Dev", 
        pricePerHour: 20.50
    },
    {
        jobId: "Frontend Dev", 
        pricePerHour: 15.30
    },
    {
        jobId: "Project Analysis", 
        pricePerHour: 33.60
    },
];

/*promoCode Discount array-objects
    [
        {
            [
            1
            2
            3
            4
            5
            ]
            discount: 0.75
    }
    ]
*/

const promoCodes = [
    {
        promoId: "YHDNU32"
    }, 
    {
        promoId: "JANJC63"
    }, 
    {
        promoId: "PWKCN25"
    }, 
    {
        promoId: "SJDPO96"
    }, 
    {
        promoId: "POCIE24"
    }       
    
    ];

/*

 function email control

*/

/* event listener che controlla che tutto il form sia compilato */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("budgetRequest");
    const jobSelection = document.getElementById("jobSelection");
    const prezzoFinaleDiv = document.querySelector(".d-flex.mt-4.mb-5.justify-content-between div");

/* event listener che consente di non refreshare il form al click sul submit */
form.addEventListener("submit", function (event) {
    event.preventDefault();

        const inputName = document.getElementById("inputName").value.trim();
        const inputSurname = document.getElementById("inputSurname").value.trim();
        const inputEmail = document.getElementById("inputEmail").value.trim();
        const jobSelectionValue = jobSelection.value;


 /*

 calcolo preventivo:
 per calcolare il preventivo devo:
  aver inserito tutti i campi
  validato email
  preventivo = fee*hours
  controllo promoCode scorrendo l'arrey con i codes validi confrontandoli con quello inserito in input
  se valido return true ed eseguo preventivo*0.75 e element.innerhtml che conterrà un div con "prezzo finale "
  se non valido return false e element.innerhtml che conterrà un div con "prezzo finale "

 */




