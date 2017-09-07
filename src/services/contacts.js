import axios from 'axios';

class ContactsService {
  getUsers() {
    return axios.get('https://jsonplaceholder.typicode.com/users')
      .then(result => {
        return result.data.map(user => {
          return {id: user.id, name: user.name, email: user.email, city: user.address.city};
        })
      });
  }

  getPosts({userId}) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(result => {
        return result.data.map(post => {
          return {id: post.id, userId: post.userId, title: post.title, text: post.body};
        })
      });
  }
}

export default new ContactsService();