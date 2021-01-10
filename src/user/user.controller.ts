import { Controller, Get } from '@nestjs/common';
import {UserService} from "./user.service";
import {UserEntity} from "./data/user.entity";

@Controller()
export class UserController {
    constructor(private readonly userService : UserService) {}

    @Get("/find")
    getUser(): UserEntity {
        return this.userService.findOneUser();
    }
}
