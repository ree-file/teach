define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.button1Click = function(event){
	};
	Model.prototype.test=function(aa){
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
		justep.Shell.showPage(require.toUrl("./details.w"),par);
		
	};

	return Model;
});