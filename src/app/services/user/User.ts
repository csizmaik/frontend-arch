export class User {
    constructor(public id: number,
                public forename: string,
                public surname: string,
                public email: string,
                public address?: string) {
    }
}
