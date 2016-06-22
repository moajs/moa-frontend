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