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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctors = void 0;
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../generated/type-graphql");
const MiddleWare_1 = require("../../middleware/MiddleWare");
const graphql_1 = require("graphql");
const prisma_1 = __importDefault(require("../../lib/prisma"));
let Doctors = class Doctors {
    async allDoctor() {
        try {
            const doctor = await prisma_1.default.doctor.findMany({});
            console.log("Doctor", doctor);
            return doctor;
        }
        catch (error) {
            console.log("Error While Getting doctors", error);
            throw new graphql_1.GraphQLError("Error While Getting doctors");
        }
    }
    async searchDoctors(search) {
        try {
            const searchDoctors = await prisma_1.default.doctor.findMany({
                where: {
                    ...(search && {
                        OR: [
                            {
                                name: {
                                    contains: search,
                                    mode: "insensitive",
                                },
                            },
                        ],
                    }),
                },
            });
            return searchDoctors;
        }
        catch (error) {
            console.log("Error", error);
            throw new graphql_1.GraphQLError("Something went wrong");
        }
    }
};
exports.Doctors = Doctors;
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Doctor]),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Doctors.prototype, "allDoctor", null);
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Doctor]),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("search")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Doctors.prototype, "searchDoctors", null);
exports.Doctors = Doctors = __decorate([
    (0, type_graphql_1.Resolver)(() => type_graphql_2.Doctor)
], Doctors);