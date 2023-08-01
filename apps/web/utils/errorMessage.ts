import { SignInErrorCode } from "@/types";

export const signinErrorMessages: Map<SignInErrorCode, string> = new Map<SignInErrorCode, string>([['form_password_incorrect', '비밀번호가 잘못되었습니다.'], ['form_identifier_not_found', '등록되지 않은 계정입니다.']])