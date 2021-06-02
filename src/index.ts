import { connect } from 'mongoose';
import { IUser, User } from './schema/User.schema';

(async function () {
  await connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const user: IUser = await User.create({
    email: 'hello@mdollenbacher.net',
    firstName: 'Mathias',
    lastName: 'Dollenbacher'
  });

  console.log('Done', user.email);

})();
