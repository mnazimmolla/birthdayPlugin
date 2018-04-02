$(document).ready(function(){
	$('#year').change(function(){
		$('#month').val(0);
		$('#day').val(0);
		var year = $('#year').val();
		if(year == 1952 || year == 1956 || year == 1960 || year == 1964 || year ==1968 || year == 1972 || year == 1976 || year == 1980 || year == 1984 || year == 1988 || year == 1992 || year == 1996 || year == 2000 || year == 2004 || year == 2008 || year == 2012 || year == 2016 || year == 2020)
		{
			$('#month').change(function(){
				$('#day').val(0);
				var month = $('#month').val();
				if(month == 2)
				{
					$('#d29').css('display', 'inline');
					$('#d30').css('display', 'none');
					$('#d31').css('display', 'none');
				}
				else if(month == 4 || month == 6 || month == 9 || month == 11)
				{
					$('#d29').css('display', 'inline');
					$('#d30').css('display', 'inline');
					$('#d31').css('display', 'none');					
				}
				else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
				{
					$('#d29').css('display', 'inline');
					$('#d30').css('display', 'inline');
					$('#d31').css('display', 'inline');					
				}
				else
				{
					$('#d29').css('display', 'none');
					$('#d30').css('display', 'none');
					$('#d31').css('display', 'none');
				}
			});
		}
		else
		{
			$('#month').change(function(){
				$('#day').val(0);
				var month = $('#month').val();
				if(month == 4 || month == 6 || month == 9 || month == 11)
				{
					$('#d29').css('display', 'inline');
					$('#d30').css('display', 'inline');
					$('#d31').css('display', 'none');
				}
				else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
				{
					$('#d29').css('display', 'inline');
					$('#d30').css('display', 'inline');
					$('#d31').css('display', 'inline');
				}
				else
				{
					$('#d29').css('display', 'none');
					$('#d30').css('display', 'none');
					$('#d31').css('display', 'none');					
				}
			});			
		}
	});
});
