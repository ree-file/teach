<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:387px;left:623px;height:auto;" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="title" idColumn="id"><column name="id" type="Integer" xid="xid1"></column>
  
  <data xid="default2">[{&quot;id&quot;:1,&quot;type&quot;:&quot;定点教学&quot;},{&quot;id&quot;:2,&quot;type&quot;:&quot;预约教学&quot;}]</data><column name="type" type="String" xid="xid2"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="content" idColumn="id" confirmDelete="false"><column name="id" type="Integer" xid="xid3"></column>
  <column name="name" type="String" xid="xid4"></column>
  <column name="parent" type="Integer" xid="xid6"></column>
  <data xid="default1">[{&quot;id&quot;:1,&quot;name&quot;:&quot;A公园&quot;,&quot;parent&quot;:1},{&quot;id&quot;:2,&quot;name&quot;:&quot;B公园&quot;,&quot;parent&quot;:1},{&quot;id&quot;:3,&quot;name&quot;:&quot;C公园&quot;,&quot;parent&quot;:1},{&quot;id&quot;:4,&quot;name&quot;:&quot;X学校&quot;,&quot;parent&quot;:2},{&quot;id&quot;:5,&quot;name&quot;:&quot;Z学校&quot;,&quot;parent&quot;:2}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="教学点"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">教学点</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="title">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><h4 xid="h41" bind-text='

 val("type")' class="centerH">h4</h4><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="content" filter=' val("id")==$row.val("parent")'>
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"></div>
   <div class="x-col" xid="col2"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block centerBtn" label="button" xid="button2" onClick="button2Click">
   <i xid="i2"></i>
   <span xid="span1" bind-text='val("name")'></span></a></div>
   <div class="x-col" xid="col3"></div></div></li></ul> </div></li></ul> </div>
  </div>
  </div> 
</div>