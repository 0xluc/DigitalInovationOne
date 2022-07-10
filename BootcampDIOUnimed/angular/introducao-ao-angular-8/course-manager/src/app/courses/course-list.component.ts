import { Component, OnInit } from "@angular/core"; //decorator que indica que essa classe será um componente
import { __makeTemplateObject } from "tslib";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    // !naomaisnecessaria! selector: 'app-course-list', //tag que será inserida em app.component.html
    templateUrl: './course-list.component.html' //o que essa tag irá fazer
})

export class CourseListComponent implements OnInit { // deixa a classe pública para ser referenciada por outros arquivos
    
    filteredCourses: Course[] = []

    _courses: Course[] = [];

    
    _filterBy!: string

    constructor(private courseService: CourseService) {

    }

    ngOnInit(): void {
        this.retriveAll()
    }
    
    retriveAll(): void{
        this.courseService.retrieveAll().subscribe({
            next: courses =>{
                this._courses = courses
                this.filteredCourses = this._courses
            },
            error: err  => console.log('Error', err)
        })        
    }
    
    deleteById(courseId:number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () =>{
                console.log("Deleted with sucess")
                this.retriveAll()
            },
            error: err => console.log('Error', err)
        })
    }

    set filter(value: string){
        this._filterBy = value

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
    } 
    get filter(){
        return this._filterBy
    }
}