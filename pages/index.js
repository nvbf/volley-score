import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import ControlPanel from '../components/ControlPanel';

class ScoreboardPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchId: '',
      teamsFlipped: false,
      pointsA: 0,
      pointsB: 0,
      setA: 0,
      setB: 0,
      nameA: '',
      nameB: '',
      logoA: '',
      logoB: '',
      colorA: '',
      colorB: '',
      showLogos: false,
      showColors: false,
    };
    this.handleMatchIdChange = this.handleMatchIdChange.bind(this);
    this.handleNameAChange = this.handleNameAChange.bind(this);
    this.handleNameBChange = this.handleNameBChange.bind(this);
    this.handleLogoAChange = this.handleLogoAChange.bind(this);
    this.handleLogoBChange = this.handleLogoBChange.bind(this);
    this.handleColorAChange = this.handleColorAChange.bind(this);
    this.handleColorBChange = this.handleColorBChange.bind(this);
    this.handleLogoCheck = this.handleLogoCheck.bind(this);
    this.handleColorCheck = this.handleColorCheck.bind(this);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.resetPoints = this.resetPoints.bind(this);
    this.flipTeams = this.flipTeams.bind(this);
    this.saveToServer = this.saveToServer.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.matchId === this.state.matchId) {
      this.saveToServer();
    }
  }

  increment(key) {
    this.setState({
      [key]: this.state[key] + 1,
    });
  }

  decrement(key) {
    this.setState({
      [key]: this.state[key] - 1,
    });
  }

  resetPoints() {
    this.setState({
      pointsA: 0,
      pointsB: 0,
    });
  }

  flipTeams() {
    this.setState({ teamsFlipped: !this.state.teamsFlipped });
  }

  handleLogoAChange(selected) {
    this.setState({
      nameA: selected.label,
      logoA: selected.value,
    });
  }

  handleLogoBChange(selected) {
    this.setState({
      nameB: selected.label,
      logoB: selected.value,
    });
  }

  handleNameAChange(event) {
    this.setState({ nameA: event.target.value });
  }

  handleNameBChange(event) {
    this.setState({ nameB: event.target.value });
  }

  handleColorAChange(color) {
    this.setState({ colorA: color.hex });
  }

  handleColorBChange(color) {
    this.setState({ colorB: color.hex });
  }

  handleMatchIdChange(event) {
    const matchId = event.target.value;
    this.setState({ matchId });
    if (matchId.length > 2) {
      this.loadFromServer(matchId);
    }
  }

  handleLogoCheck() {
    this.setState({
      showLogos: !this.state.showLogos,
    });
  }

  handleColorCheck() {
    this.setState({
      showColors: !this.state.showColors,
    });
  }

  saveToServer() {
    axios.post(`/api/update/${this.state.matchId}`, {
      ...this.state
    });
  }

  loadFromServer(matchId = this.state.matchId) {
    axios.get(`/api/scores/${matchId}`)
    .then(({ data })  => this.setState({
      pointsA: data.pointsA || 0,
      pointsB: data.pointsB || 0,
      setA: data.setA || 0,
      setB: data.setB || 0,
      logoA: data.logoA || '',
      logoB: data.logoB || '',
      colorA: data.colorA || '',
      colorB: data.colorB || '',
      nameA: data.nameA || '',
      nameB: data.nameB || '',
      showColors: data.showColor,
      showLogos: data.showLogos,
    }));
  }

  render() {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>OBS Control Panel</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="/static/css/bulma.min.css" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/static/css/react-select.css" />
          <link rel="stylesheet" href="/static/css/control-panel.css" />
        </Head>
        <ControlPanel
          onMatchIdChange={this.handleMatchIdChange}
          onNameAChange={this.handleNameAChange}
          onNameBChange={this.handleNameBChange}
          onLogoAChange={this.handleLogoAChange}
          onLogoBChange={this.handleLogoBChange}
          onColorAChange={this.handleColorAChange}
          onColorBChange={this.handleColorBChange}
          onLogoCheck={this.handleLogoCheck}
          onColorCheck={this.handleColorCheck}
          onIncrement={this.increment}
          onDecrement={this.decrement}
          onResetClick={this.resetPoints}
          onFlipClick={this.flipTeams}
          matchId={this.state.matchId}
          pointsA={this.state.pointsA}
          pointsB={this.state.pointsB}
          setA={this.state.setA}
          setB={this.state.setB}
          nameA={this.state.nameA}
          nameB={this.state.nameB}
          logoA={this.state.logoA}
          logoB={this.state.logoB}
          colorA={this.state.colorA}
          colorB={this.state.colorB}
          isFlipped={this.state.teamsFlipped}
          showLogos={this.state.showLogos}
          showColors={this.state.showColors}
        />
    </div>
  );
  }
}

export default ScoreboardPanel;
