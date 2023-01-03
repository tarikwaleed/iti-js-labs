var map = new Map()
var student1_name = "tarik"
var student1_courses = [
    { "course_name": "js", "course_grade": 90 },
    { "course_name": "html", "course_grade": 100 },
    { "course_name": "css", "course_grade": 100 },

]
var student2_name = "ali"
var student2_courses = [
    { "course_name": "js", "course_grade": 90 },
    { "course_name": "html", "course_grade": 100 },
    { "course_name": "css", "course_grade": 100 },

]
var student3_name = "abdo"
var student3_courses = [
    { "course_name": "js", "course_grade": 90 },
    { "course_name": "html", "course_grade": 100 },
    { "course_name": "css", "course_grade": 100 },

]
map.set(student1_name, student1_courses)
map.set(student2_name, student2_courses)
map.set(student3_name, student3_courses)
for (const student_name of map.keys()) {
    console.log(student_name)


}
