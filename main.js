let BankStatements = [];
let jwtToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNzIyODgiLCJlbWFpbCI6ImNwcm8yNzE0QGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkRldiIsImxhc3ROYW1lIjoiQ2hldGFuIiwicGljdHVyZSI6IiIsInBlcm1pc3Npb25zIjpbIk1BTkFHRV9URU1QTEFURVMiLCJNQU5BR0VfSU5URUdSQVRJT05TIiwiUkVBRF9KT0JfUkVTVUxUUyIsIkNSRUFURV9KT0IiLCJVU0VfT0NSX1RPT0wiLCJVU0VfT0NSX1RBQkxFU19UT09MIiwiVVNFX1RBQkxFU19UT09MIiwiVVNFX0hBTkRXUklUSU5HX1RPT0wiXSwiaWF0IjoxNzIwNTE0MDMwLCJleHAiOjQ4NzYyNzQwMzB9.0CA5UrSM1MoBPgsRIOC7kRHDB-p-NtnlptmbdWX-s38`;
let formData = new FormData();
function handleSubmit() {

}

$(document).ready(function () {
    $("#bankStatements").on("change", function (e) {
        let allFiles = this.files;
        BankStatements = allFiles[0];
        formData.append('document', allFiles[0]);
    })
    $("#uploadBtn").on("click", function (e) {
        let url = `https://www.docuclipper.com/api/v1/protected/document?asyncProcessing=false`
        let headers = {
            'Authorization': `Bearer ${jwtToken}`,
            'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
            'Content-Length': '<calculated when request is sent>',
            'Host': '<calculated when request is sent>',
            'User-Agent': 'PostmanRuntime/7.39.0',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Access-Control-Allow-Origin': '*'
        }
        axios.post(url, formData, { headers })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    })
})