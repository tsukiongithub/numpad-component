import { useState } from "react";

const passcode = "12345";
const availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function App() {
	const [selectedNumbers, setSelectedNumbers] = useState("");

	const handleClearSelectedNumbers = () => {
		setSelectedNumbers("");
	};

	const handleAcceptSelectedNumbers = () => {
		if (selectedNumbers === passcode) {
			console.log("correct");
		}
	};

	return (
		<>
			<div className="flex h-full items-center justify-center">
				<div className="flex flex-col items-center gap-8">
					<div className="flex gap-4 font-mono text-4xl">
						{selectedNumbers
							.padEnd(passcode.length, "_")
							.split("")
							.map((number, key) => {
								return <div key={key}>{number}</div>;
							})}
					</div>
					<div className="grid grid-cols-3 gap-4">
						{availableNumbers.map((number, key) => {
							return (
								<button
									className={`numpad-btn ${number === 0 ? "col-start-2" : ""}`}
									onClick={(ev) => {
										if (selectedNumbers.length < passcode.length) {
											setSelectedNumbers(
												`${selectedNumbers}${ev.currentTarget.value}`
											);
											console.log(ev.currentTarget.value);
										}
									}}
									value={number}
									key={key}
								>
									<span className="h-8 w-8 font-mono">{number}</span>
								</button>
							);
						})}
						<button
							className="numpad-btn col-start-1 row-start-4"
							onClick={handleClearSelectedNumbers}
							title="Clear"
						>
							<span className="h-8 w-8">C</span>
						</button>
						<button
							className="numpad-btn col-start-3 row-start-4"
							onClick={handleAcceptSelectedNumbers}
							title="Login"
						>
							<span className="h-8 w-8">Y</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
