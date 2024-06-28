// import styles from '../styles/ContactMe.module.css'
// import emailjs from 'emailjs-com'
// import toast, {Toaster} from 'react-hot-toast'
// import { Button, Modal } from 'react-bootstrap';

// const ContactMe = ({show, setShow}) => {
//     const handleClose = () => setShow(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_7froz6r', 'template_lxrkzgj', e.target, 'user_p7bBt2jrDsoor1LW6MHS0')
//         .then((result) => {
//             toast.success(result.text, "message sent")
//             setShow(false)
//         }, (error) => {
//             toast.error(error.text, "message not sent")
//         });

//         e.target.reset()
//     }

//         return (
//           <>
//             <Modal
//                 size='md'
//                 aria-labelledby='contained-modal-title-vcenter'
//                 centered
//                 show={show}
//                 onHide={handleClose}
//             >
//                 <Modal.Header closeButton>
//                     {/* <Modal.Title>Modal heading</Modal.Title> */}
//                 </Modal.Header>
//                 <Modal.Body>
//                     <div className={styles.Content}>

//                         <h1> Want to discuss a job or collaboration? <span> I&apos;m most definitely game. </span></h1>

//                         <form onSubmit={handleSubmit}>
//                             <div className={styles.FormField}>
//                                 <label htmlFor="name">Sender Name</label>
//                                 <input type="text" name="name" placeholder="name" required />
//                             </div>

//                             <div className={styles.FormField}>
//                                 <label htmlFor="email">Sender Email</label>
//                                 <input type="email" name="email" placeholder="email" required />
//                             </div>

//                             <div className={styles.FormField}>
//                                 <label htmlFor="subject"> Message Subject</label>
//                                 <input type="text" name="subject" placeholder="Reason for message" required />
//                             </div>

//                             <div className={styles.FormField}>
//                                 <label htmlFor="message"> Message Body</label>
//                                 <textarea rows={7} name="message" placeholder="Share your thoughts with me here" required />
//                             </div>

//                             <button type="submit"> send message </button>
//                         </form>
//                     </div>
//                     </Modal.Body>
//                     {/* <Modal.Footer>
//                         <Button variant="secondary" onClick={handleClose}>
//                         Close
//                         </Button>
//                     </Modal.Footer> */}
//             </Modal>
//             <Toaster />
//           </>
//         );

//     // return (
//     //     <div className={styles.Container} id="contact">
//     //         <div className={styles.Content}>

//     //             <h1> Want to discuss a job or collaboration? <span> I&apos;m most definitely game. </span></h1>

//     //             <form onSubmit={handleSubmit}>
//     //                 <div className={styles.FormField}>
//     //                     <label htmlFor="name">Sender Name</label>
//     //                     <input type="text" name="name" placeholder="name" required />
//     //                 </div>

//     //                 <div className={styles.FormField}>
//     //                     <label htmlFor="email">Sender Email</label>
//     //                     <input type="email" name="email" placeholder="email" required />
//     //                 </div>

//     //                 <div className={styles.FormField}>
//     //                     <label htmlFor="subject"> Message Subject</label>
//     //                     <input type="text" name="subject" placeholder="Reason for message" required />
//     //                 </div>

//     //                 <div className={styles.FormField}>
//     //                     <label htmlFor="message"> Message Body</label>
//     //                     <textarea rows={7} name="message" placeholder="Share your thoughts with me here" required />
//     //                 </div>

//     //                 <button type="submit"> send message </button>

//     //             </form>

//     //         </div>

//     //         <Toaster />
//     //     </div>
//     // )
// }

// export default ContactMe
