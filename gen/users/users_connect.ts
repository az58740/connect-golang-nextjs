// @generated by protoc-gen-connect-es v1.5.0 with parameter "target=ts+js+dts"
// @generated from file users/users.proto (package users, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { LoginRequest, UserResponse } from "./users_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service users.UsersService
 */
export const UsersService = {
  typeName: "users.UsersService",
  methods: {
    /**
     * @generated from rpc users.UsersService.Login
     */
    login: {
      name: "Login",
      I: LoginRequest,
      O: UserResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

