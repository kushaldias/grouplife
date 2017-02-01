"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_service_1 = require('./services/task.service');
var user_1 = require('./user');
var dates_1 = require('./dates');
var ng2_datepicker_1 = require('ng2-datepicker');
core_1.enableProdMode();
var AppComponent = (function () {
    function AppComponent(taskService) {
        this.taskService = taskService;
        this.loading = true;
        this.loadings = false;
        this.model = new user_1.User('', '', '');
        this.model2 = new dates_1.Dates(null);
        this.options = new ng2_datepicker_1.DatePickerOptions();
    }
    AppComponent.prototype.submitt = function () {
        var _this = this;
        this.loading = false;
        this.loadings = true;
        this.dateob = this.model.dob;
        this.gen = this.model.gender;
        this.sal = this.model.salary;
        console.log(this.dateob);
        var info = JSON.stringify({ dob: this.model.dob, gender: this.model.gender, salary: this.model.salary });
        this.taskService.getinfo(info).subscribe(function (data) {
            if (data == '888') {
                _this.values = 'Invalid Age';
                _this.showpremiumerr = true;
                _this.showpremium = false;
                _this.loading = true;
                _this.loadings = false;
            }
            else {
                _this.values = data.i;
                _this.row1 = data.a;
                _this.row2 = data.b;
                _this.row3 = data.c;
                _this.row4 = data.d;
                _this.row5 = data.e;
                _this.row6 = data.f;
                _this.row7 = data.g;
                _this.row8 = data.h;
                console.log(_this.values);
                _this.showpremium = true;
                _this.showpremiumerr = false;
                _this.loading = true;
                _this.loadings = false;
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: "app.component.html",
            providers: [task_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map