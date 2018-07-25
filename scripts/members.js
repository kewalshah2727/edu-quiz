// //committeeMembers

// app.controller('committeeMembers1', function($scope,$http,$rootScope,$window,Excel,$timeout){
// 	$scope.exportToExcel=function(tableId){ // ex: '#my-table'
//             var exportHref=Excel.tableToExcel(tableId,'KYS-members');
//             $timeout(function(){location.href=exportHref;},100); // trigger download
//         }

// 	var tempFinal = [];
// 	var no = 1;
// 	$http({
// 		method: "POST",
// 		url: serverName+"search/member/",
// 		data: {
// 				perPage: 100,
// 				pgNo: 1
// 			},
// 		contentType: "application/json; charset=utf-8",
//         dataType   : "json",
//         withCredentials: true,
//         crossDomain: true
		
// 	}).success(function(data){
// 		$scope.hIds = [];
// 		$scope.hId = [];
// 		$scope.newhome = [];
// 		$scope.result = [];
// 		$scope.Y = (data.data);
		
// 		angular.forEach($scope.Y, function(item){
// 			if(item.house == null){
//        			// $scope.array.push({'noHIds' : 1});
//        			// console.log("noHIds");
//      		} else {
           
//                 var x ={"hid": item.house.houseId};
//                 $scope.hIds.push(x);
            	
//             }	
//         });


// 	   var arr = $scope.hIds;
		 
// 		var newarr = [];
// 		var unique = {};
		 
// 		angular.forEach(arr, function(item) {
// 		    if (!unique[item.hid]) {
// 		        newarr.push(item);
// 		        unique[item.hid] = item;
// 		    }
// 		});


// 		// $scope.newhIds = angular.toJson(newarr);

// 		// console.log("unique ids", $scope.newhIds); 
// 		// console.log(newarr[5]);
		

// 		newarr.sort(function (x, y) {
// 		    return x.hid - y.hid;
// 		});

// 		var newhIds= newarr;
		
// 		console.log("newhIds", newhIds[1]);

// 		for (i=0;i<newhIds.length;i++){
// 			$scope.houseIds = newhIds[i].hid;
// 			// console.log("houseIds", $scope.houseIds);

     
// /* -----------------------------------------------------------------------------*/
// var checkNull = function(str){
// 	if(!str){
// 		return "";
// 	}
// 	else{
// 		return str;
// 	}
// }	
// 			$http({
// 					method: "POST",
// 					url: serverName+"read/house/member/",
// 					data: {
// 							houseId: $scope.houseIds
// 						},
// 					contentType: "application/json; charset=utf-8",
// 			        dataType   : "json",
// 			        withCredentials: true,
// 			        crossDomain: true
					
// 				}).success(function(data){

// 					var mainData = data.data;
// 					// console.log("main data", mainData.length);

// 					var tableBody = document.getElementById("tbody");

// 					var membersNameTd = document.createElement("td");
// 					var fNameTd = document.createElement("td");
// 					var mNameTd = document.createElement("td");
// 					var sNameTd = document.createElement("td");

// 					for(var j=0;j<mainData.length;j++){

// 						var row = document.createElement("tr");

// 						if(j == 0){
// 							var  srNo = document.createElement("td");
// 							srNo.setAttribute("rowspan",data.data.length);
// 							srNo.innerHTML = no;
// 							row.appendChild(srNo);
// 							tableBody.appendChild(row);
// 							no = no + 1;
// 						}

// 						//name
// 						var name = document.createElement("td");
// 						name.innerHTML = mainData[j].firstName;
// 						row.appendChild(name);
// 						tableBody.appendChild(row);

// 						//Fathers Info
// 						var fname = document.createElement("td");
// 						if(!mainData[j].father){
// 							fname.innerHTML = "-";
// 							fname.setAttribute("style","text-align:center");
// 						}
// 						else{
// 							fname.innerHTML = mainData[j].father;
// 						}
// 						row.appendChild(fname);
// 						tableBody.appendChild(row);

// 						//Mothers Info
// 						var mname = document.createElement("td");

