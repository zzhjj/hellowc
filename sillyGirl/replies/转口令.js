/*
 * @Author: 烟雨
 * @Date: 2022年4月20日00:34:57
 * @LastEditors: 烟雨
 * @LastEditTime: 2022年4月20日00:34:53
 * @FilePath: \undefinedc:\Users\Administrator\Desktop\转口令.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 烟雨, All Rights Reserved. 
 */
//[rule:code ?]
//[rule:解析 ?]

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAzNTI1NzcxOCwiaWF0IjoxNjUzNDM3NzM4LCJleHAiOjE2ODQ5NzM3Mzh9.kr3GxrKorwDnAyWyF1K-NrmcpO1UTyOjal0FXfSk6qE"

var code = param(1);
sendText("正在解析口令，请稍等片刻......")
var _data = {"code": code}
request({
    url: 'https://api.zhezhe.cf/jd/jCommand',
    method: 'POST',
    dataType:'json',
    headers: {
        "content-type": "application/json",
        "Authorization": "Bearer "+token,
    },
    body: _data
},function(err, resp, data) {
    if (!err && resp.statusCode == 200) {
     if(data){
	 sendText("口令发起人："+data.data.userName + "\n链接："+ data.data.jumpUrl + "\n今日Token调用次数："+data.request_times + "次")}
    }else{
      sendText("单日请求上限"+ "\n当前请求次数为："+data.request_times + "次")
     }
});
