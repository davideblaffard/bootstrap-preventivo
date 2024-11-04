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

const jobs = [ //cost per hour for each job category
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
        code: [
            "YHDNU32",
            "JANJC63",
            "PWKCN25",
            "SJDPO96",
            "POCIE24"
        ],
        discount: 0.75
    }
];

/*

 function email control

*/

/*

 function form control??????

 */

