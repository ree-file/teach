<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id"><column label="Aaaa" name="id" type="Integer" xid="xid1"></column>
  <column name="name" type="String" xid="xid2"></column>
  <data xid="default3">[{&quot;id&quot;:1,&quot;name&quot;:&quot;篮球&quot;},{&quot;id&quot;:2,&quot;name&quot;:&quot;足球&quot;}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="首页"
          class="x-titlebar" xid="title">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">首页</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1">
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1">
   <div class="x-contents-content" xid="content2"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="data1">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2" bind-click="li2Click"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4"><h5 xid="h51" bind-text=' val("id")'>h5</h5></div>
   <div class="x-col" xid="col5"><h5 xid="h52" bind-text=' val("name")'>h5
  </h5></div>
   <div class="x-col" xid="col6"></div></div></li></ul> </div>
  </div>
  <div class="x-contents-content" xid="content3"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-25" xid="col1"><span xid="span1"><![CDATA[家长名称]]></span></div>
   <div class="x-col" xid="col2"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input1"></input></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col x-col-25" xid="col8">
    <span xid="span2"><![CDATA[联系方式]]></span></div> 
   <div class="x-col" xid="col7">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input2"></input></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col x-col-25" xid="col10">
    <span xid="span5"><![CDATA[孩子姓名]]></span></div> 
   <div class="x-col" xid="col9">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input3"></input></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col x-col-25" xid="col12">
    <span xid="span6"><![CDATA[孩子年龄]]></span></div> 
   <div class="x-col" xid="col11">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input4"></input></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col x-col-25" xid="col14">
    <span xid="span7"></span></div> 
   <div class="x-col" xid="col13">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input5"></input></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col x-col-25" xid="col16">
    <span xid="span8"></span></div> 
   <div class="x-col" xid="col15">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input6"></input></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col x-col-25" xid="col18">
    <span xid="span9"></span></div> 
   <div class="x-col" xid="col17">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input7"></input></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col19"></div>
   <div class="x-col" xid="col20"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="提交" xid="button1" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span10">提交</span></a></div>
   <div class="x-col" xid="col21"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="button" xid="button4" onClick="button4Click">
   <i xid="i4"></i>
   <span xid="span11"></span></a></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10">
   <div class="x-col" xid="col22"><span xid="span12"></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
   <div class="x-col" xid="col25">
    <span xid="span13"></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12">
   <div class="x-col" xid="col26">
    <span xid="span14"></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
   <div class="x-col" xid="col27">
    <span xid="span15"></span></div> </div></div></div></div>
  <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group btn-group-justified footer" tabbed="true" xid="buttonGroup1">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="首页" xid="button2" target="content2">
    <i xid="i2"></i>
    <span xid="span3">首页</span></a> 
   <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="个人中心" xid="button3" target="content3">
    <i xid="i3"></i>
    <span xid="span4">个人中心</span></a> </div></div></div> 
</div>