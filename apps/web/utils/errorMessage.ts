import { SignInErrorCode, SignUpErrorCode } from "@sayvoca/lib/types";

export const signinErrorMessages: Map<SignInErrorCode, string> = new Map<SignInErrorCode, string>([['form_password_incorrect', '비밀번호가 잘못되었습니다.'], ['form_identifier_not_found', '등록되지 않은 계정입니다.'], ['too_many_requests', '요청이 너무 많습니다. 잠시 후 다시 시도해주세요.']])
export const signUpErrorMessages: Map<SignUpErrorCode, string> = new Map<SignUpErrorCode, string>([['too_many_requests', '요청이 너무 많습니다. 잠시 후 다시 시도해주세요.']])