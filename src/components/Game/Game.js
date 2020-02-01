import React from 'react'

import { Link } from 'react-router-dom'

import './_game.scss'

import Modal from './Modal/Modal'

class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            result: "",
            text: ``,
            suggest: "",
            attempt: 0,
            highscore: 0,
            range: ""
        }
    }
    // ============================
    // ====    React Methods   ====
    // ============================

    componentDidMount() {
        const { mode } = this.props.location.state;
        this.closeModal()
        this.setState({ mode: mode })
    }
    //whenever componentDidMount executes the setting of state run logic of modeChange()
    componentDidUpdate(prevProps, prevState) {
        if (prevState.mode !== this.state.mode) {
            console.log('Mode changed.')
            this.modeChange()
        }
    }

    // ============================
    // ====       Methods      ====
    // ============================

    // Changes the state based on the mode user has chosen.
    modeChange() {
        if (this.state.mode === 1) {
            this.setState({
                number: Math.floor(Math.random() * 11),
                title: "Normal",
                modeColor:"normal",
                rule: "Guess the magic number between 0 & 10",
                attempt: 0,
                rangeColor:"",
                range:""
            })
            return
        }
        //else
        return this.setState({
            number: Math.floor(Math.random() * 101),
            title: "Hard",
            modeColor:"hard",
            rule: "Guess the magic number between 0 & 100",
            attempt: 0,
            rangeColor:"",
            range:""
        })
    }

    //Setting input value to state.answer
    getAnswer = (e) => {
        return this.setState({
            answer: e.target.value
        })
    }
    // Whenever user  enter/returns conditionals checks if answer is equal to # generated  
    checkAnswer = (e) => {
        var keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode == '13') {
            if (this.state.number == this.state.answer) {
                this.setState({
                    result: "Correct!",
                    text: `The Answer is ${this.state.number}`,
                    suggest: "Now guess the next number",
                })
                this.openModal()
                this.modeChange()
                return
            }
            //else
            this.setState({
                result: "Wrong!",
                text: `The Answer is not ${this.state.answer}`,
                suggest: "Try again!",
                attempt: ++this.state.attempt
            })
            this.handleHighScore()
            this.openModal()
            this.answerRange()
            return
        }
    }

    answerRange() {
        if (this.state.answer < this.state.number) {
            this.setState({
                range: "Too Low",
                rangeColor:"cold"
            })
            return
        }
        //else
        this.setState({
            range: "Too High",
            rangeColor:"hot"
        })
    }
    // if high scor
    handleHighScore() {
        if(this.state.highscore <  this.state.attempt){
           return this.setState({highscore:++this.state.highscore})
        }
        //else
        return
    }
    openModal = () => {
        document.getElementById("modal").classList.remove('toggleDisplay')
    }

    closeModal = () => {
        document.getElementById("modal").classList.add('toggleDisplay')
    }

    render() {
        console.log(this.state)
        return (
            <div className="game">
                <div className="game__heading">
                    <h1 className={this.state.modeColor}>{this.state.title} mode</h1>
                    <div className="game__heading__rules">
                        <p className="game__heading__rules--1">Hover for info</p>
                        <p className="game__heading__rules--2">{this.state.rule}</p>
                    </div>
                </div>
                <div className="game__count">
                    <p>Attempts: <span className={this.state.modeColor}>{this.state.attempt}</span></p>
                    <p>High Score: <span className={this.state.modeColor}>{this.state.highscore}</span></p>
                </div>
                <p className={`range ${this.state.rangeColor}`} >{this.state.range}</p>
                <input id="input" type="text" placeholder="Enter # Here" onKeyPress={this.checkAnswer} onChange={this.getAnswer}></input>
                <Link to="/mode">Go back</Link>
                <Modal close={this.closeModal} info={this.state} />
            </div>
        )
    }

}

export default Game

