import { useState } from "react"
const Form = () => {
    const [title, setTitle] = useState("")


    //onChange handler =
    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(title)
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <label>Title</label>
                <input type="text" name="title" value={title} onChange={titleChangeHandler} />
                <button>Submit</button>
            </form>

        </>
    )
}


export default Form

