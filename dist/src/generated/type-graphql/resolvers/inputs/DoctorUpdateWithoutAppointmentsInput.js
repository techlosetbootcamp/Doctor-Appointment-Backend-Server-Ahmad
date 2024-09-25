"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorUpdateWithoutAppointmentsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const EnumgenderFieldUpdateOperationsInput_1 = require("../inputs/EnumgenderFieldUpdateOperationsInput");
const NullableBoolFieldUpdateOperationsInput_1 = require("../inputs/NullableBoolFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PatientUpdateManyWithoutDoctorNestedInput_1 = require("../inputs/PatientUpdateManyWithoutDoctorNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutDoctorNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutDoctorNestedInput");
let DoctorUpdateWithoutAppointmentsInput = class DoctorUpdateWithoutAppointmentsInput {
};
exports.DoctorUpdateWithoutAppointmentsInput = DoctorUpdateWithoutAppointmentsInput;
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DoctorUpdateWithoutAppointmentsInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], DoctorUpdateWithoutAppointmentsInput.prototype, "profilePhoto", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DoctorUpdateWithoutAppointmentsInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], DoctorUpdateWithoutAppointmentsInput.prototype, "availability", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DoctorUpdateWithoutAppointmentsInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], DoctorUpdateWithoutAppointmentsInput.prototype, "isAvailable", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumgenderFieldUpdateOperationsInput_1.EnumgenderFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", EnumgenderFieldUpdateOperationsInput_1.EnumgenderFieldUpdateOperationsInput)
], DoctorUpdateWithoutAppointmentsInput.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutDoctorNestedInput_1.UserUpdateOneRequiredWithoutDoctorNestedInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateOneRequiredWithoutDoctorNestedInput_1.UserUpdateOneRequiredWithoutDoctorNestedInput)
], DoctorUpdateWithoutAppointmentsInput.prototype, "User", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientUpdateManyWithoutDoctorNestedInput_1.PatientUpdateManyWithoutDoctorNestedInput, {
        nullable: true
    }),
    __metadata("design:type", PatientUpdateManyWithoutDoctorNestedInput_1.PatientUpdateManyWithoutDoctorNestedInput)
], DoctorUpdateWithoutAppointmentsInput.prototype, "patients", void 0);
exports.DoctorUpdateWithoutAppointmentsInput = DoctorUpdateWithoutAppointmentsInput = __decorate([
    TypeGraphQL.InputType("DoctorUpdateWithoutAppointmentsInput", {})
], DoctorUpdateWithoutAppointmentsInput);