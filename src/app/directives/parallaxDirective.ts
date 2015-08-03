module app.directives {
	'use strict';

	function parallax(): ng.IDirective {
		return {
			restrict: 'A',
			link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
				$(window).scroll(() => {
					var delta = $(window).scrollTop() / 3;
					var newY = -delta + 'px';
					console.log(newY);

					var newBGPos = '50% ' + newY;
					$(element).css({
						backgroundPosition: newBGPos
					});
				});
			}
		};
	}

	angular
		.module('app.directives')
		.directive('parallax', parallax);
}
