import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import styles from "./Contactform.module.css";
import { useState } from "react";
export default function Contactform() {
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[text,setText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>

        <Button text=" VIA SUPPORT CHAT" icon={<MdMessage font-size="24px"/>}/>
        <Button 
    
        text=" VIA CALL"
         icon={<FaPhoneAlt font-size="24px"/>}/>

        </div>
     <Button 
     isOutline={true}
     text=" VIA EMAIL FORM" 
     icon={<IoMdMail font-size="24px"/>}/>

     <form onSubmit={handleSubmit}>
      <div className={styles.form_control}>
        <label for="name">Name</label>
        <input type="text" id="name" name="name"></input>
      </div>

         <div className={styles.form_control}>
        <label for="email">Email</label>
        <input type="email" id="email" name="email"></input>
      </div>

        <div className={styles.form_control}>
        <label for="text">Text</label>
        <textarea id="email" name="text"/>
      </div>
          <div style={{
            display:"flex",
            justifyContent:"end"

          }}>
      <Button  text="SUBMIT" />

          </div>
          
            <div>
            {name + " " + email + " " + text}
          </div>

     </form>
          
        
      </div>
      <div className={styles.contact_image}>
        <img src="./images/contactpage.png" alt="contact-image"></img>
      </div>
    </section>
  )
}
