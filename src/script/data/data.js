import css from "bootstrap/dist/css/bootstrap.min.css";

fetch('https://covid19.mathdro.id/api/countries/Indonesia')
  .then((data) => data.json())
  .then((datasum) => getData(datasum))

  const getData = (data) => {
    console.log(data)

    const html = `
        <style>
                ${css}

                .card {
                    background: #white;
                    margin-left: 10%;
                    margin-right: 10%;
                    margin-bottom: 5%;
                }

                .numbers {
                    font-size: 30px;
                }

                h5 {
                    text-align: center;
                    padding: 10px;
                }

                h4 {
                    text-align: center;
                    padding-top: 20px;
                }

            </style>
                <div class="card">
                  <div class="card-body">
                    <h2 class="card-title" style="text-align: center;">Data Summary (Indonesia)</h2>
                    <h5>Last update : ${data.lastUpdate.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1')}</h5>
                    <div class="row">
                        <div class="col-lg d-flex justify-content-center">
                            <img src="../src/img/confirmed.png" width="50" height="50">
                                <span class="numbers">${data.confirmed.value}</span>
                            </img>
                            <h5>Confirmed</h5>
                        </div>
                        <div class="col-lg d-flex justify-content-center">
                            <img src="../src/img/recovered.png" width="50" height="50">
                                <span class="numbers">${data.recovered.value}</span>
                            </img>
                            <h5>Recovered</h5>
                        </div>
                        <div class="col-lg d-flex justify-content-center">
                            <img src="../src/img/deaths.png" width="50" height="50">
                                <span class="numbers">${data.deaths.value}</span>
                            </img>
                            <h5>Deaths</h5>
                        </div>
                        
                    </div>
                  </div>
                </div>
    `

    const datasumDiv = document.querySelector('.datasum')
    datasumDiv.innerHTML = html


  }