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
	
	Model.prototype.button2Click = function (event) {
		var name = event.bindingContext.$object.val('name');
		justep.Shell.showPage("preAppTeach",{name:name});
	};

	return Model;
});