import axios, { AxiosResponse } from "axios";
import { Callback, Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

export interface UserProps {
    id?: string,
    name?: string,
    age?: number;
}

const rooturl: string = "http://localhost:3000/users";

export class User {

    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rooturl);
    public attributes: Attributes<UserProps>;

    constructor(private userProps: UserProps) {
        this.attributes = new Attributes<UserProps>(userProps);
    }

    get on() {
        return this.events.on;
    };

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }

    set(update: UserProps): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.get('id');

        if (typeof id !== 'string') {
            throw new Error('Cannot fetch without an id');
        }

        this.sync.fetch(id).then((response: AxiosResponse): void => {
            this.set(response.data);
        });
    }

    save(): void {
        this.sync.save(this.attributes.getAll())
            .then((response: AxiosResponse): void => {
                this.trigger('save');
            })
            .catch(() => {
                this.trigger('error');
            });
    }

};