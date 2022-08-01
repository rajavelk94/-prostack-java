let employees = [{"first_name":"Mandy","last_name":"Casey","email":"mcasey0@amazonaws.com","gender":"Female"},
{"first_name":"Donn","last_name":"Oldis","email":"doldis1@macromedia.com","gender":"Male"},
{"first_name":"Geoffry","last_name":"Turone","email":"gturone2@blinklist.com","gender":"Male"},
{"first_name":"Yorgos","last_name":"Crut","email":"ycrut3@weather.com","gender":"Male"},
{"first_name":"Lemmie","last_name":"Gianilli","email":"lgianilli4@tuttocitta.it","gender":"Male"},
{"first_name":"Claudette","last_name":"Casaccio","email":"ccasaccio5@wp.com","gender":"Female"},
{"first_name":"Ruprecht","last_name":"Goddard","email":"rgoddard6@cbsnews.com","gender":"Male"},
{"first_name":"Sheila-kathryn","last_name":"Spinley","email":"sspinley7@guardian.co.uk","gender":"Female"},
{"first_name":"Donny","last_name":"Hould","email":"dhould8@illinois.edu","gender":"Female"},
{"first_name":"Anne-marie","last_name":"Chiddy","email":"achiddy9@tmall.com","gender":"Female"},
{"first_name":"Benita","last_name":"Jodlkowski","email":"bjodlkowskia@acquirethisname.com","gender":"Female"},
{"first_name":"Brynne","last_name":"Trippack","email":"btrippackb@epa.gov","gender":"Female"},
{"first_name":"Manon","last_name":"Posen","email":"mposenc@engadget.com","gender":"Female"},
{"first_name":"Granny","last_name":"Meneyer","email":"gmeneyerd@com.com","gender":"Male"},
{"first_name":"Colleen","last_name":"Eastridge","email":"ceastridgee@berkeley.edu","gender":"Female"},
{"first_name":"Abdel","last_name":"Lemmers","email":"alemmersf@imdb.com","gender":"Polygender"},
{"first_name":"Rosalinda","last_name":"Rodenburgh","email":"rrodenburghg@go.com","gender":"Female"},
{"first_name":"Jenna","last_name":"Libby","email":"jlibbyh@uiuc.edu","gender":"Female"},
{"first_name":"Isac","last_name":"Griffey","email":"igriffeyi@i2i.jp","gender":"Male"},
{"first_name":"Leroy","last_name":"Castan","email":"lcastanj@uiuc.edu","gender":"Male"}]

let display_EmployeeData = () => {
    let rows = ""
    employees.forEach((emp) => {
        rows = rows + `<tr>
                        <td>${emp.first_name}</td>
                        <td>${emp.last_name}</td>
                        <td>${emp.email}</td>
                        <td>${emp.gender}</td>
                      </tr>`
    })
    document.getElementById('tbody_Data').innerHTML = rows
}