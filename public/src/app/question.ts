export class Question {
    user: string;
    text: string;  //this is the question
    desc: string;
    created_at: Date;

    constructor(user, text, desc, created_at) {
        this.user = user;
        this.text = text;
        this.desc = desc;
        this.created_at = created_at;
    }
}