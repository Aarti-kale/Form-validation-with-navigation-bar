import React, {useState} from 'react'

const Contact = () => {

        const [formData, setFormData] = useState({
            name:'',
            email:'',
            mobile:'',
            password:'',
        });

        const [errors, setErrors] = useState({
            name:'',
            email:'',
        });
         
        const handleInputChange = (e) => {
            const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]:value,
            });

            setErrors({
                ...errors,
                [name]:'',
            });
        };

        // function to handle form submission
        const handleSubmit = (e) => {
            e.preventDefault();

            // simple validation
            let valid = true;
            if (formData.name.trim()=== ''){
                setErrors((preventErrors)=>({
                    ...preventErrors,
                    name: 'Name is required',
                }));
                valid = false;
            }

            if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  email: 'Invalid email address',
                }));
                valid = false;
              }
              

              if (formData.mobile.trim()===''){
                setErrors((prevErrors)=>({
                    ...prevErrors,
                    mobile:'Mobile number is required'
                }));
                valid= false;
              }

              if(formData.password.length <6){
                  setErrors((prevErrors)=>({
                    ...prevErrors,
                    password:'Password must be at least 6 character',
                  }));
                  valid= false;
              }
              if(valid){
                console.log('Form submitted:', formData);
              }
        }
    
  return (
    <div className='container mt-4'>
        <div className='card p-4'> 
      <h2 className='mb-4'>Contact Component for Form validation</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
                Name
            </label>
            <input type='text'
              className={`form-control ${errors.name ? 'is-invalid': ''}`}
              id='name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
        </div>
        <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input 
            type='email'
            className={`form-control ${errors.email ? 'is-invalid':''}`}
            id='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            />
            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
        </div>
        <div className='mb-3'>
            <label htmlFor='mobile' className='form-label'>
                Mobile
            </label>
            <input
              type='tel'
              className={`form-control ${errors.mobile ? 'is-invalid' :''}`}
              id='mobile'
              name='mobile'
              value={formData.mobile}
              onChange={handleInputChange}
            />
            {errors.mobile && <div className='invalid-feedback'>{errors.mobile}</div>}
        </div>

        <div className='mb-3'>
            <label htmlFor='password' className='form-table'>
                Password
            </label>
            <input
                type='password '
                className={ `form-control ${errors.password ? 'is-invalid' : ''}`}
                id='password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
            />
            {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
      </div>
    </div>
  );
};

export default Contact;
