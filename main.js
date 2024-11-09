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


/* job category objects & jobs objects */
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

// event listener che attende che tutto il form sia compilato 
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("budgetRequest");
    const jobSelection = document.getElementById("jobSelection");
    const prezzoFinaleDiv = document.querySelector(".d-flex.mt-4.mb-5.justify-content-between div");

// event listener che consente di non refreshare il form al click sul submit 
form.addEventListener("submit", function (event) {
    event.preventDefault();

        const inputName = document.getElementById("inputName").value.trim();
        const inputSurname = document.getElementById("inputSurname").value.trim();
        const inputEmail = document.getElementById("inputEmail").value.trim();
        const jobSelectionValue = jobSelection.value;

        if (inputName === "" || inputSurname === "" || inputEmail === "" || jobSelectionValue === "Seleziona il tipo di lavoro") {
            alert("Per favore, compila tutti i campi obbligatori.");
            return;
        }
    //da finire event listener con ricerca lavoro selezionato per il calcolo del preventivo 
})