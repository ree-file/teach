define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var me;
	var Model = function(){
		this.callParent();
		me = this;
	};

	Model.prototype.modelParamsReceive = function(event){
		var name = this.params.name;
	};

	Model.prototype.button1Click = function(event){
		var params = [];
		this.comp("title").each(function(obj){
			var radio=$('input[name='+obj.row.val("id")+"]");
			for(var i =0;i<radio.length;i++){
				if (radio[i].checked) {
					params[params.length] = radio[i].value;
				}
			}
		});
//		this.comp("content").each(function(obj){
//			if (obj.row.val("status")==1) {
//				params[params.length]=obj.row.val("name");
//			}
//		})
		debugger;
	};

	Model.prototype.radio1Change = function(event){
		
	};

	return Model;
});