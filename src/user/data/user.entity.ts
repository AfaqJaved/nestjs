
export  class UserEntity {
    private _id : number;
    private _age : number;
    private _name : string;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}