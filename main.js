console.log('sono dentro');

// html variables

/*
const form = document.getElementById("budgetRequest");
const name = document.getElementById("inputName");
const surname = document.getElementById("inputSurname");
const eMail = document.getElementById("inputEmail");
const job = document.getElementById("jobSelection");
*/
const textArea = document.getElementById("testArea");
const userCode = document.getElementById("promoCode");
const policyCheck = document.getElementById("checkBox");
const hours = 10;   // const for calculate final price 


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

//promoCodes 
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


// event listener che attende che tutto il form sia compilato 
document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("budgetRequest");
    
        const prezzoFinaleDiv = document.querySelector(".d-flex.mt-4.mb-5.justify-content-between div");

// event listener che consente di non refreshare il form al click sul submit 
        form.addEventListener("submit", function (event) {
            event.preventDefault();

                const inputName = document.getElementById("inputName").value.trim();
                const inputSurname = document.getElementById("inputSurname").value.trim();
                const inputEmail = document.getElementById("inputEmail").value.trim();
                const jobSelection = document.getElementById("jobSelection");
                const jobSelectionValue = jobSelection.value;

                if (inputName === "" || inputSurname === "" || inputEmail === "" || jobSelectionValue === "Seleziona il tipo di lavoro") {
                    alert("Per favore, compila tutti i campi obbligatori.");
                    return;
                }

                // trasformo il selectedJob in text cosi da poter controllare dentro il mio array
                const selectedJobText = jobSelection.options[jobSelection.selectedIndex].text;
                //debugging
                console.log("Lavoro selezionato:", selectedJobText);
                
                let selectedJob = null;

                for (let i = 0; i < jobs.Length; i++) {
                    console.log(jobs[i].jobId.trim());  //debugging (fino a qui tutto bene)
                    if (jobs[i].jobId.trim() === selectedJobText) {
                        selectedJob = jobs[i];
                        break; 
                    }         
                }
                
                
                //calcolo del prezzo
                if (selectedJob) {
                    const price = selectedJob.pricePerHour * hours; 
                    console.log("Prezzo finale:", price);
                }else {
                    alert("Lavoro selezionato non valido.");
                }

                console.log("sono arrivato qui");  
                //funzione che verifichi la presenza di un promoCode valido
                //visualizzo il prezzo nel dom
            });        
});





//funzione verifica promoCode
//funzione valid email
