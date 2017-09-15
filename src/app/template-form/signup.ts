export class Signup {
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public classify: string,
        public age: number,
        // rememberMe is optional, so the constructor lets you omit it; question mark (?)
        public rememberMe?: boolean
    ) {}
}
