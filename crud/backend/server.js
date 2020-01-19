const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();

app.use(cors());
app.use(koaBody({json: true}));

let notes = [
    {'id': 1, 'content': 'test'},
    {'id': 2, 'content': 'test'}
    ];
let nextId = 1;

const router = new Router();

// ALL NOTES
router.get('/notes', async (ctx, next) => {
    ctx.response.body = notes;
});

router.post('/notes', async(ctx, next) => {
    console.log(ctx.request.body);
    console.log(typeof ctx.request.body);
    let body = JSON.parse(ctx.request.body);
    console.log(body);
    console.log({
        'id': nextId++,
        'content' : body.content
    });
    //notes.push({...ctx.request.body, id: nextId++});
    notes.push({
        'id': nextId++,
        'content' : body.content
    });
    ctx.response.status = 204;
});


router.delete('/notes/:id', async(ctx, next) => {
    const noteId = Number(ctx.params.id);
    const index = notes.findIndex(o => o.id === noteId);
    if (index !== -1) {
        notes.splice(index, 1);
    }
    ctx.response.status = 204;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7770;
const server = http.createServer(app.callback());
server.listen(port, () => console.log('server started'));