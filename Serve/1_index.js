const Koa = require('koa');
const app = new Koa();

app.use(async ctx =>{
    ctx.body = 'Hello word!';  //响应实例
});

app.listen(3000, ()=>{
    console.log('sever start 3000');
});