// 						if(!mainData[j].mother){
// 							mname.innerHTML = "-";
// 							mname.setAttribute("style","text-align:center");
// 						}
// 						else{
// 							mname.innerHTML = mainData[j].mother;
// 						}
// 						row.appendChild(mname);
// 						tableBody.appendChild(row);

// 						// Spouse Name
// 						var sname = document.createElement("td");
// 						if(!mainData[j].spouseName){
// 							sname.innerHTML = "-";
// 							sname.setAttribute("style","text-align:center");
// 						}
// 						else{
// 							sname.innerHTML = mainData[j].spouseName;
// 						}
// 						row.appendChild(sname);
// 						tableBody.appendChild(row);

					

// 					// Adress

// 					if(j == 0){
// 						var houseData = data.house;
// 						var  address = document.createElement("td");
// 						address.setAttribute("rowspan",data.data.length);
// 						var res = checkNull(houseData.address_line1) + " " + checkNull(houseData.address_line2) + " "  + checkNull(houseData.landmark) + " " + checkNull(houseData.streetName) + " " + checkNull(houseData.locality) + " " + checkNull(houseData.homeTown) + " " + checkNull(houseData.homeState) + " " + checkNull(houseData.homeCountry);
						
// 						address.innerHTML= res;
// 						row.appendChild(address);
// 						tableBody.appendChild(row);

// 					// House id 

// 						var  houseId = document.createElement("td");
// 						houseId.setAttribute("rowspan",data.data.length);
// 						houseId.innerHTML = houseData.houseId;
// 						row.appendChild(houseId);
// 						tableBody.appendChild(row);

// 					// Number of members
// 						var  noMember = document.createElement("td");
// 						noMember.setAttribute("rowspan",data.data.length);
// 						noMember.innerHTML = data.data.length;
// 						row.appendChild(noMember);
// 						tableBody.appendChild(row); 
				
// 					}

// 				}
					
// 				}).error(function(data){
// 					 // alert("Some error in read/house/member/");
// 				});

// /* -----------------------------------------------------------------------------------*/
// 			} 
			
		
// 	}).error(function(data){
// 		 // alert("Some error in search/member/");
// 	});
// });




// //Events

// app.controller('eventInvitation', function($scope,$http,$rootScope,$window,Excel,$timeout){
// 	$scope.exportToExcel=function(tableId){ // ex: '#my-table'
//             var exportHref=Excel.tableToExcel(tableId,'KYS-Events');
//             $timeout(function(){location.href=exportHref;},100); // trigger download
//         }

//     var arrayCount = function(catchValue){
//     	var returnObj = [];
//     	var count = 1;
//     	var tempVar = 0//catchValue[0].hid;;
//     	for(var i=0;i<catchValue.length;i++){
//     		var j=0;
    		

//     		if(catchValue[i].hid==tempVar){
//     			count++;
//     		}
//     		else{
//     			var jsonret = {
//     			"value":tempVar,
//     			"length":count
//     			}
//     			returnObj.push(jsonret);
//     			count= 1;
//     		}
    		
//     		tempVar = catchValue[i].hid;

    		
//     	}

//     	return returnObj;
//     }    

//           var tempArray = [];

// $scope.pincode = [];
// 	var tempFinal = [];
// 	var no = 1;
// 	$scope.eventInvi = [];
// 	$scope.pincode = [];

// 	$http({
// 		method: "POST",
// 		url: serverName+"read/event/all/",
// 		data: {
// 				query: ''
// 			},
// 		contentType: "application/json; charset=utf-8",
//         dataType   : "json",
//         withCredentials: true,
//         crossDomain: true
		
// 	}).success(function(data){
// 		$scope.hIds = [];
// 		$scope.hId = [];
// 		$scope.newhome = [];
// 		$scope.result = [];
// 		$scope.Y = (data.data);



// 		// console.log("event data", $scope.Y);
		

// 		var tableData = $scope.Y;

// 		var tableBody = document.getElementById("tbody");

// 		var l = 0;
// 		for(var m=0;m<data.data.length;m++){
// 			$scope.eventInvi = data.data[m].eventInvitation;
	
