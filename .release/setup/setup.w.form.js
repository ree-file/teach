define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/teach/setup'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cIZNVzm';
	this._flag_='0d42b4c7648abd6111eb92526282b23f';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"email":{"define":"email","label":"邮箱：","name":"email","relation":"email","type":"String"},"name":{"define":"name","label":"名称：","name":"name","relation":"name","type":"String"},"pwd":{"define":"pwd","label":"密码：","name":"pwd","relation":"pwd","type":"String"},"repwd":{"define":"repwd","label":"确认密码：","name":"repwd","relation":"repwd","type":"String"}},"directDelete":false,"events":{},"idColumn":"name","isMain":false,"limit":20,"xid":"regData"});
}}); 
return __result;});