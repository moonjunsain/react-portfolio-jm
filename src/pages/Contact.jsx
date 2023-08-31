import { useState } from 'react'

export default function Contact() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    let [validationMessage, setValidation] = useState({email: '', name: '', text: ''})


    // change values for input
    const handleInput = (e)=>{
        const {id, value} = e.target
        switch(id){
            case 'emailInput':
                setEmail(value)
                break;
            case 'nameInput':
                setName(value)
                break;
            case 'textInput':
                setText(value)
                break;
        }
        
    }

    const checkValidation = (e)=>{
        const {id, value} = e.target
        const newValidation = {email: validationMessage.email, name: validationMessage.name, text: validationMessage.text}
        if(!value){
            if(id == 'emailInput'){
                newValidation.email = 'Email is required '
            }

            if(id == 'nameInput'){
                newValidation.name = 'Name is required '
            }

            if(id == 'textInput'){
                newValidation.text = 'Message is required '
            }

        }else{
            if(id == 'emailInput'){
                newValidation.email = ''
            }

            if(id == 'nameInput'){
                newValidation.name = ''
            }

            if(id == 'textInput'){
                newValidation.text = ''
            }

        }
        setValidation(newValidation)
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        if(email && text && name){
            return;
        }
    }

    return (
        <div className='row justify-content-center my-3'>
            <form className='col-5' onSubmit={handleFormSubmit} onBlur={checkValidation}>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email address</label>
                    <input value={email} type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" onChange={handleInput}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Name</label>
                    <input value={name} type="text" className="form-control" id="nameInput" onChange={handleInput}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="textInput" className="form-label">What do you want to say?</label>
                    <textarea value={text} className="form-control" id="textInput" rows="5" onChange={handleInput}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

                {validationMessage && (
                    <div className='form-text text-danger'>
                        {validationMessage.email}
                        {validationMessage.name}
                        {validationMessage.text}
                    </div>
                )}
            </form>
            
        </div>
    )
}