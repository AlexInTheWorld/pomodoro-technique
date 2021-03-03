function logItem(e) {
  const item = document.querySelector(`[data-id=${e.target.id}]`);
  item.toggleAttribute('hidden');
}

const clickedElements = document.querySelectorAll('span');
clickedElements.forEach(element => {
  element.addEventListener('click', logItem);
});

class TimeLengthControls extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "length-control" }, /*#__PURE__*/
      React.createElement("div", { id: this.props.titleID }, this.props.tagText), /*#__PURE__*/
      React.createElement("div", { id: "container" }, /*#__PURE__*/
      React.createElement("button", { id: this.props.decrementID, onClick: this.props.timeSpan, value: "+" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-chevron-circle-up" })), /*#__PURE__*/
      React.createElement("div", { id: this.props.lengthID }, this.props.timeSetting), /*#__PURE__*/
      React.createElement("button", { id: this.props.incrementID, onClick: this.props.timeSpan, value: "-" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-chevron-circle-down" })))));



  }}


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brkLength: 5,
      sessionLength: 25,
      minutes: '25',
      seconds: '00',
      inactive: true,
      sessionStage: 'Session' };

    this.setBrkLength = this.setBrkLength.bind(this);
    this.setSessionLength = this.setSessionLength.bind(this);
    this.controlTimer = this.controlTimer.bind(this);
    this.reset = this.reset.bind(this);
    this.timerSession = this.timerSession.bind(this);

  }
  controlTimer() {
    this.setState({
      inactive: !this.state.inactive });

    this.timerSession();
  }
  timerSession() {
    var time = Number(this.state.minutes) * 60 + Number(this.state.seconds);
    if (this.state.inactive) {
      this.timerRunning = setInterval(() => {
        if (time > 0) {
          time -= 1;
          this.setState({
            minutes: ("0" + Math.floor(time / 60)).slice(-2),
            seconds: ("0" + Math.round((time / 60 - Math.floor(time / 60)) * 60)).slice(-2) });


        } else if (this.state.sessionStage === 'Session') {
          time = this.state.brkLength * 60;
          this.setState({
            sessionStage: 'Break',
            minutes: ("0" + this.state.brkLength).slice(-2),
            seconds: '00' });

        } else {
          time = this.state.sessionLength * 60;
          this.setState({
            sessionStage: 'Session',
            minutes: ("0" + this.state.sessionLength).slice(-2),
            seconds: '00' });

        }
      }, 1000);
    } else {
      clearInterval(this.timerRunning);
    }
  }

  reset() {
    clearInterval(this.timerRunning);
    this.setState({
      brkLength: 5,
      sessionLength: 25,
      minutes: '25',
      seconds: '00',
      inactive: true,
      sessionStage: 'Session' });

  }

  setBrkLength(e) {
    if ((this.state.brkLength > 1 || e.target.value === "+") && (this.state.brkLength < 60 || e.target.value === "-") && this.state.inactive) {
      this.setState({
        brkLength: eval(this.state.brkLength + e.currentTarget.value + 1) });

      if (this.state.sessionStage === "Break") {
        this.setState({
          minutes: ("0" + eval(this.state.brkLength + e.currentTarget.value + 1)).slice(-2),
          seconds: '00' });

      }
    }
  }
  setSessionLength(e) {
    if ((this.state.sessionLength > 1 || e.target.value === "+") && (this.state.sessionLength < 60 || e.target.value === "-") && this.state.inactive) {
      this.setState({
        sessionLength: eval(this.state.sessionLength + e.currentTarget.value + 1) });

      if (this.state.sessionStage === "Session") {
        this.setState({
          minutes: ("0" + eval(this.state.sessionLength + e.currentTarget.value + 1)).slice(-2),
          seconds: '00' });

      }
    }
  }
  render() {
    var element;
    if (this.state.inactive) {
      element = /*#__PURE__*/React.createElement("i", { class: "fas fa-play", style: { color: "#117243" } });
    } else {
      element = /*#__PURE__*/React.createElement("i", { class: "fas fa-pause", style: { color: "#cc3300" } });
    }
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(TimeLengthControls, { titleID: "break-label", incrementID: "break-increment", decrementID: "break-decrement", lengthID: "break-length", tagText: "Break Length", timeSpan: this.setBrkLength, timeSetting: this.state.brkLength }), /*#__PURE__*/
      React.createElement(TimeLengthControls, { tagText: "Session Length", titleID: "session-label", lengthID: "session-length", incrementID: "session-increment", decrementID: "session-decrement", timeSpan: this.setSessionLength, timeSetting: this.state.sessionLength }), /*#__PURE__*/
      React.createElement("div", { className: "time-wrapper" }, /*#__PURE__*/
      React.createElement("div", { id: "timer-label" }, this.state.sessionStage), /*#__PURE__*/
      React.createElement("div", { id: "time-left" }, this.state.minutes, " : ", this.state.seconds)), /*#__PURE__*/

      React.createElement("div", { className: "timer-control" }, /*#__PURE__*/
      React.createElement("button", { id: "start_stop", onClick: this.controlTimer },
      element), /*#__PURE__*/

      React.createElement("button", { id: "reset", onClick: this.reset }, /*#__PURE__*/
      React.createElement("i", { class: "fas fa-redo-alt" })))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Timer, null), document.querySelector("#app"));