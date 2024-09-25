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
exports.AvailabilitySlotWhereUniqueInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AvailabilitySlotWhereInput_1 = require("../inputs/AvailabilitySlotWhereInput");
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DoctorRelationFilter_1 = require("../inputs/DoctorRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let AvailabilitySlotWhereUniqueInput = class AvailabilitySlotWhereUniqueInput {
};
exports.AvailabilitySlotWhereUniqueInput = AvailabilitySlotWhereUniqueInput;
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], AvailabilitySlotWhereUniqueInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AvailabilitySlotWhereInput_1.AvailabilitySlotWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AvailabilitySlotWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AvailabilitySlotWhereInput_1.AvailabilitySlotWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AvailabilitySlotWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AvailabilitySlotWhereInput_1.AvailabilitySlotWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AvailabilitySlotWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], AvailabilitySlotWhereUniqueInput.prototype, "doctorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AvailabilitySlotWhereUniqueInput.prototype, "day", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AvailabilitySlotWhereUniqueInput.prototype, "startTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AvailabilitySlotWhereUniqueInput.prototype, "endTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolFilter_1.BoolFilter)
], AvailabilitySlotWhereUniqueInput.prototype, "isBooked", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorRelationFilter_1.DoctorRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", DoctorRelationFilter_1.DoctorRelationFilter)
], AvailabilitySlotWhereUniqueInput.prototype, "doctor", void 0);
exports.AvailabilitySlotWhereUniqueInput = AvailabilitySlotWhereUniqueInput = __decorate([
    TypeGraphQL.InputType("AvailabilitySlotWhereUniqueInput", {})
], AvailabilitySlotWhereUniqueInput);