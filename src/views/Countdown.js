import { useState, useEffect } from "react"
import React from "react"
class Countdown extends React.Component {
    state = {
        count: 5
    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            clearInterval(this.timer)
        }
    }
    render() {
        return (
            <div>countdown {this.state.count} class</div>
        )
    }
}

const NewCountdown = () => {
    let [count, setCount] = useState(5);
    useEffect(() => {
        if (count === 0) {
            return
        }
        let timer = setInterval(() => {
            setCount(count - 1)
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [count])
    return (
        <div>countdown {count} hook</div>
    )
}

export { NewCountdown, Countdown }