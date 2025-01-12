// pages/admin.tsx

"use client";
import React from "react";
import Head from "next/head";
import styled from "styled-components";

export default function AdminPage() {
  return (
    <>
      <Container>
        {/* Login Card */}
        <LoginBox>
          <Title>Admin Login</Title>
          <Subtitle>Please enter your credentials to continue</Subtitle>

          <Form>
            {/* Username Field */}
            <InputGroup>
              <Label htmlFor="username">Username</Label>
              <InputWrapper>
                {/* <Icon>👤</Icon> */}
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                />
              </InputWrapper>
            </InputGroup>

            {/* Password Field */}
            <InputGroup>
              <Label htmlFor="password">Password</Label>
              <InputWrapper>
                {/* <Icon>🔒</Icon> */}
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
                {/* <EyeButton type="button" title="Show/Hide password">
                eye icon
                </EyeButton> */}
              </InputWrapper>
            </InputGroup>

            <SignInButton type="submit">Sign in</SignInButton>
          </Form>
        </LoginBox>

        {/* Footer */}
        {/* <Footer>
          <div>© 2024 Admin Portal. All rights reserved.</div>
          <div>Version 1.0.0</div>
        </Footer> */}
      </Container>
    </>
  );
}

// ---------- Styled Components ----------

// Overall page container with gradient background
const Container = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #a8c0ff 0%, #fbc2eb 100%);
  font-family: Arial, sans-serif;
  position: relative; /* Needed for the footer’s absolute positioning */
`;

// White card for the login form
const LoginBox = styled.div`
  width: 350px;
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #111;
`;

const Subtitle = styled.p`
  margin: 0.5rem 0 1.5rem 0;
  font-size: 14px;
  color: #555;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
`;

const InputGroup = styled.div``;

const Label = styled.label`
  display: block;
  margin-bottom: 0.3rem;
  font-weight: bold;
  color: #333;
`;

const InputWrapper = styled.div`
  /* position: relative; */
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  color: #aaa;
  pointer-events: none;
`;

const Input = styled.input`
  width: 100%;
  max-width: 360px;
  padding: 0.5rem 0;
  padding-left: 0.5rem;
  /* padding: 0.5rem 0.5rem 0.5rem 0.5rem; */
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #777;
  }

  &::placeholder {
    color: #ccc;
  }
`;

const EyeButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #999;
`;

const MiscRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RememberContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin: 0;
`;

const RememberLabel = styled.label`
  margin-left: 0.3rem;
  font-size: 14px;
  color: #333;
`;

const ForgotLink = styled.a`
  font-size: 14px;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SignInButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 0.7rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  margin-top: 1rem;

  &:hover {
    background-color: #333;
  }
`;

// Footer with two lines: left (copyright) & right (version)
const Footer = styled.footer`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 12px;
`;
