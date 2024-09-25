import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateNestedOneWithoutUserInput } from "../inputs/DoctorCreateNestedOneWithoutUserInput";
import { PatientCreateNestedOneWithoutUserInput } from "../inputs/PatientCreateNestedOneWithoutUserInput";
import { role } from "../../enums/role";

@TypeGraphQL.InputType("UserCreateInput", {})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNumber?: string | undefined;

  @TypeGraphQL.Field(_type => role, {
    nullable: true
  })
  role?: "DOCTOR" | "PATIENT" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tokenExpire?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  otp?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resetPasswordToken?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  resetPasswordTokenExpire?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  otpExpire?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profilePicture?: string | undefined;

  @TypeGraphQL.Field(_type => DoctorCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  doctor?: DoctorCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PatientCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  patient?: PatientCreateNestedOneWithoutUserInput | undefined;
}