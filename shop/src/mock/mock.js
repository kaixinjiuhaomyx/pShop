import Mock from 'mockjs';
import Data from './data.json';

Mock.mock('http://try',{data:Data});

Mock.mock('http://www.try',{
    'name|2':'mm_yy', //2 重复两遍
    'age|18-35':29 //18-35:生成18-35的随机数 29类型
});

Mock.mock('http://www.try2',{
    'regexp1':/[a-z][A-Z][0-9]/,
    'regexp2':/\d{5,10}/
});