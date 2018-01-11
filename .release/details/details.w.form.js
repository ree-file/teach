define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/teach/details'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c77jIfa';
	this._flag_='f810526dc0b63226cd84b855e0da30f1';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"type":{"define":"type","name":"type","relation":"type","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":1,\"type\":\"定点教学\"},{\"id\":2,\"type\":\"预约教学\"}]","isMain":false,"limit":20,"xid":"title"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"name":{"define":"name","name":"name","relation":"name","type":"String"},"parent":{"define":"parent","name":"parent","relation":"parent","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":1,\"name\":\"A公园\",\"parent\":1},{\"id\":2,\"name\":\"B公园\",\"parent\":1},{\"id\":3,\"name\":\"C公园\",\"parent\":1},{\"id\":4,\"name\":\"X学校\",\"parent\":2},{\"id\":5,\"name\":\"Z学校\",\"parent\":2}]","isMain":false,"limit":20,"xid":"content"});
}}); 
return __result;});