import { useState } from "react";
import "./nopeeking.css";

export default function NoPeeking() {
    const[count, setCount] = useState(3);
    const[youDunGoofed, setGoofed] = useState(false);
    const[names, setNames] = useState({});
    const[submitted, hasSubmitted] = useState(false);

    const handleChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        setNames(values => ({...values, [name]: value}));
    }

    const handleSubmit = (evt) => {        
        if (names.username.toLowerCase() === "apple dog" || names.fruitname.toLowerCase() === "apple dog") {
            if (count > 0) {
                setCount(count-1);
                alert("NO APPLE DOGS ALLOWED. WE HATE APPLE DOG IN THIS HOUSE.");
                alert(`YOU HAVE ${count-1} CHANCES LEFT TO RIGHT YOUR WRONGS.`);
                setNames({username: "", fruitname: ""});
            } else {
                alert("NOW YOU DUN GOOFED.");
                alert("YOU HAVE, IN FACT, GOOFED GOOFED. 😈");
                setGoofed(true);
                document.body.style = "background: yellow";
            }
        } else {
            hasSubmitted(true);
        }
        evt.preventDefault();
    }


    if(youDunGoofed) {
        return (
            <>
                <h1 className="h1-modified">ALL HAIL BANANA CAT. APPLE DOG IS THE ENEMY.<br />SCROLL DOWN.</h1>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <img src="https://cdn.dribbble.com/users/2193842/screenshots/9527137/10.gif" />
            </>
        );
    } else {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                <label>My Name: <input type="text" name ="username" value={names.username} onChange={handleChange}></input></label><br/>
                <label>My Cool Fruit Animal Name: <input type="text" name="fruitname" value={names.fruitname} onChange={handleChange}></input></label><br/>
                <button>Submit</button>
                </form>
                
                <p
                style={{
                    visibility: submitted ? "visible" : "hidden",
                }}
                ><strong>This Is Your Name:</strong> {names.username}<br />
                <strong>Your Fruit Animal Name Is:</strong> {names.fruitname}<br />
                Very nice. 😎</p>
            </div>
        );
    }
}