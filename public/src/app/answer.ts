export class Answer {
    user: string;
    answer: string;  
    desc: string;
    like: number;
    created_at: Date;

    constructor(user, answer, desc, like, created_at) {
        this.user = user;
        this.answer = answer;
        this.desc = desc;
        this.like = like;
        this.created_at = created_at;
    }
}