define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

		return{
			signup : function(userName1,email1,password1,repassword1){
				var info;
				$.ajax({
					url: "http://39.107.114.120/api/signupup",//php的api路径
					async:false,
					dataType:"json",
					data:{name:userName1,email:email1,password:password1,password_confirmation:repassword1},//需要传递的数据
					type:'POST',//php获取类型
					success:function(data){//请求成功返回值存在data里
						info = data;
					},
					error:function(ero){
						info =ero;
					},
				});
				console.log(info);
				return info;
			},

			signin : function(email1,password1){
				var info;
				$.ajax({
					url: "http://39.107.114.120/api/login",//php的api路径
					async:false,
					dataType:"json",
					data:{email:email1,password:password1},//需要传递的数据
					type:'POST',//php获取类型
					success:function(data){//请求成功返回值存在data里
						info = data;
					},
					error:function(ero){
						info = ero;
					},
				});
				console.log(info);
				return info;
			},

	};

	});
