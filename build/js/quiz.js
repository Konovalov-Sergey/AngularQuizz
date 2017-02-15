(function() {
    var app = angular.module('myQuiz', []);
    app.controller('QuizController', ['$scope','$http','$sce', function($scope){
        $scope.score = 0;
        $scope.activeQuestion = -1;
        $scope.activeQuestionAnswer = 0;
        $scope.percentage = 0;
        
        $scope.quizList =
		[
			{
				question: 'Saturn is the ______ planet from the Sun.',
				answers:  [
					{ id: 0, text: 'Fourth' },
					{ id: 1, text: 'Sixt' },
					{ id: 2, text: 'Second' },
					{ id: 3, text: 'Eighth' }
				],
				correct: 1
			},
			{
				question: 'One year on Saturn is equivalent to how many years on Earth',
				answers:  [
					{ id: 0, text: 12 },
					{ id: 1, text: 6 },
					{ id: 2, text: 29 },
					{ id: 3, text: 2 }
				],
				correct: 2
			},
			{
				question: 'What is the name of Saturns largest moon?',
				answers:  [
					{ id: 0, text: 'Hercules' },
					{ id: 1, text: 'Europa' },
					{ id: 2, text: 'Goliath' },
					{ id: 3, text: 'Zeus' },
					{ id: 4, text: 'Titan' },
					{ id: 5, text: 'Troton' }
				],
				correct: 4,
				feedback: 'Saturn is the  second-largest in the Solar System, after Jupiter', 
			},
			{
				question: 'Saturn is visible from Eath without a telescope?',
				answers:  [
					{ id: 0, text: 'True' },
					{ id: 1, text: 'False' }
				],
				correct: 0
			}
		];
		$scope.totalQuestions = $scope.quizList.length;
    	$scope.selectAnswer = function(qIndex, aIndex){
			var questionState = $scope.quizList[qIndex].questionState;
			
			if(questionState != 'answered'){
				$scope.quizList[qIndex].selectedAnswer = aIndex;
				var correctAnswer = $scope.quizList[qIndex].correct;
				$scope.quizList[qIndex].correctAnswer = correctAnswer;
 			   
				if(aIndex === correctAnswer){
					$scope.quizList[qIndex].correctness = 'correct';
					$scope.score += 1;
				} else {
					$scope.quizList[qIndex].correctness = 'incorrect';
				};
				$scope.quizList[qIndex].questionState = 'answered';
			};
			$scope.percentage = (($scope.score / $scope.totalQuestions) * 100).toFixed(1);
		};
		
    	$scope.isSelected = function(qIndex, aIndex) {
		   return $scope.quizList[qIndex].selectedAnswer === aIndex;
		};
		
		$scope.isCorrect = function(qIndex, aIndex) {
		   return $scope.quizList[qIndex].correctAnswer === aIndex;
		};
		$scope.selectContinue = function() {
			return $scope.activeQuestion += 1;	
		};
		
    }]);
})();							  