"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCrudResolver = exports.PatientCrudResolver = exports.DoctorCrudResolver = exports.AppointmentCrudResolver = void 0;
var AppointmentCrudResolver_1 = require("./Appointment/AppointmentCrudResolver");
Object.defineProperty(exports, "AppointmentCrudResolver", { enumerable: true, get: function () { return AppointmentCrudResolver_1.AppointmentCrudResolver; } });
var DoctorCrudResolver_1 = require("./Doctor/DoctorCrudResolver");
Object.defineProperty(exports, "DoctorCrudResolver", { enumerable: true, get: function () { return DoctorCrudResolver_1.DoctorCrudResolver; } });
var PatientCrudResolver_1 = require("./Patient/PatientCrudResolver");
Object.defineProperty(exports, "PatientCrudResolver", { enumerable: true, get: function () { return PatientCrudResolver_1.PatientCrudResolver; } });
var UserCrudResolver_1 = require("./User/UserCrudResolver");
Object.defineProperty(exports, "UserCrudResolver", { enumerable: true, get: function () { return UserCrudResolver_1.UserCrudResolver; } });
