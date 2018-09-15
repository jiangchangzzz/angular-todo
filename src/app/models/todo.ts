export class Todo {
    id: number;
    title = '';
    complete = false;
    createDate: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
