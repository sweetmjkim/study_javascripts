let kobaco_button = document.querySelector("#kobaco_button");
kobaco_button.addEventListener('click', async (event) => {
    let url = `https://apis.data.go.kr/B552898/ad_count_by_times/getAdCountByTimesList?serviceKey=GiqSMasfSR7XrTX%2F5uIxIdKTvXYAXTPdcKpnBtPNDH9yBKpc9Hcv2%2BmzhTo6ra260JiX3a0IS1A5QDTBgrRoRw%3D%3D&pageNo=1&numOfRows=10`;
    let Options = {};                                       // python dict 유사
    try {
        let response = await fetch(url, Options);           // send
        let data_result = await response.json();                 // 응답(내부에 있는 response를 json으로 변경해줘)
        let data_list = data_result['response']['body']['items'];   // data_result는 response > body >items 안에 있는 정보를 리스트화해줘

        let kobaco_timelist = '';
        for (let kobaco_object of data_list){
            kobaco_timelist = `${kobaco_timelist}<tr>
                            <th>${kobaco_object["BRDC_YMD"]}</th>
                            <th>${kobaco_object["BRDC_WKD"]}</th>
                            <th>${kobaco_object["BRDC_TM_RNG"]}</th>
                            <th>${kobaco_object["TPBIZ_NM_1"]}</th>
                            <th>${kobaco_object["TPBIZ_NM_2"]}</th>
                            <th>${kobaco_object["TPBIZ_NM_3"]}</th>
                            <th>${kobaco_object["AD_CNT"]}</th></tr>`
                            }
        let contents = document.querySelector("#Kobaco_timelist")
        contents.innerHTML = kobaco_timelist

    } catch(error) {
        console.log('Error Message : $(error.message)')     // 응답 X 시 확인
    }
});
