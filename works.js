const edge = require('edge')

const works = edge.func(`
async (dynamic cb) => {
    cb("This works");
    return null;
}
`)

works(ret => {console.log(ret)})
