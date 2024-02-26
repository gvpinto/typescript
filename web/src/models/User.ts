interface UserProps {
    name?: string,
    age?: number;
}

type Callback = () => {};

export class User {
    events: { [key: string]: Callback[]; } = {};
    constructor(private userProps: UserProps) { }

    get(propName: string): (number | string) {
        return this.userProps[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.userProps, update);
    }

    on(eventName: string, callback: Callback): void {

    };
};