import {Injectable} from "@nestjs/common";
import {UserEntity} from "./data/user.entity";

@Injectable()
export class UserService {
    constructor(){

    }

    findOneUser() : UserEntity{
        const  user = new UserEntity();
        user.age =22;
        user.id = 1;
        user.name = "afaq javed";

        return user;
    }
}