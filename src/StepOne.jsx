// import React from 'react'

// const StepOne = () => {
//   return (
//     <div>
//       <div className="header">
//         <h5 className='fw-bold header-text'>Personal Info</h5>
//         <p className='text-muted'>Please provide your name, email address, and phone number.</p>
//       </div>

//       <form action="" className='d-flex mt-5 flex-column gap-3'>
//         <div className="form-field">
//           <div className="label d-flex align-items-center justify-content-between mb-1">
//             <label htmlFor="">Name</label>
//             <small className='error'>This Field is required</small>
//           </div>
//           <input type="text" placeholder='Olawoyin Gbolahan' />
//         </div>

//         <div className="form-field">
//           <div className="label d-flex align-items-center justify-content-between mb-1">
//             <label htmlFor="">Email Address</label>
//             <small className='error'>This Field is required</small>
//           </div>
//           <input type="email" placeholder='Olawoyingbolahan@gmail.com' />
//         </div>

//         <div className="form-field">
//           <div className="label d-flex align-items-center justify-content-between mb-1">
//             <label htmlFor="">Phone Number</label>
//             <small className='error'>This Field is required</small>
//           </div>
//           <input type="text" placeholder='+234 9008822890' />
//         </div>
//       </form>
//     </div>
//   )
// }

// export default StepOne



// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const StepOne = ({ formikRef }) => {
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: '',
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required('This field is required'),
//       email: Yup.string().email('Invalid email address').required('This field is required'),
//       phone: Yup.string().required('This field is required'),
//     }),
//     validateOnMount: true, // Ensures validation runs immediately
//   });

//   if (formikRef) {
//     formikRef.current = formik; // Store formik instance in ref
//   }

//   return (
//     <div>
//       <div className="header">
//         <h5 className='fw-bold header-text'>Personal Info</h5>
//         <p className='text-muted'>Please provide your name, email address, and phone number.</p>
//       </div>

//       <form className='d-flex mt-5 flex-column gap-3'>
//         <div className="form-field">
//           <div className="label d-flex align-items-center justify-content-between mb-1">
//             <label htmlFor="name">Name</label>
//             {formik.touched.name && formik.errors.name && <small className='error'>{formik.errors.name}</small>}
//           </div>
//           <input 
//             type="text" 
//             name="name" 
//             placeholder="Olawoyin Gbolahan" 
//             value={formik.values.name} 
//             onChange={formik.handleChange} 
//             onBlur={formik.handleBlur} 
//             className={formik.touched.name && formik.errors.name ? 'border-danger' : ''}
//           />
//         </div>

//         <div className="form-field">
//           <div className="label d-flex align-items-center justify-content-between mb-1">
//             <label htmlFor="email">Email Address</label>
//             {formik.touched.email && formik.errors.email && <small className='error'>{formik.errors.email}</small>}
//           </div>
//           <input 
//             type="email" 
//             name="email" 
//             placeholder="Olawoyingbolahan@gmail.com" 
//             value={formik.values.email} 
//             onChange={formik.handleChange} 
//             onBlur={formik.handleBlur} 
//             className={formik.touched.email && formik.errors.email ? 'border-danger' : ''}
//           />
//         </div>

//         <div className="form-field">
//           <div className="label d-flex align-items-center justify-content-between mb-1">
//             <label htmlFor="phone">Phone Number</label>
//             {formik.touched.phone && formik.errors.phone && <small className='error'>{formik.errors.phone}</small>}
//           </div>
//           <input 
//             type="text" 
//             name="phone" 
//             placeholder="+234 9008822890" 
//             value={formik.values.phone} 
//             onChange={formik.handleChange} 
//             onBlur={formik.handleBlur} 
//             className={formik.touched.phone && formik.errors.phone ? 'border-danger' : ''}
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default StepOne;




import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StepOne = ({ formikRef, formData }) => {
  const formik = useFormik({
    initialValues: {
      name: formData.name || '',
      email: formData.email || '',
      phone: formData.phone || '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('This field is required'),
      email: Yup.string().email('Invalid email address').required('This field is required'),
      phone: Yup.string().required('This field is required'),
    }),
    validateOnMount: true,
  });

  if (formikRef) {
    formikRef.current = formik;
  }

  return (
    <div>
      <div className="header">
        <h5 className='fw-bold header-text'>Personal Info</h5>
        <p className='text-muted'>Please provide your name, email address, and phone number.</p>
      </div>

      <form className='d-flex mt-5 flex-column gap-3'>
        <div className="form-field">
          <div className="label d-flex align-items-center justify-content-between mb-1">
            <label htmlFor="name">Name</label>
            {formik.touched.name && formik.errors.name && <small className='error'>{formik.errors.name}</small>}
          </div>
          <input 
            type="text" 
            name="name" 
            placeholder="Olawoyin Gbolahan" 
            value={formik.values.name} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            className={formik.touched.name && formik.errors.name ? 'border-danger' : ''}
          />
        </div>

        <div className="form-field">
          <div className="label d-flex align-items-center justify-content-between mb-1">
            <label htmlFor="email">Email Address</label>
            {formik.touched.email && formik.errors.email && <small className='error'>{formik.errors.email}</small>}
          </div>
          <input 
            type="email" 
            name="email" 
            placeholder="Olawoyingbolahan@gmail.com" 
            value={formik.values.email} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            className={formik.touched.email && formik.errors.email ? 'border-danger' : ''}
          />
        </div>

        <div className="form-field">
          <div className="label d-flex align-items-center justify-content-between mb-1">
            <label htmlFor="phone">Phone Number</label>
            {formik.touched.phone && formik.errors.phone && <small className='error'>{formik.errors.phone}</small>}
          </div>
          <input 
            type="text" 
            name="phone" 
            placeholder="+234 9008822890" 
            value={formik.values.phone} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            className={formik.touched.phone && formik.errors.phone ? 'border-danger' : ''}
          />
        </div>
      </form>
    </div>
  );
};

export default StepOne;
