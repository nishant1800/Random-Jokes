import { useState } from "react";

function CommentsForm() {
    let [formData, setFormData] = useState ({
        username: "",
        remarks: "",
        rating: 5,
    });

    let handleInputChange = (event) => {
        setFormData( (currData) => {
            return {...currData, [event.target.name] : event.target.value}
        });
    };

    let handleSubmit = ( (event) => {
        event.preventDefault;

        setFormData({
            username: "",
            remarks: "",
            rating: "",
        });
    });

    return (
        <div>
            <h4>Give a comment</h4>
            <form onSubmit={handleSubmit} >

                <label htmlFor="username">Username</label>
                <input
                 placeholder="username"
                 type="text"
                 value={formData.username}
                 onChange={handleInputChange}
                 id="username"
                 name="username"
                />
                <br></br> <br></br>

                <label htmlFor="remarks" >Remarks</label>
                <textarea
                 value={formData.remarks}
                 placeholder="Add new remarks"
                 onChange={handleInputChange}
                 id="remarks"
                 name="remarks"
                ></textarea>
                <br></br><br></br>

                <label htmlFor="rating" >Rating</label>
                <input
                 placeholder="rating"
                 type="number"
                 min={1}
                 max={10}
                 value={formData.rating}
                 onChange={handleInputChange}
                 name="rating"
                 id="rating"
                />
                <br></br><br></br>
                 
                <button>Add comment</button>
            </form>
        </div>
    );
}

export default CommentsForm;