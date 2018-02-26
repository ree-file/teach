define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var signup = require("./js/user");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.regBtnClick = function(event){
		var userName = this.getElementByXid("userName").value;
		var email = this.getElementByXid("email").value;
		var password = this.getElementByXid("password").value;
		var repassword = this.getElementByXid("repassword").value;
		signup.signup(userName,email,password,repassword);
	};

	return Model;
});
