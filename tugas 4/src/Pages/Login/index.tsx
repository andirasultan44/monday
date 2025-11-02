import React, {useState, useContext} from "react";
import * as S from "./styles";
import Logo from "../../Img/Logo.png";
import { Link } from "react-router-dom";
import AuthContext, {AuthType} from "../../Contexts/authContext";


const Login: React.FC = ()=>{
    const {setUserData} = useContext(AuthContext) as AuthType;
    const [email, setEmail] =  useState("");

    function handleLogin(){
        localStorage.setItem('@Project:email', email);
        setUserData({email})


    }

    

    function handleEmail(event: React.ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
    }

    return(    
        <S.Page>
  <S.LeftSide>
    <S.Img src={Logo}></S.Img>
  </S.LeftSide>
  <S.RightSide>
    <S.Title>To Do</S.Title>
    <S.Subtitle>Silakan masukkan data Anda untuk mengakses tugas.</S.Subtitle>

    <S.FieldName>Email</S.FieldName>
    <S.InputField 
      value={email} 
      id="email" 
      onChange={handleEmail} 
      placeholder="Masukkan email Anda">
    </S.InputField>

    <S.FieldName>Kata Sandi</S.FieldName>
    <S.InputField 
      placeholder="Masukkan kata sandi Anda" 
      type="password">
    </S.InputField>

    <S.KeepSigned>
      <S.Checkbox />
      <S.Subtitle>Ingat saya</S.Subtitle>
    </S.KeepSigned>

    <Link to="/">
      <S.SignIn onClick={handleLogin}>Masuk</S.SignIn>
    </Link>

    <S.Subtitle>Belum punya akun? <a>Daftar</a></S.Subtitle>
  </S.RightSide>
</S.Page>

    )
};

export default Login;