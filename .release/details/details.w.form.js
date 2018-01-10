define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ZJP-mobile/details'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cVzMVfy';
	this._flag_='952b9868c13b863d8345e987b7c3c9d1';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"type":{"define":"type","name":"type","relation":"type","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":1,\"type\":\"定点教学\"},{\"id\":2,\"type\":\"预约教学\"}]","isMain":false,"limit":20,"xid":"title"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"Bind-name":{"define":"Bind-name","name":"Bind-name","relation":"Bind-name","type":"String"},"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"name":{"define":"name","name":"name","relation":"name","type":"String"},"parent":{"define":"parent","name":"parent","relation":"parent","rules":{"integer":true},"type":"Integer"},"status":{"define":"status","name":"status","relation":"status","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":1,\"name\":\"qweqw\",\"parent\":1,\"Bind-name\":\"qweq\",\"status\":0},{\"id\":2,\"name\":\"qweqwe\",\"parent\":2,\"Bind-name\":\"qweqd\",\"status\":0},{\"id\":3,\"name\":\"asdasd\",\"parent\":1,\"Bind-name\":\"qweq\",\"status\":{\"value\":\"\"}}]","isMain":false,"limit":20,"xid":"content"});
}}); 
return __result;});