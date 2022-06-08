//[rule:生成口令 ?]

var token = ""

var week = new Date().getDay();
if (week == 0) {
	str = "今天是星期六,变量过期还有1天!更新去鸭！https://t.me/FengYun7_bot";
	sendText(str)
} else if (week == 6) {
	str = "今天是星期六,变量过期还有1天!更新去鸭！https://t.me/FengYun7_bot";
	sendText(str)
} 
var url = param(1);
var title = "爱东东" //自定义标题

var _data = {"url": url,"title": title}
request({
    url: 'http://api.windfgg.cf/jd/gcode',
    method: 'POST',
    dataType:'json',
    headers: {
        "content-type": "application/json",
        "Authorization": "Bearer "+token,
    },
    body: _data
},function(err, resp, data) {
    if (!err && data.request_times < 1000) {
     if(data){
	  sendText("正在生成口令，请稍等片刻......")
      sendText(data.data)}
    }else{
      sendText("单日请求上限"+ "\n当前请求次数为："+data.request_times + "次")	
     }
});
