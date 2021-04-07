//global
const api = `https://covid19.mathdro.id/api/`;
fetch(`${api}`)
.then(res => res.json())
.then(data => {
    console.log(data);
    allInfo(data);
})

function allInfo(data) {
    document.getElementById('confirmed').innerText = data.confirmed.value;
    document.getElementById('deaths').innerText = data.deaths.value;
    document.getElementById('recovered').innerText = data.recovered.value;

    //indonesia
    fetch(`https://covid19.mathdro.id/api/countries/indonesia`)
    .then(res=>res.json())
    .then(data=> {
        console.log(data)
        allInfo(data)
    })
    function allInfo(data){
        document.getElementById('confirmedid').innerText = data.confirmed.value;
        document.getElementById('deathsid').innerText = data.deaths.value;
        document.getElementById('recoveredid').innerText = data.recovered.value;

        //malaysia
        fetch(`https://covid19.mathdro.id/api/countries/malaysia`)
        .then(res=>res.json())
        .then(data=> {
         console.log(data)
            allInfo(data)
        })
        function allInfo(data){
            document.getElementById('confirmedmy').innerText = data.confirmed.value;
            document.getElementById('deathsmy').innerText = data.deaths.value;
            document.getElementById('recoveredmy').innerText = data.recovered.value;

            //singapore
        fetch(`https://covid19.mathdro.id/api/countries/singapore`)
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            allInfo(data)
        })
        function allInfo(data){
            document.getElementById('confirmedsg').innerText = data.confirmed.value;
            document.getElementById('deathssg').innerText = data.deaths.value;
            document.getElementById('recoveredsg').innerText = data.recovered.value;

             //thailand
            fetch(`https://covid19.mathdro.id/api/countries/thailand`)
            .then(res=>res.json())
            .then(data=> {
                console.log(data)
                allInfo(data)
            })
            function allInfo(data){
                document.getElementById('confirmedth').innerText = data.confirmed.value;
                document.getElementById('deathsth').innerText = data.deaths.value;
                document.getElementById('recoveredth').innerText = data.recovered.value;

                  //vietnam
                fetch(`https://covid19.mathdro.id/api/countries/vietnam`)
                .then(res=>res.json())
                .then(data=> {
                    console.log(data)
                    allInfo(data)
                })
                function allInfo(data){
                    document.getElementById('confirmedvt').innerText = data.confirmed.value;
                    document.getElementById('deathsvt').innerText = data.deaths.value;
                document.getElementById('recoveredvt').innerText = data.recovered.value;
                 }
                }
            }
        }
    }

}
