define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	var me;
	var Model = function() {
		me=this;
		this.callParent();
		var shellImpl = new ShellImpl(this, {
			"contentsXid" : "pages",
			"pageMappings" : {
				"mainActivity" : {
					url : require.toUrl('./mainActivity.w')
				},
				"details" : {
					url : require.toUrl('./details.w')
				},
				"preAppTeach" : {
					url : require.toUrl('./preAppTeach.w')
				},
			}
		})

	};
	Model.prototype.modelLoad = function(event){

	};

	Model.prototype.windowDialog1Receive = function(event){
	};

	Model.prototype.windowDialog1Close = function(event){
	};

	return Model;
});
