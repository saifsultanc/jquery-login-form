var Login = function() {

  var handleLogin = function() {

  }

  var handleForgetPassword = function() {

  }

  var handleRegister = function() {

    function format(state) {
      if (!state.id) return state.text;
      return "<img class='flag' src='img/flags/" + state.id.toLowerCase() + ".png'/>&nbsp;&nbsp;" + state.text;
    }

    $('.register-form input').keypress(function(e) {
      if (e.which == 13) {
        if ($('.register-form').validate().form()) {
          $('.register-form').submit();
        }
        return false;
      }
    });

    jQuery('#register-btn').click(function(){
      jQuery('.login-form').hide();
      jQuery('.register-form').show();
    });

    jQuery('#register-back-btn').click(function(){
      jQuery('.login-form').show();
      jQuery('.register-form').hide();
    });
  }

  return {
    init: function() {
      handleLogin();
      handleForgetPassword();
      handleRegister();
    }
  }
}();