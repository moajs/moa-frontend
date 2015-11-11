# Moa-Frontend

技术栈

- express
- jade
- bootstrap
- jquery
- gulp
- nginx

![](doc/preview.png)

## 前后端分离实践

- 前端：[moa-frontend](https://github.com/moajs/moa-frontend)
  - public下面的采用nginx做反向代理
  - 其他的采用express+jade精简代码（ajax与后端交互）
- 后端：[moa-api](https://github.com/moajs/moa-api)

## Install

```
npm install 
npm start
```

访问 http://127.0.0.1:3010/

## Features

- 经典的 jQuery + bootstrap 简单易用
- 响应式，兼容移动端和pc端
- expressjs + jade 代码极简，功能强大
- 自动挂载路由，在routes目录创建js文件会被自动识别，无需在app.js里配置
- 代码变动，自动重启服务器
- 支持log4js日志
- 内置[simditor](http://simditor.tower.im/)和七牛上传图片
- 使用gulp构建

## Configuration

### nginx

- 复制config/nginx.example.conf为config/nginx.conf
- 修改config/nginx.conf相关端口配置
- 执行`gulp nginx`

说明

- 实际端口8000
- 前端端口3010
- api端口3005

### simditor_qn

- 复制config/simditor_qn.example.conf为config/simditor_qn.conf

```
module.exports = {
  path: '/simditor/upload',
  fileKey: 'file',
	multer:{ 
	 	dest: 'uploads/' 
	},
	qn:{
		accessKey: 'xxx',
		secretKey: 'yyy',
		bucket: 'mengxiaoban',
		origin: 'http://{bucket}.u.qiniudn.com',
		// timeout: 3600000, // default rpc timeout: one hour, optional
		// if your app outside of China, please set `uploadURL` to `http://up.qiniug.com/`
		// uploadURL: 'http://up.qiniu.com/',
	},
	url:function(result){
		return "http://img.mengxiaoban.cn/" + result.hash;
	}
}
```

说明

- path 是simditor里使用的上传路径
- fileKey 是上传后，路由里req获取的字段名称
- multer是express里multer中间件的配置
- qn是qn这个node模块的配置
- url是最终图片地址，可以自己定义

## Tasks

- `npm start` 启动服务器
- `gulp routes` 打印路由
- `gulp kp` 停止服务器
- `gulp nginx` 启动nginx服务器
- `gulp` 跑测试，依赖`gulp watch`和`gulp mocha`

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v0.1.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` shiren1118@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