// 				angular.forEach($scope.Y[m].eventInvitation, function(item){
// 					    var x ={"hid": $scope.eventInvi[l].hid};
// 		                $scope.hIds.push(x);
// 		                l=l+1;
// 		        });
// 		}    
// 		// console.log("$scope.hIds", $scope.hIds);

// 		$scope.mainData = data.data;
// 		// console.log("returnCOunt",arrayCount($scope.hIds));
// 		//console.log("$scope.mainData",$scope.mainData);
		
// 		/*==================================================================================*/ 

// 	for(var i=0;i<$scope.mainData.length;i++){
// 		// alert(i);
// 		for(var j=0;j<$scope.hIds.length;j++){
// 			// alert(i);
// 			$scope.houseIds = $scope.hIds[j].hid;
// 			$scope.eventInvi = data.data[i].eventInvitation;


			


// 		$http({
// 					method: "POST",
// 					url: serverName+"read/house/",
// 					data: {
// 							houseId: $scope.houseIds
// 						},
// 					contentType: "application/json; charset=utf-8",
// 			        dataType   : "json",
// 			        withCredentials: true,
// 			        crossDomain: true
					
// 				}).then(function(data){

// 						//console.log("In read house",data.data.data);

// 						$scope.pincode = [];
// 					$scope.houseData = data.data.data;
					

// 					//console.log($scope.houseData);

// 					angular.forEach($scope.houseData, function(item){
// 					    var pinCodes ={"pincode": item.homePincode};
// 					   // console.log("pincode",pinCodes);
// 		                $scope.pincode.push(pinCodes);
// 		                tempArray.push(pinCodes);
// 		        	});
				
// 					// console.log("tempArray",tempArray);
// 					// $scope.pincode = data.data.homePincode;

// 				// }
// 				//$scope.$digest();

// 				}).catch(function(data){
// 		 // alert("Some error in search/member/");
// 				});

// 			}

// 		}

// $timeout(function() {
// 			$scope.pinCodes = tempArray;
// 					// console.log("aray",$scope.pinCodes);

// 	for(var i=0;i<$scope.mainData.length;i++){
// 		// alert(i);
// 		for(var j=0;j<$scope.hIds.length;j++){	



// 					var row = document.createElement("tr");

// 				if(j==0){
// 					var  srNo = document.createElement("td");
// 					srNo.setAttribute("rowspan",$scope.hIds.length);
// 					srNo.innerHTML = no;
// 					row.appendChild(srNo);
// 					tableBody.appendChild(row);
// 					no = no + 1;


// 					var  eventName = document.createElement("td");
// 					eventName.setAttribute("rowspan",$scope.hIds.length);
// 					eventName.innerHTML = $scope.mainData[i].eventName;
// 					row.appendChild(eventName);
// 					tableBody.appendChild(row);

// 				}	

// 					var  houseId = document.createElement("td");
// 					// houseId.setAttribute("rowspan",data.data.length);
// 					houseId.innerHTML = $scope.mainData[i].eventInvitation[j].hid;
// 					row.appendChild(houseId);
// 					tableBody.appendChild(row);


// 					var  address = document.createElement("td");
// 					address.setAttribute("rowspan",data.data.length);
// 					// address.innerHTML = data.data[0].homePincode;;
// 					address.innerHTML = $scope.pinCodes[j].pincode;
// 					row.appendChild(address);
// 					tableBody.appendChild(row);




// 				var  memberNames = document.createElement("td");
// 					memberNames.innerHTML = $scope.eventInvi[j].first_name;
// 					row.appendChild(memberNames);
// 					tableBody.appendChild(row);

// 					var  status = document.createElement("td");
// 					status.innerHTML = $scope.eventInvi[j].decision;
// 					row.appendChild(status);
// 					tableBody.appendChild(row);

// 				}
				
// 				}	




// }, 2000);


// 		/*==================================================================================*/
		
		
// 	}).error(function(data){
// 		 // alert("Some error in search/member/");
// 	});
// });


