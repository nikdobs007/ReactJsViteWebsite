import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper className='section'>
       <h2 className='common-heading'>Our Services</h2>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14880.537727510666!2d72.81609734999999!3d21.186818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e771bf220d9%3A0xbdd1676277c8bb1!2sSarvajanik%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1662704341512!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xnqrjozl" method='POST' className='contact-inputs'>
            <input type="text" name='username' placeholder='username' autoComplete='off' required/>
            <input type="email" name='email' placeholder='email' autoComplete='off' required/>
            <textarea name="message" id="" cols="30" rows="5" placeholder='Message' autoComplete='off' required></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
    .container {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
`;
export default Contact
