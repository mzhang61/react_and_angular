import { useState } from "react";

function ControlledForm() {
    const [name, setName] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Submitted name: ${name}`);
        setName("");
    };
    return (
        <div style={{ textAlign: "center", marginTop: "40px"}}>
            <h2>Controlled Component Example</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    style={{ padding: "8px", fontSize: "16px"}}
                />
                <button
                    type="submit"
                    style={{marginLeft: "10px", padding: "8px 16px"}}
                    >
                        Submit
                    </button>
            </form>

            <p>Current input: {name}</p>
        </div>
    );
}

export default ControlledForm;