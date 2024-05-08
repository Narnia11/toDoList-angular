export class Objects {
    constructor(public userId: number, public id: number, public title: string, public completed: boolean) {
        this.userId = userId
        this.id = id
        this.title = title
        this.completed = completed
    }
}