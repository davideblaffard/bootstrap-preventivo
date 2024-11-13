console.log('sono dentro');

/**** HTML ****/

// textArea, policycheck non le sto considerando obbligatorie, per questo le ho lasciate fuori dall'eventListener
const textArea = document.getElementById("testArea");
const policyCheck = document.getElementById("checkBox");
const hours = 10;   // const for final price 

/**** /HTML ****/

// job category objects & jobs array 
const jobs = [ 
    {
        jobId: "Backend Development", 
        pricePerHour: 20.50,
    },
    {
        jobId: "Frontend Development", 
        pricePerHour: 15.30,
    },
    {
        jobId: "Project Analysis", 
        pricePerHour: 33.60,
    },
];

//promoCodes array
const promoCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];


// event listener che attende che tutto il form sia compilato 
document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("budgetRequest");

// event listener che consente di non refreshare il form al click sul submit 
        form.addEventListener("submit", function (event) {
            event.preventDefault();

                const inputName = document.getElementById("inputName").value.trim();
                const inputSurname = document.getElementById("inputSurname").value.trim();
                const inputEmail = document.getElementById("inputEmail").value.trim();
                const jobSelection = document.getElementById("jobSelection");
                const jobSelectionValue = jobSelection.value;
                const inputPromoCode = document.getElementById("promoCode").value.trim();

                //controllo la completezza del form
                if (inputName === "" || inputSurname === "" || inputEmail === "" || jobSelectionValue === "Seleziona il tipo di lavoro") {
                    alert("COMPILARE TUTTI I CAMPI!");
                    return;
                }
                
                //invoco validEmail
                if(!validEmail(inputEmail)){
                    alert("EMAIL NON VALIDA!");
                    return;
                }
                // trasformo il selectedJob in text cosi da poter controllare dentro il mio array
                const selectedJobText = jobSelection.options[jobSelection.selectedIndex].text;
                //debugging
                console.log("Lavoro selezionato:", selectedJobText);
                
                //invoco findJob
                const selectedJob = findJob(selectedJobText);
                
                //calcolo del prezzo
                if (selectedJob) {
                    let price = selectedJob.pricePerHour * hours; 
                    console.log("Prezzo finale:", price);
                    price = applyDiscount(inputPromoCode, price);
                    console.log("il prezzo scontato è: ", price);
                }else {
                    alert("LAVORO SELEZIONATO NON VALIDO!");
                }
                //funzione che verifichi la presenza di un promoCode valido

                //visualizzo il prezzo nel dom
            });        
});

/**** FUNCTIONS ****/


//funzione findJob by Text
function findJob(selectedJobText) {
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].jobId.trim() === selectedJobText) {
            return jobs[i]; 
        }
    }
    return null; // se non c'è nessun corrispondenza
}


//funzione applyDiscount by searching promoCodes ---> 
function applyDiscount(inputPromoCode, price){
    
    const trimCode = inputPromoCode.trim().toUpperCase();

    if(promoCodes.includes(trimCode)){
        console.log("Codice valido, applico sconto del 25%");
        return price * 0.75;
        
    }
    return price;
}


//function validEmail by @
function validEmail(email) {
    return email.includes("@");
}

