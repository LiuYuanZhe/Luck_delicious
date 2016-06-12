AV.initialize('ci78XyNRxGe1v9vvP5jIlM0o-gzGzoHsz', 'NrIq3LPVo40QbClNG2YQl91F');

var Message = AV.Object.extend("Message");
var msgindex = [];


$(document).ready(function(){
	getAllMsg();
	$('#enter').click(function(){
		shangchuan();
	});
});

//内容写在输入框中，点击按钮时获得内容，上传至leancloud数据库

//保存
function shangchuan(){
	var message = new Message();
	message.set('msg',$('#textInput').val());
	message.save();
	message.save().then(function(){
		/*alert('successful',+message.get('msg'));*/
		getAllMsg();
	},function(error){
		console.log('error:'+error)
	});
}

//从leancloud获取全部留言，显示在text中

function getAllMsg(){
	var innerhtml = '';
	var query = new AV.Query(Message);
	query.find().then(function(messages){
		for (var i = 0; i < messages.length; i++) {
			msgindex[i] = messages[i].get('objectId');
			innerhtml +=messages[i].get('msg')+'<br>';
		};
		$('#textOutput').html(innerhtml);
	},function(error){
		console.log('error:outputerror');
	});
}