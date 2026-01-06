import { useState } from "react";
import LifecycleLogger from "./components/LifecycleLogger"; // আমরা একটু পরেই এটি তৈরি করবো

const App = () => {
	const [showLogger, setShowLogger] = useState(true);

	return (
		<div className="container">
			<h2>React Lifecycle Playground</h2>

			{/* Toggle Button */}
			<button
				className="primary-btn"
				onClick={() => setShowLogger(!showLogger)}
			>
				{showLogger ? "Unmount Logger" : "Mount Logger"}
			</button>

			{/* কন্ডিশনাল রেন্ডারিং */}
			{showLogger && <LifecycleLogger />}
		</div>
	);
};

export default App;
