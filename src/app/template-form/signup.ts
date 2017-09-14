export class Signup {
    constructor(
        public email: string,
        public password: string,
        public classify: string,
        // rememberMe is optional, so the constructor lets you omit it; question mark (?)
        public rememberMe?: boolean
    ) {}
}