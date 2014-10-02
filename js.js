$(document).ready(function(e) {
	//-------------------------
	$('#container').height($(window).height());
	
	$(window).resize(function(e) {
		$('#container').height($(window).height());
		
	});
	

	
	$('#lefts').click(function(e) {
			console.log($('#sliderwrap').offset().left);
		if(!($('#sliderwrap').offset().left<=-2880)){
			$('#sliderwrap').animate({left:"-=1440"});
			
		}
	});
		$('#rights').click(function(e) {
						console.log($('#sliderwrap').offset().left);
		if(!($('#sliderwrap').offset().left>=0)){
			$('#sliderwrap').animate({left:"+=1440"},function(){
			
				
				});
		}
	});
		setInterval(function(){	if($('#sliderwrap').offset().left>0)
							{$('#sliderwrap').animate({left:"0"});}else 
							if($('#sliderwrap').offset().left<-2880){$('#sliderwrap').animate({left:"-2880"})}
					},100);
	//---
});