import Mock from 'mockjs';
import Data from './data.json';

// 正则表达式

Mock.mock('http://www.try.com/1',{data:Data});

Mock.mock('http://www.try.com/2',{
    'name|2':'mm_yy', //2 重复两遍
    'age|18-35':29 //18-35:生成18-35的随机数 29类型
});

Mock.mock('http://www.try.com/3',{
    'regexp1':/[a-z][A-Z][0-9]/,
    'regexp2':/\d{5,10}/ //表达式5位到10位
});

Mock.mock('http://www.try.com/4',{
    'info|10-20':[
        {
            'index|1':1,
            'name':'@first @last', // 英文姓名
            'id':"@integer(10000,99999)",  // 正数
            'date':'@datetime',  // 时间 
            'img':'@image("200*200")',  //
            'text':'@sentence(6,22)'
        }
    ]
});


//  热门推荐 数据
let Random = Mock.Random;
let productData = req=>{
    let productList =[]; //存放农机的数组
    for(let i=0; i<100; i++){
        let product = {
            name: Random.ctitle(5, 20),
            img: Random.dataImage('125x125', '农机' + Random.integer(1, 100)),
            price: Random.integer(1000, 10000),
            owner: Random.cname() //产生中文名字
        }
        productList.push(product);
    }
    return productList;
}
Mock.mock('http://www.try.com/getHotProduct',{
    productData
});