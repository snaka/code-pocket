import { Query } from 'react-apollo';
import { ROOT_QUERY } from './App';

console.log('Users.js');

const Users = () =>
  <Query query={ROOT_QUERY}>
    {
      ({ data, loading }) => {
        console.log('loading:', loading);
        return loading ?
                <p>loading users...</p> :
                <UserList count={data.totalUsers} users={data.allUsers} />
      }
    }
  </Query>;

const UserList = ({ count, users }) =>
  <div>
    <p>{count} Users</p>
    <ul>
      {users.map(user =>
        <UserListItem key={user.githubLogin}
          name={user.name}
          avatar={user.avatar} />
      )}
    </ul>
  </div>

const UserListItem = ({ name, avatar }) =>
  <li>
    <img src={avatar} width={48} height={48} alt="" />
    {name}
  </li>

export default Users;
