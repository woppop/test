$(function() {

  $.ajax({
        url: "http://api.wefeelfine.org:8080/ShowFeelings?display=rest&returnfields=sentence&feeling=sorry&limit=50",
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            displayData(data);
        }

    });

    function displayData(data) {

        for (var i = 0; i < people.length; i++) {
			console.log(data);
        }

    }
    
});