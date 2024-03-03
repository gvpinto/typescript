import { User } from "./models/User";

const user = new User({ id: "9e40", name: 'Veena', age: 30 });

user.on('save', () => {
    console.log(user);
});

user.save();
// user.on('change', () => { console.log('Change 1'); });
// user.on('change', () => { console.log('Change 2'); });
// user.on('save', () => { console.log('save'); });

// user.on('change', () => { console.log('User changed'); });
// user.on('change', () => { console.log('User changed #2'); });
// user.trigger('change');



