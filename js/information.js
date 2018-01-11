define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	return{
		putrecords: function (parent_name, parent_phone, children_name, children_age){//使用界面：bankBanding
			var Banded = false;
			$.ajax({
				url: "http://stabunkow.site/api/records",//php的api路径
				async:false,
				dataType:"json",
				data: { parent_name: parent_name, parent_phone: parent_phone, children_name: children_name, children_age: children_age},//需要传递的数据
				type:'post',//php获取类型
				success:function(data){
					Banded = true;
				},
				error:function(ero){
	        }
			});
			return Banded;
		},

		getrecords : function(){//使用界面：bankBanding
			var records;
			$.ajax({
				url: "http://stabunkow.site/api/records",//php的api路径
				async:false,
				dataType:"json",
				data:{},//需要传递的数据
				type:'get',//php获取类型
				success:function(data){
					records = data[2];
					console.log(records);
				},
				error:function(ero){
	        }
			});
			return records;
		},

	};

});
