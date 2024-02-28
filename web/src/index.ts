import { User } from "./models/User";

const user = new User({ name: 'Glenn', age: 26 });

user.on('change', () => { console.log('Change 1'); });
user.on('change', () => { console.log('Change 2'); });
user.on('save', () => { console.log('save'); });

console.log(user);

user.trigger('change');
user.trigger('save');
