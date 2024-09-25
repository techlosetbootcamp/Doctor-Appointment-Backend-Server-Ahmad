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
exports.DoctorResolver = void 0;
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../generated/type-graphql");
const MiddleWare_1 = require("../../middleware/MiddleWare");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const graphql_1 = require("graphql");
let DoctorResolver = class DoctorResolver {
    async allDoctor() {
        try {
            const doctor = await prisma_1.default.doctor.findMany();
            console.log("Doctor", doctor);
            return doctor;
        }
        catch (error) {
            console.log("Error While Getting doctors", error);
            throw new graphql_1.GraphQLError("Error While Getting doctors");
        }
    }
    async createDoctor(name, profilePhoto, address, availability, email, isAvailable, gender, context) {
        if (!name || !address || !email || !gender) {
            throw new graphql_1.GraphQLError("Please add name,email,address and gender");
        }
        const currentUserId = context.payload?.userId;
        const dbUser = await prisma_1.default.doctor.findUnique({
            where: {
                userId: currentUserId,
            },
        });
        if (dbUser) {
            throw new graphql_1.GraphQLError("It looks like you’ve already set up your Doctor information. You can update your details instead of creating new ones.");
        }
        await prisma_1.default.doctor.create({
            data: {
                address,
                email,
                gender,
                name,
                availability,
                isAvailable,
                profilePhoto,
                userId: currentUserId,
            },
        });
        return "Data Added";
    }
    async updateDoctor(name, profilePhoto, address, availability, email, isAvailable, gender, context) {
        if (!name || !address || !email || !gender) {
            throw new graphql_1.GraphQLError("Please add name,email,address and gender");
        }
        const currentUserId = context.payload?.userId;
        await prisma_1.default.doctor.update({
            where: {
                userId: currentUserId,
            },
            data: {
                address,
                email,
                gender,
                name,
                availability,
                isAvailable,
                profilePhoto,
                userId: currentUserId,
            },
        });
        return "Data Updated";
    }
};
exports.DoctorResolver = DoctorResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Doctor]),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DoctorResolver.prototype, "allDoctor", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Arg)("name")),
    __param(1, (0, type_graphql_1.Arg)("profilePhoto", { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("address")),
    __param(3, (0, type_graphql_1.Arg)("availability", { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)("email")),
    __param(5, (0, type_graphql_1.Arg)("isAvailable", { nullable: true })),
    __param(6, (0, type_graphql_1.Arg)("gender", () => type_graphql_2.gender)),
    __param(7, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, Boolean, String, Object]),
    __metadata("design:returntype", Promise)
], DoctorResolver.prototype, "createDoctor", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Arg)("name")),
    __param(1, (0, type_graphql_1.Arg)("profilePhoto", { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("address")),
    __param(3, (0, type_graphql_1.Arg)("availability", { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)("email")),
    __param(5, (0, type_graphql_1.Arg)("isAvailable", { nullable: true })),
    __param(6, (0, type_graphql_1.Arg)("gender", () => type_graphql_2.gender)),
    __param(7, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, Boolean, String, Object]),
    __metadata("design:returntype", Promise)
], DoctorResolver.prototype, "updateDoctor", null);
exports.DoctorResolver = DoctorResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => type_graphql_2.Doctor)
], DoctorResolver);