define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var information = require('./js/information');

	var Model = function(){
		this.callParent();
	};

	Model.prototype.button1Click = function (event) {
		var parent_name = this.getElementByXid("input1").value;
		var parent_phone = this.getElementByXid("input2").value;
		var children_name = this.getElementByXid("input3").value;
		var children_age = this.getElementByXid("input4").value;
		var is_success = information.putrecords(parent_name, parent_phone, children_name, children_age);
	};

	Model.prototype.button4Click = function (event) {
		var getrecords = information.getrecords();
	};

	Model.prototype.test=function(aa){-
		aa++;
		return aa;
	}

	Model.prototype.modelLoad = function(event){
		this.comp("title").set({
			title:"教育",
		});
	};

	Model.prototype.li2Click = function(event){
		var row = event.bindingContext.$object;
		var name = row.val("name");
		var par = {
				name:name,
		};
		justep.Shell.showPage("details");
		
	};

	return Model;
});