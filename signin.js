define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var signin = require("./js/user");

	var Model = function(){
		this.callParent();
	};

	//图片路径转换
	Model.prototype.toUrl = function(url){
		return url ? require.toUrl(url) : "";
	};
	Model.prototype.loginBtnClick = function(event){
		var email = this.getElementByXid("email").value;
		var password = this.getElementByXid("password").value;
		signin.signin(email,password);
	};
	return Model;
});
