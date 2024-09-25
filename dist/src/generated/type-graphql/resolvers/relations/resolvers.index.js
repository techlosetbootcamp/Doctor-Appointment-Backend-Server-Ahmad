"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = exports.PatientRelationsResolver = exports.DoctorRelationsResolver = exports.AppointmentRelationsResolver = void 0;
var AppointmentRelationsResolver_1 = require("./Appointment/AppointmentRelationsResolver");
Object.defineProperty(exports, "AppointmentRelationsResolver", { enumerable: true, get: function () { return AppointmentRelationsResolver_1.AppointmentRelationsResolver; } });
var DoctorRelationsResolver_1 = require("./Doctor/DoctorRelationsResolver");
Object.defineProperty(exports, "DoctorRelationsResolver", { enumerable: true, get: function () { return DoctorRelationsResolver_1.DoctorRelationsResolver; } });
var PatientRelationsResolver_1 = require("./Patient/PatientRelationsResolver");
Object.defineProperty(exports, "PatientRelationsResolver", { enumerable: true, get: function () { return PatientRelationsResolver_1.PatientRelationsResolver; } });
var UserRelationsResolver_1 = require("./User/UserRelationsResolver");
Object.defineProperty(exports, "UserRelationsResolver", { enumerable: true, get: function () { return UserRelationsResolver_1.UserRelationsResolver; } });
