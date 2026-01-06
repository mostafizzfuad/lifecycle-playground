import { Component } from "react";

class LifecycleLogger extends Component {
	constructor(props) {
		super(props); // প্যারেন্ট ক্লাসের কনস্ট্রাক্টর কল করা
		this.state = {
			count: 0, // স্টেট ইনিশিলাইজেশন
		};
		console.log("⏳ Constructor: Component is being initialized.");
	}

	// ১. Mounting Phase
	componentDidMount() {
		console.log("✅ LifecycleLogger Mounted");
	}

	// ২. Updating Phase
	componentDidUpdate(prevProps, prevState) {
		// চেক করা হচ্ছে স্টেট আসলেই পরিবর্তন হয়েছে কি না
		if (prevState.count !== this.state.count) {
			console.log(
				`♻️ LifecycleLogger Updated! Count: ${this.state.count}`
			);
		}
	}

	// ৩. Unmounting Phase
	componentWillUnmount() {
		console.log("❌ LifecycleLogger Unmounted");
	}

	// Arrow function ব্যবহার করছি যাতে 'this' অটোমেটিক বাইন্ড থাকে
	incrementCount = () => {
		this.setState((prevState) => ({
			count: prevState.count + 1,
		}));
	};

	render() {
		return (
			<div className="logger-container">
				<h2>Lifecycle Logger (Class Component)</h2>
				<p>Count: {this.state.count}</p>
				<button className="secondary-btn" onClick={this.incrementCount}>
					Increment Count
				</button>
			</div>
		);
	}
}

export default LifecycleLogger;
