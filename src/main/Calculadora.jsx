import React,{ Component } from 'react';
import './Calculadora.css'
import Button from '../components/Button';
import Display from '../components/Display';
// eslint-disable-next-line import/no-anonymous-default-export
export default class Calculadora extends Component{
    
    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperatiom = this.setOperatiom.bind(this)
        this.addDigit = this.addDigit.bind(this)

    }

    clearMemory(){
        console.log('Limpar')
    }

    setOperatiom(operation){
        console.log(operation)
    }

    addDigit(n){
        console.log(n)
    }
    render(){
        const setOperatiom = operation => this.setOperatiom(operation)
        return(
            <div className="Calculadora">
                <Display value={100}/>
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/" click={setOperatiom} operation/>
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={setOperatiom} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-"click={setOperatiom} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+"click={setOperatiom} operation/>
                <Button label="0"click={this.addDigit} double/>
                <Button label="." />
                <Button label="="/>

            </div>
        )      
    }
}