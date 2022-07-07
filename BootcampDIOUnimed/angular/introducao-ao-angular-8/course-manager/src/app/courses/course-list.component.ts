import { Component, OnInit } from "@angular/core"; //decorator que indica que essa classe será um componente
import { __makeTemplateObject } from "tslib";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    selector: 'app-course-list', //tag que será inserida em app.component.html
    templateUrl: './course-list.component.html' //o que essa tag irá fazer
})

export class CourseListComponent implements OnInit { // deixa a classe pública para ser referenciada por outros arquivos
    courses: Course[] = [];

    constructor(private courseService: CourseService) {

    }

    ngOnInit(): void {
        this.courses = this.courseService.retrieveAll()        
    }
}