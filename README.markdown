# It is Pomodoro Time

Timer for the Pomodoro time management technnique. Front-end project based of FCC assignments.
___
***USER STORIES***

___User Story #1:___ I can see an element with `id="break-label"` that contains a string (e.g. "Break Length").

___User Story #2:___ I can see an element with `id="session-label"` that contains a string (e.g. "Session Length").

___User Story #3:___ I can see two clickable elements with corresponding IDs: `id="break-decrement"` and `id="session-decrement"`.

___User Story #4:___ I can see two clickable elements with corresponding IDs: `id="break-increment"` and `id="session-increment"`.

___User Story #5:___ I can see an element with a corresponding `id="break-length"`, which by default (on load) displays a value of 5.

___User Story #6:___ I can see an element with a corresponding `id="session-length"`, which by default displays a value of 25.

___User Story #7:___ I can see an element with a corresponding `id="timer-label"`, that contains a string indicating a session is initialized (e.g. "Session").

___User Story #8:___ I can see an element with corresponding `id="time-left"`. NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).

___User Story #9:___ I can see a clickable element with a corresponding `id="start_stop"`.

___User Story #10:___ I can see a clickable element with a corresponding `id="reset"`.

___User Story #11:___ When I click the element with the id of reset, any running timer should be stopped, the value within `id="break-length"` should return to 5, the value within `id="session-length"` should return to 25, and the element with id="time-left" should reset to its default state.

___User Story #12:___ When I click the element with the id of `break-decrement`, the value within `id="break-length"` decrements by a value of 1, and I can see the updated value.

___User Story #13:___ When I click the element with the id of `break-increment`, the value within `id="break-length"` increments by a value of 1, and I can see the updated value.

___User Story #14:___ When I click the element with the id of `session-decrement`, the value within `id="session-length"` decrements by a value of 1, and I can see the updated value.

___User Story #15:___ When I click the element with the id of `session-increment`, the value within `id="session-length"` increments by a value of 1, and I can see the updated value.

___User Story #16:___ I should not be able to set a session or break length to <= 0.

___User Story #17:___ I should not be able to set a session or break length to > 60.

___User Story #18:___ When I first click the element with `id="start_stop"`, the timer should begin running from the value currently displayed in `id="session-length"`, even if the value has been incremented or decremented from the original value of 25.

___User Story #19:___ If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).

___User Story #20:___ If the timer is running and I click the element with `id="start_stop"`, the countdown should pause.

___User Story #21:___ If the timer is paused and I click the element with `id="start_stop"`, the countdown should resume running from the point at which it was paused.

___User Story #22:___ When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of `timer-label` should display a string indicating a break has begun.

___User Story #23:___ When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the `id="break-length"` element.

___User Story #24:___ When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of `timer-label` should display a string indicating a session has begun.

___User Story #25:___ When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the `id="session-length"` element.

___User Story #26:___ When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding `id="beep"`.

___User Story #27:___ The audio element with `id="beep"` must be 1 second or longer.

___User Story #28:___ The audio element with id of `beep` must stop playing and be rewound to the beginning when the element with the id of `reset` is clicked.

___
A Pen created on CodePen.io. Original URL: [https://codepen.io/Alex_in_the_World/pen/GRJQBrN](https://codepen.io/Alex_in_the_World/pen/GRJQBrN).


