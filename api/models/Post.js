const db = require ('../dbConfig/init')

class Post {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.date = data.date
        this.name = data.name
        this.body = data.body
    }
    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * FROM posts WHERE id = $1;`, [ id ]);
                let post = new Post(postData.rows[0]);
                resolve (post);
            } catch (err) {
                reject('Post not found');
            }
        });
    }

    static create( )
}