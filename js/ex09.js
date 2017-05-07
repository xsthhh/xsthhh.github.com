var map = new BMap.Map("myMap"); 
var point = new BMap.Point(120.141363,30.257778);//west lake
var schoolpoint = new BMap.Point(120.018158, 30.295574);//school
map.centerAndZoom(point, 15);  

map.addControl(new BMap.MapTypeControl());
// map.addControl(new BMap.OverviewMapControl());  
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.NavigationControl()); 
map.addControl(new BMap.OverviewMapControl({
    anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
    isOpen: true
}));
      
var marker = new BMap.Marker(point);// 创建标注     
map.addOverlay(marker); 
map.enableScrollWheelZoom();

$(init)
function init() {

	var local = new BMap.LocalSearch(map, {
		pageCapacity: 8,
		renderOptions: {
		map: map,
		autoViewport: true,
		panel: "result"
		}
	});
	local.searchNearby("宾馆", "西湖");
 
	// map.addEventListener("click", function(e){ //获取经纬度 
	// alert(e.point.lng + ", " + e.point.lat);    
	// });

    // part one
    $("body").on("click", "#p1", function() {
        $("#result").fadeIn();
        map.clearOverlays();
        var local = new BMap.LocalSearch(map, {
			pageCapacity: 8,
			renderOptions: {
			map: map,
			autoViewport: true,
			panel: "result"
		    }
		});
		local.searchNearby("宾馆", "西湖");
    });
    // part two
    $("body").on("click", "#p2", function() {
    	$("#result").fadeIn();
        map.clearOverlays();
	    var start="杭州师范大学仓前新校区",end="宾馆";
		var transit = new BMap.TransitRoute(map, { 
			renderOptions:{
				map: map,
				panel:"result"
			} 
		});
		transit.search(start,end); 
	 });
    //part three
    $("body").on("click", "#p3", function() {
    	$("#result").hide();
        map.clearOverlays();
        map.centerAndZoom(schoolpoint, 17);

		var data_info =[[120.014286,30.295106,"体育馆","XX/XX分","XXXX条评论"," "],//体育馆
						[120.012319,30.296307],
						[120.017727,30.294670],//博文苑
						[120.016685,30.294202],
						[120.016236,30.294794],
						[120.015876,30.295184],
						[120.016990,30.295808],
						[120.016469,30.296089],
						[120.015230,30.296089],
						[120.014798,30.296463],
						[120.015804,30.296556],
						[120.015535,30.296946],
						[120.022218,30.298677],//图书馆
						[120.018787,30.295169],//食堂
						[120.017547,30.293921],
						[120.020134,30.294935],//恕园
						[120.020404,30.295590],
						[120.018787,30.294405],
						[120.017098,30.293843],//5
						[120.019074,30.295278],//7
						[120.021212,30.297040],//9
						[120.021428,30.296728],//10
						[120.020619,30.296400],
						[120.019937,30.296837],
						[120.020188,30.297055],//14
						[120.020637,30.297414],//16
						[120.017817,30.296650],//19
						[120.018266,30.297383],//公共艺术部
						[120.020368,30.297975],//27
						[120.020637,30.298162],//28
						[120.018338,30.297897],//30
						[120.018679,30.298256],//31
						[120.017781,30.297507],//33
						[120.018230,30.297741],//34
						[120.017368,30.297585],//36
						[120.017511,30.297679],//37
						[120.015050,30.297663],//38
		               ];

		for(var i=0;i<data_info.length;i++)
		{ 
			//设置标注
			var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));
			map.addOverlay(marker); 
			
			//信息框
			var sContent =
			"<div class=\"ui-info\"> \
		      <div class=\"container-fluid\"> \
		          <div class=\"row\"> \
		              <div class=\"ui-img\"><img src=\"img/ex09-1.jpg\" id=\"imgdemo\"></div> \
		          </div> \
		          <div class=\"row\"> \
		              <div class=\"col-sm-8\"> \
		                  <div class=\"ui-info-left\"> \
		                      <div class=\"ui-info-name\">" + "XXXXX" + "</div> \
		                      <div class=\"ui-info-star\">\
		                      	<i class=\"fa fa-star\"></i>\
		                      </div>\
		                      <span class=\"ui-info-score\">" + "XX/XX分" + "</span> \
		                      <span class=\"ui-info-review\">" + "XXXX条评论" + "</span> \
		                  </div> \
		              </div> \
		              <div class=\"col-sm-4\"> \
		                  <div class=\"ui-info-right\"> \
		                      <div class=\"ui-info-price\">" + "XXXXX" + "</div> \
		                      <div class=\"ui-info-more\">查看详情</div> \
		                  </div> \
		              </div> \
		          </div> \
		      </div> \
		    </div>";

			//信息窗口
			var content1=data_info[i][2];

			var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
			marker.addEventListener("click", function(){          
			   this.openInfoWindow(infoWindow);
			   //图片加载完毕重绘infowindow
			   document.getElementById('imgdemo').onload = function (){
			   infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
			}
	       });
		}

	});
}





