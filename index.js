// 请求接口: http://wthrcdn.etouch.cn/weather_mini
		// 请求方法: get
		// 请求参数: city(查询城市名)
		// 响应内容: 天气信息
		var app=new Vue({
			el:"#outer",
			data:{
				city:'',
				weatherList:[]
			
			},
			methods:{
				searchWeather:function(){
					//调用接口
					var that=this;
					axios.get('http://wthrcdn.etouch.cn/weather_mini?city='
					+this.city)
					.then(function(response){
						that.weatherList=response.data.data.forecast;
					},
					function(err){})
				},
				changeCity:function(where){
					this.city=where;
					this.searchWeather();
				}
			},
		})