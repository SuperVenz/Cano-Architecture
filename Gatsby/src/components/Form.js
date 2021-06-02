import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import Article from "./Article";
import { useStaticQuery, graphql } from "gatsby";

const FormBox = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: #f9fafe;
  margin-top: 64px;
  @media only screen and (min-width: 600px) {
    flex-flow: row wrap;
    padding-left: 10%;
  }
  @media only screen and (min-width: 1000px) {
    padding-left: 60px;
  }
`;
const TextContainer = styled.div`
  padding-top: 40px;
  padding-left: 26px;
  @media only screen and (min-width: 600px) {
    padding-left: 40px;
  }
  @media only screen and (min-width: 1000px) {
    margin-top: 10%;
    padding-left: 0%;
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
  }
`;

const Label = styled.label`
  width: 80%;
  @media only screen and (min-width: 600px) {
    padding-left: 24px;
    width: 40%;
    &:nth-child(7) {
      width: 80%;
    }
    &:nth-child(8) {
      width: 80%;
    }
    @media only screen and (min-width: 1000px) {
      width: 30%;
      &:nth-child(6) {
        width: 40%;
      }
      &:nth-child(7) {
        width: 40%;
      }
    }
  }
`;
const Text = styled.p`
  padding-top: 32px;
  font-size: 1.2rem;
  font-family: Inter;
  padding-bottom: 8px;
`;
const StringInput = styled.input`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border: none;
`;

const AreaText = styled.textarea`
  width: 100%;
  height: 168px;
  border: none;
  line-height: 24px;
  margin-bottom: 16px;
  @media only screen and (min-width: 600px) {
    margin-bottom: 32px;
  }
`;
const Submit = styled.button`
  padding-top: 24px;
  width: 80vw;
  background: blue;
  color: white;
  font-weight: bold;
  padding-bottom: 24px;
  border: none;
  @media only screen and (min-width: 1000px) {
    width: 50vw;
    margin-left: 20%;
  }
`;
const P = styled.p`
  font-size: 1.2rem;
  font-family: Inter;
  line-height: 24px;
`;
const Div = styled.div`
  padding-top: 32px;
  text-align: center;
  width: 90%;
  padding-bottom: 32px;
`;
function Form() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: name,
        business: business,
        phone: phone,
        email: email,
        address: address,
        description: description,
      }),
    })
      .then(() => navigate("/thankyou"))
      .catch((error) => alert(error));
  };
  const data = useStaticQuery(graphql`
    {
      sanityContactForm {
        header
        text
      }
    }
  `);
  return (
    <>
      <TextContainer>
        <Article
          header={data.sanityContactForm.header}
          text={data.sanityContactForm.text}
        />
      </TextContainer>
      <FormBox
        id="contact"
        autoComplete="on"
        netlify-honeypot="bot-field"
        name="contact"
        method="POST"
        data-netlify="true"
        action="/thankyou"
        onSubmit={handleSubmit}
      >
        <input name="form-name" value="Netlify Rocks" type="hidden" />
        <input type="hidden" name="bot-field" />

        <Label htmlFor="name">
          <Text>First And Last Name</Text>
          <StringInput
            required
            type="text"
            name="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></StringInput>
        </Label>

        <Label htmlFor="business">
          <Text>Business (Optional)</Text>
          <StringInput
            required
            type="text"
            name="business"
            placeholder="e.g. Jude Construction"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
          ></StringInput>
        </Label>

        <Label htmlFor="phone">
          <Text>Phone Number</Text>
          <StringInput
            required
            type="tel"
            name="phone"
            placeholder="7607012235"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></StringInput>
        </Label>

        <Label htmlFor="email">
          <Text>Email Address</Text>
          <StringInput
            required
            type="email"
            name="name"
            placeholder="e.g JohnDoe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></StringInput>
        </Label>

        <Label htmlFor="address">
          <Text>Location</Text>
          <StringInput
            type="text"
            name="address"
            placeholder="123 Road Name Rd, San Diego Cal"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></StringInput>
        </Label>

        <Label htmlFor="description">
          <Text>Additional Information</Text>
          <AreaText
            name="description"
            rows="4"
            cols="20"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g. “I’m interested in staining my concrete. I'm available at 7pm tomorrow to discuss this further. Feel free to call me at that time”
"
          />
        </Label>
        <br />
        <Submit type="submit" onSubmit={handleSubmit}>
          <h4>Send Mesage</h4>
        </Submit>
        <Div>
          <P>
            You can also contact us using<> </>
            <a href="tel:9096275477">(909) 627-5477</a>
            <> or </>
            <a href="mailto: info@canoarchitecture.com">
              info@canoarchitecture.com
            </a>
          </P>
        </Div>
      </FormBox>
    </>
  );
}

export default Form;
