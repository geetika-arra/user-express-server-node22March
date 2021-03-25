const users = require('../repos/user.repo');
class userService{
    getUsers(){
       return users;
    }
    getUsersById(id){
        return users.users.find(u => u.id == id);
    }

}
module.exports=userService;