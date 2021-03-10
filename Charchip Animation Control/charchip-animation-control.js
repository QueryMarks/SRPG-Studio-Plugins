(function () {
UnitCounter.initialize = function() {
		this._counter = createObject(CycleCounter);
		// Below line altered to 6 to make each sprite display more quickly. Default is 14. - Query
		this._counter.setCounterInfo(6);
		this._counter.disableGameAcceleration();
		
		// Process for character chip which is consisted of 2 columns, not 3 columns.
		this._counter2 = createObject(CycleCounter);
		// i have no idea what charchips this applies to but i'm sure as heck not messing with it - Query
		this._counter2.setCounterInfo(34);
		this._counter2.disableGameAcceleration();
	}
UnitCounter._getAnimationArray = function() {
		// Values altered to hold 0 and 2 for longer. Default is [0, 1, 2, 1]. - Query
		return [0, 0, 0, 0, 1, 2, 2, 2, 2, 1];
	}
}) ();