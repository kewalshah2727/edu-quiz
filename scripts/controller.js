app.controller('homePage', function ($scope, $http, $window, $rootScope, $location) {

	 $scope.Loginbtn = function(){
       $window.location = "#/home";	
 }
  $scope.Registerbtn = function(){
  		
       $window.location = "#/register";
 }

var imagelist = [
{ image : 'images/a525803948b1c165.jpg'},
{ image : "images/68439583-study-wallpapers.jpg"},
{ image : "images/69169239-study-wallpapers.jpg"},
{ image : "images/rsz_datasciencequiz.jpg"},
{ image : "images/rsz_digitalmarketingquiz.jpg"},
    			];

    $scope.pls = imagelist;
                      $scope.imagelist1 = Object.keys($scope.pls)
                .map(function (value, index) {
                    return { values: $scope.pls[value] }

});
                

	// ===============================Read quiz type=================================================
	$http({
				method: 'GET',
				url: serverName+'read/quiz/type/',
				data:{},
				contentType: "application/json; charset=utf-8",
		        dataType   : "json",
		        // withCredentials: true,
		        crossDomain: true
			})
			.success(function (data) {
				$scope.X = data.data;
				// console.log("termsConditions",data.data);		
				
			}).error(function(data){
				//alert("error");
			});
	// ===============================Read quiz type=================================================

});
	
	app.controller('register', function ($scope, $http, $window, $rootScope, $location, $anchorScroll) {
		// $scope.name = null;
		// $scope.email=null;
		// $scope.mobile=null;
		// $scope.gender=null;
$scope.gotoError = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('formError');

      // call $anchorScroll()
      $anchorScroll();
    };



		if($rootScope.testType == "2"){
					$scope.regBG = "images/DataScienceQuiz.jpeg"
				}
				else if($rootScope.testType == "1"){
					$scope.regBG = "images/DigitalMarketingQuiz.jpeg"
				}
   window.history.forward(1);
			$rootScope.$on('$locationChangeStart', function (event, next, current) {

                if (window.backButton) {
                	//console.log("faf");
                    event.preventDefault();
                    window.history.forward();// keep redirecting to the same page
                }
        });
		// ========================================GENDER=======================================
		$http({
						method: 'GET',
						url: serverName+'read/choices/',
						data:{},
						contentType: "application/json; charset=utf-8",
				        dataType   : "json",
				        // withCredentials: true,
				        crossDomain: true
					})
					.success(function (data) {
						
						$scope.G = data.genderList;
						// console.log("$scope.G",$scope.G);

					}).error(function(data){
						//alert("error");
					});
		// ========================================GENDER ENDS=======================================

		
		$scope.postdata = function (firstName, middleName, lastName, dob, genResult, candidateEmail, parentEmail,candidateMobile, parentMobile, addressLine1, city, pincode, state, schoolCollegeName, tnc){
			var candidateMobileLength = $('#candidateMobile').val().length;
			console.log(candidateMobileLength);
			var parentMobileLength = $('#parentMobile').val().length;
			var pincodeLength = $('#pincode').val().length;
			if(firstName==null){$scope.myWelcome = "Please enter valid first name.";}
			else if(middleName==null){$scope.myWelcome = "Please enter valid middle name.";}
			else if(lastName==null){$scope.myWelcome = "Please enter valid last name.";}
			else if(dob==null) {$scope.myWelcome = "Please select date of birth.";}

			else if($scope.gender==null) {$scope.myWelcome = "Please select gender.";}

			else if(candidateEmail==null ){$scope.myWelcome = "You have entered an invalid candidate e-mail address.";}
			else if(parentEmail==null ){$scope.myWelcome = "You have entered an invalid parent e-mail address.";}
			// else if(email!=null){
			// 		var atpos = email.indexOf("@");
			// 	    var dotpos = x.lastIndexOf(".");
			// 	    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
			// 	        alert("Not a valid e-mail address");
			// 	        return false;
			// 	    }
			// }
			else if(candidateMobile==null) {$scope.myWelcome = "Please enter your contact number.";}
			else if(parentMobile==null) {$scope.myWelcome = "Please enter parent's contact number.";}
			// else if(mobile!=null) {console.log('mobile.length',mobile.length);}
			else if(candidateMobileLength > 10 || candidateMobileLength < 10) {$scope.myWelcome = "Not a valid 10-digit phone number (must not include spaces or special characters)";}
			else if(parentMobileLength > 10 || parentMobileLength < 10) {$scope.myWelcome = "Not a valid 10-digit phone number (must not include spaces or special characters)";}
			else if(addressLine1==null){$scope.myWelcome = "Please enter address.";}
			else if(city==null){$scope.myWelcome = "Please enter city name.";}

			else if(pincode==null) {$scope.myWelcome = "Please enter pincode.";}
			else if(pincodeLength > 6 || pincodeLength < 6) {$scope.myWelcome = "Not a valid 6-digit pincode (must not include spaces or special characters)";}
			else if(state==null){$scope.myWelcome = "Please enter state.";}
			else if(schoolCollegeName==null){$scope.myWelcome = "Please enter your school/college name.";}

			else if(tnc == null){
				$scope.myWelcome = "Please accept terms and conditions";
				// console.log("tnc",tnc);
			}
			else {
			// var genderSlice = gender;
			// gender = genderSlice.slice(0, 1);
			document.getElementById("submit").disabled = true;
			$http({
				method: 'POST',
				url: serverName+'/create/student',
				// url: 'http://demo5963381.mockable.io/',
				data: {
					firstName : firstName,
					middleName : middleName,
					lastName : lastName,
					dob : dob,
					genResult : $scope.gender,
					candidateEmail : candidateEmail,
					parentEmail : parentEmail,
					candidateMobile : candidateMobile,
					parentMobile : parentMobile,
					addressLine1 : addressLine1,
					city : city,
					pincode : pincode,
					state : state,
					schoolCollegeName : schoolCollegeName,
					tnc : tnc,
					
					
					//isCorrect: isCorrectAns
				},
				contentType: "application/json; charset=utf-8",
		        dataType   : "json",
		        // withCredentials: true,
		        crossDomain: true
			})
			.success(function (data) {

				console.log('successfully entered data')
				console.log(data);

					//alert("success");
					// console.log(data);
				// console.log("error",data);
				if(data.status==false){
					$scope.myWelcome = data.validation;
				} else {
					$rootScope.studentId = data.data.studentId;
				}
					
					// console.log("$rootScope.questAns",$rootScope.questAns);

					var finalDataJson = {
						"student" : data.data.studentId,
						"questionAnsList" : $rootScope.questAns
					}


					 // console.log("************finaleeee***********",finalDataJson)

				// alert("Submitted");

				// ===============================================================================================

					$http({
						method: 'POST',
						url: serverName+'apply/quiz/test/',
						data:finalDataJson,
						contentType: "application/json; charset=utf-8",
				        dataType   : "json",
				        // withCredentials: true,
				        crossDomain: true
					})
					.success(function (data) {
						
						$window.location = "#/thankyou";
						

					}).error(function(data){
						//alert("error");
						// console.log("dataError",data);
					});

				// ===============================================================================================

					
				
			}).error(function(data){
				//alert("error");
				$scope.myWelcome = "We're sorry to inform you that your test data is lost. Please retake the test and enter the details again. Please do not press back button during the test.";
				console.log("error",data);
						// console.log("dataError",data);


			});
		}
	}
	});

	app.controller('thankYou', function ($scope, $http, $window, $rootScope, $location) {

	//=========================Thank you===================================== 
								$http({
									method: 'POST',
									url: serverName+'read/student/result/',
									data:{
										student : $rootScope.studentId	
									},
									contentType: "application/json; charset=utf-8",
							        dataType   : "json",
							        // withCredentials: true,
							        crossDomain: true
								})
								.success(function (data) {
									
									$scope.studentResult = data;
									$scope.correctAns = data.data.student.correctAnswer;
									$scope.image = serverName+data.data.student.badge.image;
									$scope.titleAfterScore = data.data.student.badge.name;
									// if($rootScope.testType == "2"){
									// 	if($scope.titleAfterScore == 'Proficient' || $scope.titleAfterScore == 'Expert'){
									// 		$scope.dataVis = 
									// 	}
									// }
									

									// couponsDetails

									$scope.C = data.data.couponsDetails;
									$scope.scholarship = data.data.scholarship;
									// $scope.quizTypeB4 = $scope.C["0"].quizType.name;
									if($rootScope.testType == "2"){
										$scope.quizType = "Data Science";
										$scope.quizTypeName = "Data Science "
									}
									if($rootScope.testType == "1"){
										$scope.quizType = "Digital Marketing"
										$scope.quizTypeName = "Digital Marketing"
									}


									// console.log('$scope.C',$scope.C);
        									
									// var titleAfterScore = "";
									// if($scope.correctAns < 25){
									// 	 titleAfterScore = "Poor!"
	 							// 	} else if($scope.correctAns >= 25 && $scope.correctAns < 50 ){
									// 	 titleAfterScore = "Good!"
	 							// 	} else if($scope.correctAns >= 50 && $scope.correctAns <= 75 ){
									// 	 titleAfterScore = "Expert!"
	 							// 	}
									// 	document.getElementById("titleAfterScore").innerHTML = titleAfterScore; 
									
									
									// console.log("$scope.studentResult",$scope.studentResult);		

								}).error(function(data){
									//alert("error");
								});
						// =========================Thank you ends====================================

	});		



