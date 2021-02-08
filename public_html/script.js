 $(document).ready(function(){
        $("#myModal").modal('show');
      
    });
    
$(document).ready(function () {
            $("#button1").click(function (event) {
                var text = $('.modal-head').text();
                event.preventDefault();
                CopyToClipboard(text, false, $("#button1").prop('disabled', true).css('background-color','grey').html("Code Copied!"));
    });
 });
 

        function CopyToClipboard(value, showNotification, notificationText) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val(value).select();
            document.execCommand("copy");
            $temp.remove();

            if (typeof showNotification === 'undefined') {
                showNotification = true;
            }
            if (typeof notificationText === 'undefined') {
                notificationText = "Copied to clipboard";
            }
        }
    
 
 
$(document).ready(function () {
            $("#button2").click(function (event) {
                var text = $('.modal-head1').text();
                event.preventDefault();
            secondCopyToCliboard(text, false, $("#button2").prop('disabled', true).css('background-color','grey').html("Code Copied!"));
    });
 });
 
function secondCopyToCliboard(value, showNotification, notificationText) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val(value).select();
            document.execCommand("copy");
            $temp.remove();

            if (typeof showNotification === 'undefined') {
                showNotification = true;
            }
            if (typeof notificationText === 'undefined') {
                notificationText = "Copied to clipboard";
            }
}

$(document).ready(function () {
            $("#button3").click(function (event) {
                var text = $('.modal-head2').text();
                event.preventDefault();
            thirdCopyToCliboard(text, false, $("#button3").prop('disabled', true).css('background-color','grey').html("Code Copied!"));
    });
 });
 
function thirdCopyToCliboard(value, showNotification, notificationText) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val(value).select();
            document.execCommand("copy");
            $temp.remove();

            if (typeof showNotification === 'undefined') {
                showNotification = true;
            }
            if (typeof notificationText === 'undefined') {
                notificationText = "Copied to clipboard";
            }
}
   
   
$(document).ready(function () {
            $("#button4").click(function (event) {
                var text = $('.modal-head3').text();
                event.preventDefault();
            fourthCopyToCliboard(text, false, $("#button4").prop('disabled', true).css('background-color','grey').html("Code Copied!"));
    });
 });
 
function fourthCopyToCliboard(value, showNotification, notificationText) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val(value).select();
            document.execCommand("copy");
            $temp.remove();

            if (typeof showNotification === 'undefined') {
                showNotification = true;
            }
            if (typeof notificationText === 'undefined') {
                notificationText = "Copied to clipboard";
            }
}
    

        
        
    
    
    

    