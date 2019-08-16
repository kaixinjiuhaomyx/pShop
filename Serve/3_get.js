const Koa = require("koa");
const app = new Koa();

app.use( ctx => {
    // 接收参数  http://localhost:3000/?a=12345&b=987654
    let url = ctx.url;
    let query = ctx.query; // 对象
    let queryString = ctx.querystring; // 字符串

    ctx.body = {
        url,
        query,
        queryString
    };
});

app.listen(3000, () => {
    console.log('服务开启成功在3000端口');
});