app.controller('correctAnswers', function ($scope, $http, $window, $rootScope, $location) {

	//=========================correctAnswers===================================== 
			$http({
				method: 'POST',
				url: serverName+'read/student/qa_all/',
				data:{
					student : $rootScope.studentId
				},
				contentType: "application/json; charset=utf-8",
		        dataType   : "json",
		        // withCredentials: true,
		        crossDomain: true
			})
			.success(function (data) {
				$scope.X = data.data;

				// console.log("$scope.correctAnswers",data.data);		


			}).error(function(data){
				//alert("error");
			});
						// =========================correctAnswers ends====================================

	});		




app.controller('termsConditions', function ($scope, $http, $window, $rootScope, $location) {
//    window.history.forward(1);
// clearTimeout(tim);
// $rootScope.$on('$locationChangeStart', function (event, next, current) {

//                 if (window.backButton) {
//                 	//console.log("faf");
//                     event.preventDefault();
//                   //  window.history.forward();// keep redirecting to the same page
//                 }
//         });

	$scope.termsNcon = function(termsNconSelected){
		if(termsNconSelected == null){
			alert("Please accept terms and conditions");
		} else {
			// console.log("termsNconSelected",termsNconSelected);
			window.location="#/test";

		}
	}
	// $scope.pdf = {
 //        src: '../pdf/Test Your Data Quotient Quiz TC.pdf',
 //    };
 // $scope.src = "../pdf/Test Your Data Quotient Quiz TC.pdf";

	// $scope.postTestType = function (){

	// 	if($scope.selected==null){$scope.selectType = "Please select one of the type.";}
	// 	else{
	// 		// $scope.selectType = $scope.selected;
	// 		$rootScope.testType = $scope.selected;
	// 		window.location="#/test";

	// 	}
	// }
	// //=========================termsConditions===================================== 
	// 		$http({
	// 			method: 'GET',
	// 			url: serverName+'read/quiz/type/',
	// 			data:{},
	// 			contentType: "application/json; charset=utf-8",
	// 	        dataType   : "json",
	// 	        // withCredentials: true,
	// 	        crossDomain: true
	// 		})
	// 		.success(function (data) {
	// 			$scope.X = data.data;
	// 			// console.log("termsConditions",data.data);		
				
	// 		}).error(function(data){
	// 			//alert("error");
	// 		});
	// // =========================termsConditions====================================
});		



	 //  	$scope.postdata = function (name, email, phone, programName1, programName2, programName3, programName4) {
		
		// $scope.programName1 = programName1;
		// $scope.programName2 = programName2;
		// $scope.programName3 = programName3;
		// $scope.programName4 = programName4;
			
			// console.log("var programName1",$scope.programName1);
			// console.log("var programName2",$scope.programName2);
			// console.log("var programName3",$scope.programName3);
			// console.log("var programName4",$scope.programName4);	

		// $http({
		// 		method: 'POST',
		// 		url: serverName+'create/user/',
		// 		data: {
		// 			name: name,
		// 			email: email,
		// 			phone: phone,
		// 			programName1: $scope.programName1,
		// 			programName2: $scope.programName2,
		// 			programName3: $scope.programName3,
		// 			programName4: $scope.programName4
		// 		},
		// 		contentType: "application/json; charset=utf-8",
		//         dataType   : "json",
		//         // withCredentials: true,
		//         crossDomain: true
		// 	})
		// 	.success(function (data) {
		// 		// alert(data);
		// 		if( JSON.stringify(data.status) === "true"){

					// console.log(data);
					
		// 			$scope.userId = data.user.userId;
		// 			$window.sessionStorage.setItem("userId", $scope.userId);
		// 			$window.location = "#/test";
		// 			// $scope.myWelcome = $scope.userId;
		// 		}
		// 		else
		// 			$scope.myWelcome = data.validation;
		// 			// alert($scope.myWelcome);
		// 	}).error(function(data){
		// 		$scope.myWelcome = "Please enter data in all fields and enter valid email address.";
		// 	});

		// };

	app.controller('test', function ($scope, $http, $window, $rootScope, $location) {
   window.history.forward();
var sec = 0;


// $rootScope.$on('$locationChangeStart', function (event, next, current) {

//                 if (window.backButton) {
//                 //	console.log("faf");
//                     event.preventDefault();
//                     //window.history.forward();// keep redirecting to the same page
//                 }
//         });
			var tim;

		//	clearTimeout(tim);
			$scope.no=0;
	       
	        var min = 0;
	        sec = 150;
	        var f = new Date();
	        $scope.f1 = function() {
	            f2();
	            // document.getElementById("starttime").innerHTML = f.getSeconds();
	            // document.getElementById("starttime").innerHTML = f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();
	            // document.getElementById("starttime").innerHTML = f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();
	             
	          
	        }
	        var f2 = function() {
	            if (parseInt(sec) > 0) {
	                sec = parseInt(sec) - 1;
	                // document.getElementById("showtime").innerHTML = "Remaining Time :"+min+" Minutes ," + sec+" Seconds";
	                document.getElementById("showtime").innerHTML =  sec;
	                // document.getElementById("showtime").innerHTML = min+":" + sec;
	               
	               // tim = setTimeout("f2()", 1000);
	                tim = setTimeout(function(){ f2(); }, 1000);
	            }
	            else {
	            	if (parseInt(sec) == 0 && parseInt(min) == 0) { 

	     	        document.getElementById("submit").click();
	            		
	    			$window.location = "#/home";
						// // window.location.assign("test.php");
							
						
							
	             	} else {
	                if (parseInt(sec) == 0) {
	                    min = parseInt(min) - 1;
	                    if (parseInt(min) == 0) {
	                        clearTimeout(tim);
	                        // location.href = "default5.aspx";
	                      //  window.location.assign("home.php");
	                        
	                    }
	                    else {
	                        sec = 60;
	                        // document.getElementById("showtime").innerHTML = "Your Left Time  is :" + min + " Minutes ," + sec + " Seconds";
	                        document.getElementById("showtime").innerHTML = min+":" + sec;    
	                        //tim = setTimeout("f2()", 1000);
	                        tim = setTimeout(function(){ f2(); }, 1000);
	                    }
	                }
	            	}
	               
	            }
	        }

	var answerTicked = [];
	var currentPageAndQuest = {};
	var y = [];
	var flagCheck = true;
		$scope.postTest = function () {

			if(answerTicked.length == 0){
			
					if(document.getElementsByName("rdoResult"+currentPageAndQuest.currentQuestion)!=null){
						var radioButtons = document.getElementsByName("rdoResult"+currentPageAndQuest.currentQuestion);

						for(var i = 0 ; i < radioButtons.length ; i++){
							if(radioButtons[i].checked==true){
								var quesAns = {
										"question" : currentPageAndQuest.currentQuestion,
										"answer" : radioButtons[i].value
									}
								answerTicked.push(quesAns)
							}}}
			} else {
			for(var ans = 0 ; ans < answerTicked.length ; ans++){
				if(flagCheck){
				if(answerTicked[ans].question!= currentPageAndQuest.currentQuestion){


					if(document.getElementsByName("rdoResult"+currentPageAndQuest.currentQuestion)!=null){
						var radioButtons = document.getElementsByName("rdoResult"+currentPageAndQuest.currentQuestion);

						for(var i = 0 ; i < radioButtons.length ; i++){
							if(radioButtons[i].checked==true){
								var quesAns = {
										"question" : currentPageAndQuest.currentQuestion,
										"answer" : radioButtons[i].value
									}
								answerTicked.push(quesAns)
								flagCheck = false;

								}}}}


					
				}
			}
		}
			$rootScope.questAns = answerTicked;
		   	$window.location = "#/home";		
		}


	// var tim;
	// $scope.no=0;
	       
	//         var min = 0;
	//         var sec = 90;
	//         var f = new Date();
	//         $scope.f1 = function() {
	//             f2();
	//             document.getElementById("starttime").innerHTML = f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();
	//             // document.getElementById("starttime").innerHTML = f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();
	             
	          
	//         }
	//         var f2 = function() {
	//             if (parseInt(sec) > 0) {
	//                 sec = parseInt(sec) - 1;
	//                 document.getElementById("showtime").innerHTML = "Remaining Time :"+min+" Minutes ," + sec+" Seconds";
	//                 document.getElementById("showtime").innerHTML = min+":" + sec;
	               
	//                // tim = setTimeout("f2()", 1000);
	//                 tim = setTimeout(function(){ f2(); }, 1000);
	//             }
	//             else {
	//             	if (parseInt(sec) == 0 && parseInt(min) == 0) { 

	//      	        document.getElementById("submit").click();
	            		
	//     			$window.location = "#/thankyou";
	// 					// // window.location.assign("test.php");
							
						
							
	//              	} else {
	//                 if (parseInt(sec) == 0) {
	//                     min = parseInt(min) - 1;
	//                     if (parseInt(min) == 0) {
	//                         clearTimeout(tim);
	//                         // location.href = "default5.aspx";
	//                       //  window.location.assign("home.php");
	                        
	//                     }
	//                     else {
	//                         sec = 60;
	//                         // document.getElementById("showtime").innerHTML = "Your Left Time  is :" + min + " Minutes ," + sec + " Seconds";
	//                         document.getElementById("showtime").innerHTML = min+":" + sec;    
	//                         //tim = setTimeout("f2()", 1000);
	//                         tim = setTimeout(function(){ f2(); }, 1000);
	//                     }
	//                 }
	//             	}
	               
	//             }
	//         }
		/***************************/
	var quesId =[];
	var finalData = [];
		// $scope.randomize = function () {
	 //        return 0.5 - Math.random();
	 //    };
		$http({
				method: 'POST',
				// url: "views/questions.json",
				url: serverName+"read/all/questions/",
				data:{"quizType":$rootScope.testType},
				contentType: "application/json; charset=utf-8",
		        dataType   : "json",
		        // withCredentials: true,
		        crossDomain: true
			})
			.success(function (data) {
				// alert(data);
				Array.prototype.removeValue = function(name, value){
				   var array = $.map(this, function(v,i){
				      return v[name] === value ? null : v;
				   });
				   this.length = 0; //clear original array
				   this.push.apply(this, array); //push all elements except the one we want to delete
				}
				if($rootScope.testType == "2"){
					$scope.testBG = "images/DataScienceQuiz.jpeg";
					$rootScope.backGroundAll = "images/DataScienceQuiz.jpeg";
				}
				else if($rootScope.testType == "1"){
					$scope.testBG = "images/DigitalMarketingQuiz.jpeg";
					$rootScope.backGroundAll = "images/DigitalMarketingQuiz.jpeg";

				}
				

			//countries.results.removeValue('name', 'Albania');

				 answerTicked = [];
				$scope.allQuestions = data.data;
				$scope.allQuestionsLength = data.data.length;

				// console.log("$scope.allQuestions",$scope.allQuestions);
				// console.log("$scope.allQuestionsLength",$scope.allQuestionsLength);
				$scope.x = [];
				
				$scope.y = $scope.allQuestions["0"].question;
				$('#pagination-demo').twbsPagination({
	        totalPages: 15,
	        visiblePages: 0,
	        next: 'Next',
	        prev: 'Previous',
	        onPageClick: function (event, page) {

	        	$scope.x = [];


					if(document.getElementsByName("rdoResult"+y.questionId)!=null){
						var radioButtons = document.getElementsByName("rdoResult"+y.questionId);

						for(var i = 0 ; i < radioButtons.length ; i++){
							if(radioButtons[i].checked==true){
								// console.log("answerrrrr",radioButtons[i].value)
								//Make proper JSon here
								
								if(answerTicked.length == 0){
									var quesAns = {
										"question" : y.questionId,
										"answer" : radioButtons[i].value
									}
									answerTicked.push(quesAns)
								}else 
									{
										for(var ansLoop = 0 ; ansLoop<answerTicked.length ; ansLoop++){
											if(answerTicked[ansLoop].question == y.questionId){
												//answerTicked.splice(0,ansLoop);
												 answerTicked.removeValue("question",y.questionId);
												//answerTicked[ansLoop].tickedOption = radioButtons[i].value;

												var quesAns = {
																	"question" : y.questionId,
																	"answer" : radioButtons[i].value
																}
																answerTicked.push(quesAns)
												
											} 
											else{
												var quesAns = {
																	"question" : y.questionId,
																	"answer" : radioButtons[i].value
																}
																answerTicked.push(quesAns)
												}

									}

								}

							

								
							}
						}

						// console.log("************toCheck",answerTicked);
					}
					while (document.getElementById('myForm').hasChildNodes()) {
					    document.getElementById('myForm').removeChild(document.getElementById('myForm').lastChild);
					}
	        	// console.log("jsonValue",data.data[page-1])
	            //fetch content and render here
	            
	            y=[];
	            y = data.data[page-1];

	            currentPageAndQuest = {
	            	"currentPage" : page,
	            	"currentQuestion" : y.questionId
	            }
	            // $scope.y = data.questions[3]
	            if(!$scope.$$phase) {
			         $scope.$apply();
			    }
	            // $scope.$digest();

	            var paraQue = document.createElement('p');
	            var bold = document.createElement('b');

	            paraQue.setAttribute("name","question");
	            paraQue.setAttribute("class","question");
	            bold.innerHTML = y.question;

	            paraQue.appendChild(bold);
	            document.getElementById('myForm').appendChild(paraQue);

	            for(var i=1;i<=4;i++){
	            if(y["option"+i] != null){
	            	// [2].option3
	            	var label = document.createElement("label");
	            	var paraB4Label = document.createElement("p");
	            	label.setAttribute("class","optionsSize");
				    var radio = document.createElement("input");
				    radio.type = "radio";
				    radio.name = "rdoResult"+y.questionId;
				    radio.value = "Option"+i;
				    radio.id = "rdoId"+i+y.questionId;


				    for(var ansLoop = 0 ; ansLoop<answerTicked.length ; ansLoop++){
				    	if(answerTicked.length!=0 && answerTicked[ansLoop].question ==y.questionId && answerTicked[ansLoop].answer== "Option"+i){
				    	radio.checked = true;
				    }
				    }

				    

				    // paraB4Label.appendChild(label);
				    
				    label.appendChild(radio);

				    label.appendChild(document.createTextNode(y["option"+i]));

	            	var paraAns = document.createElement('p');
	            	var divAns = document.createElement('div');
	            	var divRow = document.createElement('div');
	            	if(i%2 == 0){
		   				divRow.setAttribute("class","row");
	            	} else {
		   				divRow.setAttribute("class","");
	            	}
		   			divAns.setAttribute("class","col-md-6");
		   			paraAns.setAttribute("class","paraOptionsSize");
	            	// paraAns.setAttribute("class","text-center");
	            	
		            divRow.appendChild(divAns);
		            divAns.appendChild(paraAns);
		            paraAns.appendChild(label);
		            document.getElementById('myForm').appendChild(divRow);
		        }
	            }
	        }
	    });
				
			}).error(function(data){
					alert("error");
			});







	  
	});



	// 	$scope.question=null;
	// 	$scope.answer=null;
	// 	$scope.userId = $window.sessionStorage.getItem("userId");
		// console.log("user id ",$scope.userId);
	// 	var sendData = function(quesId,answer){
			
	// 	$http({
	// 			method: 'POST',
	// 			url: serverName+'create/questionanswer/',
	// 			data: {
	// 				user: $scope.userId,
	// 				question: quesId,
	// 				answer: answer,
	// 				//isCorrect: isCorrectAns
	// 			},
	// 			contentType: "application/json; charset=utf-8",
	// 	        dataType   : "json",
	// 	        withCredentials: true,
	// 	        crossDomain: true
	// 		})
	// 		.success(function (data) {
				
	// 				//alert("success");
					// console.log(data);

					
				
	// 		}).error(function(data){
	// 			//alert("error");
	// 		});
	// 	};

	// console.log("quesId",quesId);
	// 	$scope.postTest = function () {
	// 		var count = 0;
	// 	for(var j=1;j<=quesId.length;j++){
	// 	// for(var j=1;j<=5;j++){
	// 		for(var i =1;i<5;i++){
	// 			var domElement = "radio"+i+j;
	// 			if(document.getElementById(domElement) !=null ){
	// 				if(document.getElementById(domElement).checked==true){
						// console.log(document.getElementById(domElement).value);
	// 					var choice = document.getElementById(domElement).value;
	// 					sendData(quesId[j-1],choice);

						
	// 					// var ans = finalData[j-1].answer;
	// 					// if(choice == ans){
	// 					// 	sendData(quesId[j-1],choice,true);
	// 					// }
	// 					// else{
	// 					// 	sendData(quesId[j-1],choice,false);
	// 					// }
						
	// 				} 
	// 				else{
	// 						count++;	
	// 				}
	// 			}
	// 			else{
	// 						count++;	
	// 				}
				
	// 		}
	// 		if(count == 4){
	// 			sendData(quesId[j-1],"N/A");
	// 		}
	// 		if(j==quesId.length){

				
	// 			$http({
	// 			method: 'POST',
	// 			url: serverName+'save/user/test/',
	// 			data: {
	// 				userId: $scope.userId
					
	// 			},
	// 			contentType: "application/json; charset=utf-8",
	// 	        dataType   : "json",
	// 	        withCredentials: true,
	// 	        crossDomain: true
	// 		})
	// 		.success(function (data) {
				// console.log(data);			
	// 		}).error(function(data){
	// 			//alert("error");
	// 		});


	// 		}
	// 		count = 0;
	// 		// $window.location = "#/thankyou";

	// 	}
		// console.log("hello");
		// console.log($scope.userId);
		
	//    	$window.location = "#/thankyou";
		

	// 	};



