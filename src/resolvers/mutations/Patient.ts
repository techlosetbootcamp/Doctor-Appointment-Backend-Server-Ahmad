import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { gender, Patient } from "../../generated/type-graphql";
import { isAuth, isDoctor } from "../../middleware/MiddleWare";
import { GraphQLError } from "graphql";
import Prisma from "../../lib/prisma";
import { Context } from "../../context/Context";

@Resolver(() => Patient)
export class PatientResolver {
  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async createPatient(
    @Arg("phoneNo") phoneNo: string,
    @Arg("fullName") fullName: string,
    @Arg("age") age: string,
    @Arg("gender", () => gender) gender: gender,
    @Arg("address") adress: string,
    @Arg("profilePicture", { nullable: true }) profilePicture: string,
    @Ctx() context: Context
  ) {
    if (!phoneNo || !fullName || !age || !gender || !adress) {
      throw new GraphQLError("Please add all fields");
    }
    const currentUserId = context.payload?.userId;
    const dbUser = await Prisma.patient.findUnique({
      where: {
        userId: currentUserId,
      },
    });
    if (dbUser) {
      throw new GraphQLError(
        "It looks like you’ve already set up your patient information. You can update your details instead of creating new ones."
      );
    }
    const user = await Prisma.patient.create({
      data: {
        address: adress,
        age: age,
        fullName: fullName,
        gender: gender,
        phoneNo: phoneNo,
        userId: currentUserId,
        profilePicture: profilePicture || null,
      },
    });

    return "Patient Created";
  }
  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async updatePatientInfo(
    @Arg("phoneNo") phoneNo: string,
    @Arg("fullName") fullName: string,
    @Arg("age") age: string,
    @Arg("gender", () => gender) gender: gender,
    @Arg("address") adress: string,
    @Arg("profilePicture", { nullable: true }) profilePicture: string,
    @Ctx() context: Context
    // @Arg("medicalHistory", { nullable: true }) medicalHistory: string,
  ) {
    if (!phoneNo || !fullName || !age || !gender || !adress) {
      throw new GraphQLError("Please add all fields");
    }
    const currentUserId = context.payload?.userId;

    await Prisma.patient.update({
      where: {
        userId: currentUserId,
      },
      data: {
        address: adress,
        age: age,
        fullName: fullName,
        gender: gender,
        phoneNo: phoneNo,
        userId: currentUserId,
        profilePicture: profilePicture || null,
      },
    });

    return "Patient Info Updated";
  }
}
