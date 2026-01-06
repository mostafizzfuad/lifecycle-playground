import { useState, useEffect } from "react";

const LifecycleLogger = () => {
	const [count, setCount] = useState(0); // স্টেট ইনিশিলাইজেশন

	// Mounting & Unmounting Phase
	useEffect(() => {
		console.log("✅ LifecycleLogger Mounted");

		// Cleanup function (Unmounting)
		return () => {
			console.log("❌ Component unmount...");
		};
	}, []); // <--- [] খালি ডিপেন্ডেন্সি অ্যারে মানে এটি শুধুমাত্র মাউন্টের সময় রান করবে

	// Updating Phase (যখন count পরিবর্তন হয়)
	useEffect(() => {
		if (count > 0) {
			console.log("♻️ Component updated...", count);
		}
	}, [count]); // <--- count পরিবর্তন হলেই এটি রান করবে

	const incrementCount = () => {
		setCount((prev) => prev + 1);
	};

	return (
		<div className="logger-container">
			<h2>Lifecycle Logger (Function Component)</h2>
			<p>Count: {count}</p>
			<button onClick={incrementCount} className="secondary-btn">
				Update
			</button>
		</div>
	);
};

export default LifecycleLogger;
