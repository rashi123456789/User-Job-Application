import React from 'react'
import axios from './config/axios'

class ApplicationForm extends React.Component
{
    constructor()
    {
        super()
        this.state={
            fName:'',
            email:'',
            number:'',
            aFJob:'',
            experience:'',
            technicalSkills:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.fName,
            email:this.state.email,
            phone:this.state.number,
            skills:this.state.technicalSkills,
            jobTitle:this.state.aFJob,
            experience:this.state.experience
        }
        console.log(formData)

        axios.post('/users/application-form',formData)
        .then(response=>{
            if(response.data.hasOwnProperty('errors'))
            {
                alert(response.data.message)
            }
            else
            {
                alert('your application has been submitted')
                this.setState({
                    fName:'',
                    email:'',
                    number:'',
                    aFJob:'',
                    experience:'',
                    technicalSkills:''        
                })
            }
            console.log('response',response.data)
        })
        .catch(err=>{
            console.log('error',err)
        })
    }
    render()
    {
        return (
            <div>
                <h2>Apply For Job</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='fName'>Full Name</label>
                    <input 
                        type='text'
                        id='fName'
                        name='fName'
                        value={this.state.fName}
                        onChange={this.handleChange}
                    /> <br/><hr/>

                    <label htmlFor='email'>Email Address</label>
                    <input 
                        type='text'
                        id='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder='example@email.com'
                    /><br/><hr/>

                    <label htmlFor='number'>Contact Number</label>
                    <input 
                        type='number'
                        id='number'
                        name='number'
                        value={this.state.number}
                        onChange={this.handleChange}
                        placeholder='+91 9988554344'
                    /><br/><hr/>

                    <label htmlFor='aFJob'>Applying For Job</label>
                    <select value={this.state.aFJob} name='aFJob' onChange={this.handleChange}>
                        <option>----Select----</option>
                        <option value='Front-End Developer'>Front-End Developer</option>
                        <option value="Node.js Developer">Node.js Developer</option>
                        <option value='MEAN Stack Developer'>MEAN Stack Developer</option>
                        <option value='FULL Stack Developer'>FULL Stack Developer</option>
                    </select><br/><hr/>

                    <label htmlFor='experience'>Experience</label>
                    <input 
                        type='text'
                        id='experience'
                        name='experience'
                        value={this.state.experience}
                        onChange={this.handleChange}
                        placeholder='Experience (2 years, 3 months'
                    /><br/><hr/>

                    <label htmlFor='technicalSkills'>Technical Skills</label>
                    <textarea 
                        id='technicalSkills'
                        name='technicalSkills'
                        value={this.state.technicalSkills}
                        onChange={this.handleChange}
                        placeholder='Rechnical Skills'
                    /><br/><hr/>
                    <input type='submit' value='Send Application'/>

                </form>
            </div>
        )
    }
}
export default ApplicationForm