import React from 'react';
import '../styles.css';
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: ''
        }
        this.playSound  = this.playSound.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.keyPress();
    }
    playSound (event) {
        const sound  = event.target.firstChild;
        const soundId= event.target.firstChild.id
        sound.currentTime = 0;
        sound.play();
        if(soundId === 'Q') {
            this.setState({
                display: 'Chord 1'
            })
        }
        else if(soundId === 'W') {
            this.setState({
                display: 'Chord 2'
            })
        }
        else if(soundId === 'E') {
            this.setState({
                display: 'Chord 3'
            })
        }
        else if(soundId === 'A') {
            this.setState({
                display: 'Shaker'
            })
        }
        else if(soundId === 'S') {
            this.setState({
                display: 'Open HH'
            })
        }
        else if(soundId === 'D') {
            this.setState({
                display: 'Closed HH'
            })
        }
        else if(soundId === 'Z') {
            this.setState({
                display: 'Kick'
            })
        }
        else if(soundId === 'X') {
            this.setState({
                display: 'Snare 1'
            })
        }
        else if(soundId === 'C') {
            this.setState({
                display: 'Snare 2'
            })
        }

    }
    keyPress () {
        const self = this;
        document.addEventListener('keydown', function keyPressed (e) {
            let buttons = document.querySelectorAll('button');
                for(let i = 0; i < buttons.length; i++) {
                    const sound = buttons[i].firstChild;
                    const soundId = buttons[i].firstChild.id
                    if(e.keyCode === 81 && soundId === 'Q') {
                        sound.currentTime = 0;
                        sound.play()
                        self.setState({
                            display: 'Chord 1'
                        })
                    }
                    else if(e.keyCode === 87 && soundId === 'W') {
                        sound.currentTime = 0;
                        sound.play()
                        self.setState({
                            display: 'Chord 2'
                        })
                    }
                    else if(e.keyCode === 69 && soundId === 'E') {
                        sound.currentTime = 0;
                        sound.play()
                        self.setState({
                            display: 'Chord 3'
                        })
                    }
                    else if(e.keyCode === 65 && soundId === 'A') {
                        sound.currentTime = 0;
                        sound.play()
                        self.setState({
                            display: 'Shaker'
                        })
                    }
                    else if(e.keyCode === 83 && soundId === 'S') {
                        sound.currentTime = 0;
                        sound.play()
                        self.setState({
                            display: 'Open HH'
                        })
                    }
                    else if(e.keyCode === 68 && soundId === 'D') {
                        sound.currentTime = 0;
                        sound.play()
                        self.setState({
                            display: 'Closed HH'
                        })
                    }
                    else if(e.keyCode === 90 && soundId === 'Z') {
                        sound.currentTime = 0;
                        sound.play()
                        self.setState({
                            display: 'Kick'
                        })
                    }
                    else if(e.keyCode === 88 && soundId === 'X') {
                        sound.currentTime = 0;
                        sound.play()
                        self.setState({
                            display: 'Snare 1'
                        })
                    }
                    else if(e.keyCode === 67 && soundId === 'C') {
                        sound.currentTime = 0;
                        sound.play()
                        self.setState({
                            display: 'Snare 2'
                        })
                    }
                }
        })
    }
    render () {
    return (
    <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        <div id="buttons">
            <button onClick={this.playSound} id="Chord 1" className="drum-pad"><audio id='Q' src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"className="clip"></audio>Q</button>
            <button onClick={this.playSound} id="Chord 2" className="drum-pad"><audio id='W' src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"className="clip"></audio>W</button>
            <button onClick={this.playSound} id="Chord 3" className="drum-pad"><audio id='E' src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" className="clip"></audio>E</button>
            <button onClick={this.playSound} id="Shaker"  className="drum-pad"><audio id='A' src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" className="clip"></audio>A</button>
            <button onClick={this.playSound} id="Open HH" className="drum-pad"><audio id='S' src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" className="clip"></audio>S</button>
            <button onClick={this.playSound} id="Closed HH" className="drum-pad"><audio id='D' src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" className="clip"></audio>D</button>
            <button onClick={this.playSound} id="Kick"className="drum-pad"><audio id='Z' src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" className="clip"></audio>Z</button>
            <button onClick={this.playSound} id="Snare 1"className="drum-pad"><audio id='X' src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" className="clip"></audio>X</button>
            <button onClick={this.playSound} id="Snare 2"className="drum-pad"><audio id='C' src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" className="clip"></audio>C</button>
        </div>
    </div>
    )
    }
}
export default Main;