import { useRef } from "react";

function UncontrolledForm() {
    const nameRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const name = nameRef.current?.value;
        alert(`Submitted name: ${name}`);
        if (nameRef.current) {
            nameRef.current.value = "";
            nameRef.current.focus();
        }
    };
    return (
        <div style={{ textAlign: "center", marginTop: "40px"}}>
            <h2>Uncontrolled Component Example</h2>

            <form onSubmit={handleSubmit}>
                <input 
                    ref={nameRef}
                    type="text"
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
        </div>
    );
}

export default UncontrolledForm;