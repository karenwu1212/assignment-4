
		$(document).ready(function(){
			$('#submit').on('click', function(){
				validation();
			});

			$('#phone').addEventListener('keyup',function(){
				validationPhone1();
			})

			function validation () {
				validateName();
				validateAddress();
				validatePhone1();
				validatePhone2();
				validateEmail();
			}

			function validateName () {
				var obj = $('#name');
				var value = obj.val();
				if (value.length<=0){
					obj.css('border-color','red');
				}
				else{
					obj.css('border-color','green');
				}
			}

			function validateAddress () {
				var obj = $('#address');
				var value = obj.val();
				if (value.length<=0){
					obj.css('border-color','red');
				}
				else{
					obj.css('border-color','green');
				}
			}

			function validatePhone1() {
				var obj = $("#phone");
				var value = obj.val();
				if(value.length==10){
					obj.css('border-color','green');
				}
				else{
					obj.css('border-color','red');
				}
			}

			function validatePhone2(){
				var obj = $("#phone");
				var value = obj.val().toString();
				if(value.length==10){
					obj.val("("+value[0]+value[1]+value[2]+")"+value[3]+value[4]+value[5]+"-"+value[6]+value[7]+value[8]+value[9]);
				}
			}

			function validateEmail(){
				var obj = $("#email");
				var value = obj.val().toString();
				if(value.indexOf("@")==-1){
					obj.css('border-color','red');
				}
				else{
					obj.css('border-color','green');
				}
			}
			

		});
		
	