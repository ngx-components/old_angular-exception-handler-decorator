(function(){

  /**
   * @ngdoc decorator
   * @name exceptionHandler
   * @description
   * This decorator allows custom logic to be executed
   * when an exception is thrown.
   *
   * By default, it first delegates to the built-in
   * AngularJS exception handler that logs a stacktrace
   * in the console.
   *
   * $requires $provide
   * $requires $delegate
   * @param $delegate
   * @returns {Function}
   */
  function exceptionHandler($delegate){
    return function(exception, cause) {

      // Delegate to AngularJS handler first
      $delegate(exception, cause);

      // PUT YOUR CUSTOM CODE RIGHT HERE

    };
  }

  // Inject dependencies
  exceptionHandler.$inject = ['$delegate'];

  /**
   * Register the exception handler with the provider
   *
   * @param $provide
   */
  function registerExceptionHandler($provide){
    $provide.decorator('$exceptionHandler', exceptionHandler);
  }

  // Inject dependencies
  registerExceptionHandler.$inject = ['$provide'];

  // Export
  angular
    .module('app')
    .config(registerExceptionHandler);

})();