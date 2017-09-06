import axios from 'axios';

class ContactsService {
  get() {
    return axios.get('https://jsonplaceholder.typicode.com/users')
      .then(result => {
        return result.data.map(user => {
          return {id: user.id, name: user.name, email: user.email, city: user.address.city};
        })
      });
  }
}

export default new ContactsService();