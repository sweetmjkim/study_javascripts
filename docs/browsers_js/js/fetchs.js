// 참고사이트 : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// fetch() 기본 문법
// async (params) => {
//     try {
//         let response = await fetch(url, Options)
//     } catch(error) {
//         console.log(`Error Message : ${error.message}`)
//     }
// }

// form data.go.kr with loan rate
let rate_list = document.querySelector("#rent-loan-rate-info_rate-list");
rate_list.addEventListener('click', async (params) => {
    let url = `https://apis.data.go.kr/B551408/rent-loan-rate-info/rate-list
        ?serviceKey=GiqSMasfSR7XrTX%2F5uIxIdKTvXYAXTPdcKpnBtPNDH9yBKpc9Hcv2%2BmzhTo6ra260JiX3a0IS1A5QDTBgrRoRw%3D%3D
        &pageNo=1
        &numOfRows=30
        &dataType=JSON`; 
    let Options = {};   // python dict 유사
    try {
        let response = await fetch(url, Options);       // send

        let result = await response.json();             // 응답

        console.log(`response result : ${result}`)

        let contents = document.querySelector("#rent-loan-rate-info_rate-list_contents")
        contents.innerHTML = result['header']['resultMsg'];
    } catch(error) {
        console.log(`Error Message : ${error.message}`)     // 응답하지 않으면 여기에 걸린다.
    }
});

// datalab_shooppinginsite from naver api
let shoopping_insite = document.querySelector("#datalab_shooppinginsite");
shoopping_insite.addEventListener('click', async (event) => {
    let url = `https://openapi.naver.com/v1/datalab/shopping/categories`;
    let data = {
        "startDate": "2023-08-01",
        "endDate": "2023-09-30",
        "timeUnit": "month",
        "category": [
            {"name": "패션의류", "param": [ "50000000"]},
            {"name": "화장품/미용", "param": [ "50000002"]}
        ],
        "device": "pc",
        "gender": "f",
        "ages": [ "20",  "30"]
      }
    let Options = {
        method : "POST"
        , headers : {
            "X-Naver-Client-Id" : "mKKti2dtKa3Mw3GSo5nQ"
            ,"X-Naver-Client-Secret" : "pVXNfcSF5T"
            ,"Content-Type" : "application/json"
        }
        , body : JSON.stringify(data)
        
    };   // python dict 유사
    try {
        let response = await fetch(url, Options);       // send

        let result = await response.json();             // 응답

        console.log(`response result : ${result}`)

        let contents = document.querySelector("#datalab_shoppinginsite_contents")
        contents.innerHTML = result['endDate'];
    } catch(error) {
        console.log(`Error Message : ${error.message}`)     // 응답하지 않으면 여기에 걸린다.
    }
});