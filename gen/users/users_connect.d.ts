// @generated by protoc-gen-connect-es v1.5.0 with parameter "target=ts+js+dts"
// @generated from file users/users.proto (package users, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { LoginRequest, UserResponse } from "./users_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service users.UsersService
 */
export declare const UsersService: {
  readonly typeName: "users.UsersService",
  readonly methods: {
    /**
     * @generated from rpc users.UsersService.Login
     */
    readonly login: {
      readonly name: "Login",
      readonly I: typeof LoginRequest,
      readonly O: typeof UserResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

