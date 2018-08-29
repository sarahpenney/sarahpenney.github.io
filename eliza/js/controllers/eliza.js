angular.module('elizaBot')
  .controller('ElizaCtrl', ElizaCtrl);

ElizaCtrl.$inject = ['elizaService', '$timeout', '$scope'];
function ElizaCtrl(elizaService, $timeout, $scope) {
  const eliza = this;

  eliza.userInput = null;
  eliza.response = null;

  eliza.reset = reset;
  eliza.step = step;

  eliza.lines = [];

  function reset() {
    elizaService.reset();
    eliza.lines = [];
    $timeout(step, 500);
  }

  function step() {

    if (elizaService.quit) {
      eliza.userInput = null;
      reset();
      return;
    } else if (eliza.userInput) {
      const input = eliza.userInput;
      eliza.lines.push({ voice: 'You', text: input });
      $timeout(() => {
        eliza.lines.push({ voice: 'Eliza', text: elizaService.transform(input) });
        $scope.$apply();
      }, Math.floor(Math.random() * 1000) + 1000);
    } else if (eliza.lines.length === 0) {
      // no input and no saved lines -> output initial
      eliza.lines.push({ voice: 'Eliza', text: elizaService.getInitial() });
    }

    eliza.userInput = null;
  }

  $timeout(step, 500);

}