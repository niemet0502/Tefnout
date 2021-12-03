import React, { useState } from 'react';
import CourseBanner from '../components/Marketplace/Course/CourseBanner';
import FormInput from "../components/Marketplace/Form/FormInput";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Button from "../components/Marketplace/Button";
import { getBase64 } from "../utils/convertFile";
import { toast } from 'react-toastify';
const Contact = () => {
  const [contact, setContact] = useState({fullname: ""})
  const [resume, setResume] = useState()
  const [loading, setLoading] = useState(false)

  async function storeApplication(contact){
    const response = await fetch("http://127.0.0.1:8000/api/applications",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(contact)
    })

    const data = await response.json()
    toast(`${data.message}`,{
      position: toast.POSITION.BOTTOM_LEFT,
      theme: "colored",
      type: toast.TYPE.SUCCESS,
    })

    setContact({fullname: "",email:"", phone: "", message: ""})
  }

  const handleSubmit = e => {
    e.preventDefault()

    setLoading(true)
    storeApplication(contact)
    setLoading(false)
  }
  return (
    <div className="" style={{paddingTop: '100px'}}>
      <CourseBanner
      title="Become instructor"
      page="COURSES"/>

      <section className="courses_area pt-5 pb-5" style={{background: '#f7f7f7'}}>
        <div className="container pt-5 pb-5">
          <div className="form_wrap contact_from">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <FormInput
                    name="fullname"
                    type="text"
                    value={contact.fullname}
                    onChange={(e) => setContact({...contact, fullname: e.target.value})}
                    placeholder="Fullname..."
                    required
                // error={errors.username}
                />
                </div>
                <div className="col-md-6">
                  <FormInput
                    name="email"
                    type="text"
                    value={contact.email}
                    onChange={(e) => setContact({...contact, email: e.target.value})}
                    // error={errors.username}
                    placeholder="Email..."
                    required
                />
                </div>

                
              </div>

              <div className="row mt-4">
              <div className="col-md-6">
                  <FormInput
                    name="phone"
                    type="text"
                    value={contact.phone}
                    onChange={(e) => setContact({...contact, phone: e.target.value})}
                    placeholder="Phone..."
                    required
                />
                </div>
                <div className="col-md-6 d-flex">
                <label htmlFor="resume" className="apply-label">
                <AttachFileIcon /> ATTACH RESUME / CV
                </label>
                <input type="file" id="resume" name="resume" style={{opacity: '0'}} 
                  onChange={e => setResume(e.target.files[0])}/>
                </div>
              </div>

              <div className="col-12 mt-4">
                <textarea style={{height: '250px'}} name="message" id="message" cols="30" rows="10"
                                                  placeholder="Your Message :" 
                  value={contact.message}
                  onChange={e => setContact({...contact, message: e.target.value})}
                >

                </textarea>
              </div>

              <div className="d-flex justify-content-center mt-3">
                <Button
                  text="Envoyer"
                  type="submit"
                  disabled={loading}
                />
                <h6>{loading}</h6>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
