var foo=function(){
    console.log(this)
}
var students = {
    "students": [
        {
            "id": "waleed",
            "age": 30,
            "name": "",
            "address": "",
            "isleader": false,
            "skills": ["html", "css", "js"],
            "printStudent": foo,
        },
        {
            "id": "",
            "name": "",
            "address": "",
            "isleader": false,
            "skills": [],
            "printStudent": foo,

        },
        {
            "id": "ahmad",
            "name": "",
            "address": "",
            "isleader": false,
            "skills": [],
            "printStudent": foo,

        },
        {
            "id": "tarik",
            "name": "",
            "address": "",
            "isleader": false,
            "skills": [],
            "printStudent": foo,
        }
    ]

}
for (let index = 0; index < students['students'].length; index++) {
    students['students'][index].printStudent()
    
}
// students['students'][0].printStudent()