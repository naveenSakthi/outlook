angular.module('fashionApp')
  .controller('adminController', function($scope,$mdDialog) {
    $scope.currentFilter=3;
    $scope.setFilter=function(data){
      $scope.currentFilter=data;
    };
    $scope.isActive = function(item) {
        return $scope.currentFilter === item;
    };

    $scope.hstep = 1;
    $scope.mstep = 5;
    $scope.ismeridian = true;
    $scope.filters = [
            {
                'id': 1,
                'value': 'Shop Details',
            },
            {
                'id': 2,
                'value': 'Shop Products',
            },            
            {
                'id': 3,
                'value': 'Offers',
            },
            {
                'id': 4,
                'value': 'Reviews and Others',
            },
            {
                'id': 5,
                'value': 'Subscription',
            }
        ];


        var $form_modal = $('.cd-user-modal'),
        $main_nav = $('.main-nav'),
        $form_signup = $form_modal.find('#cd-signup')

        //open modal
        $main_nav.on('click', function(event){
            if( $(event.target).is($main_nav) ) {
              $form_modal.addClass('is-visible');
              $form_signup.addClass('is-selected');
            }

        });

        //close modal
        $('.cd-user-modal').on('click', function(event){
            if( $(event.target).is($form_modal) || $(event.target).is('.cd-close-form') ) {
                $form_modal.removeClass('is-visible');
            }   
        });
        //close modal when clicking the esc keyboard button
        $(document).keyup(function(event){
            if(event.which=='27'){
                $form_modal.removeClass('is-visible');
            }
        });

    //IE9 placeholder fallback
    //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
    if(!Modernizr.input.placeholder){
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.val(input.attr('placeholder'));
            }
        }).blur();
        $('[placeholder]').parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            })
        });
    }


if( $('.floating-labels').length > 0 ) floatLabels();

    function floatLabels() {
        var inputFields = $('.floating-labels .cd-label').next();
        inputFields.each(function(){
            var singleInput = $(this);
            //check if user is filling one of the form fields 
            checkVal(singleInput);
            singleInput.on('change keyup', function(){
                checkVal(singleInput);  
            });
        });
    }

    function checkVal(inputField) {
        ( inputField.val() == '' ) ? inputField.prev('.cd-label').removeClass('float') : inputField.prev('.cd-label').addClass('float');
    }













});
