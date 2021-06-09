import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import Article from "./Article";
import { useStaticQuery, graphql } from "gatsby";
const Wrapper = styled.div`
  background: #f9fafe;
`;
const FormBox = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  @media only screen and (min-width: 600px) {
    flex-flow: row wrap;
  }
  @media only screen and (min-width: 1000px) {
  }
`;
const TextContainer = styled.div`
  padding-top: 40px;
  padding-left: 26px;
  padding-right: 26px;
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1000px) {
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
      &:nth-child(8) {
        width: 94%;
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
  width: 90%;
  padding: 20px;
  font-size: 1.2rem;
  border: #c2c2c2 solid 1px;
`;

const AreaText = styled.textarea`
  width: 90%;
  padding: 20px;
  resize: none;
  height: 100px;
  line-height: 24px;
  font-size: 1.2rem;
  font-family: Inter;
  border: #c2c2c2 solid 1px;

  margin-bottom: 16px;
  @media only screen and (min-width: 600px) {
    margin-bottom: 32px;
  }
  @media only screen and (min-width: 1000px) {
    width: 100%;
  }
`;
const Submit = styled.button`
  padding: 2rem;
  line-height: 40px;
  font-size: 33.18px;
  font-family: Inter;
  background: #0038ff;
  width: 90%;
  border: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  margin-top: 32px;
  @media only screen and (min-width: 600px) {
    width: 50%;
  }
  @media only screen and (min-width: 1000px) {
    height: 6.5rem;
    margin-bottom: 0px;
  }
  color: white;
  font-size: 2.07375rem;
  font-weight: bold;
  &:hover {
    background: #1b43c6;
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
  padding-bottom: 8px;
`;
const A = styled.a`
  text-decoration: none;
`;

const H3 = styled.h3`
  font-size: 24px;
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
        name
        namePh
        business
        businessPh
        address
        addressPh
        email
        emailPh
        header
        text
        submit
        phonePh
        phone
        info
        infoPh
      }
      sanityMetaData {
        email
        number
      }
    }
  `);
  return (
    <Wrapper>
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
          <Text>{data.sanityContactForm.name}</Text>
          <StringInput
            required
            type="text"
            name="name"
            placeholder={data.sanityContactForm.namePh}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></StringInput>
        </Label>

        <Label htmlFor="business">
          <Text>{data.sanityContactForm.business}</Text>
          <StringInput
            required
            type="text"
            name="business"
            placeholder={data.sanityContactForm.businessPh}
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
          ></StringInput>
        </Label>

        <Label htmlFor="phone">
          <Text>{data.sanityContactForm.phone}</Text>
          <StringInput
            required
            type="tel"
            name="phone"
            placeholder={data.sanityContactForm.phonePh}
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></StringInput>
        </Label>

        <Label htmlFor="email">
          <Text>{data.sanityContactForm.email}</Text>
          <StringInput
            required
            type="email"
            name="name"
            placeholder={data.sanityContactForm.emailPh}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></StringInput>
        </Label>

        <Label htmlFor="address">
          <Text>{data.sanityContactForm.address}</Text>
          <StringInput
            type="text"
            name="address"
            placeholder={data.sanityContactForm.addressPh}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></StringInput>
        </Label>

        <Label htmlFor="description">
          <Text>{data.sanityContactForm.info}</Text>
          <AreaText
            name="description"
            rows="4"
            cols="20"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={data.sanityContactForm.infoPh}
          />
        </Label>
        <br />
        <Submit type="submit" onSubmit={handleSubmit}>
          <H3>{data.sanityContactForm.submit}</H3>
        </Submit>
        <Div>
          <P>
            You can also contact us using<> </>
            <A href={`tel:${data.sanityMetaData.number}`}>
              {data.sanityMetaData.number}
            </A>
            <> or </>
            <A href={`mailto:${data.sanityMetaData.email}`}>
              {data.sanityMetaData.email}
            </A>
          </P>
        </Div>
      </FormBox>
    </Wrapper>
  );
}

export default Form;
