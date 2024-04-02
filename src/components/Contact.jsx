import React from 'react'

const Contact = () => {
  return (
  <div className='contact'>
        <main>
                <h1>contact us</h1>
                <form>
                        <div>
                                <label>Name</label>
                                <input type='text' required placeholder='Abc'/>
                        </div>
                        <div>
                                <label>Email</label>
                                <input type='email' required placeholder='Abc@gmail,com'/>
                        </div>
                        <div>
                                <label>Message</label>
                                <input type='text' required placeholder='Tell us about your query'/>
                        </div>
                        <button type='submit'>Submit</button>
                </form>
        </main>
  </div>
  )
}

export default Contact