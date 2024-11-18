"use client"
import Image from "next/image";
import { useEffect } from "react";
import { Card } from "./components/Card";
import { Header } from "./components/header/Header";

export default function Home() {
  const fetchData = async () =>{
    try{
      const res = await  fetch("http://localhost:8000/");
      const data = await res.json();
      console.log(data);

    }catch(error){
      console.log(error);
    }
  };
  useEffect(()=>{
    fetchData();
  },[]);
  const price: number = 1000;
  let str: string ="Hello";
  let bool: boolean  = true ;

  return (
  <div className="flex gap-[20px]">
    <Card img="Zurag" title="Burger" price={5500} discount={20}/>
    <Card img="Zurag1" title="Burger2" price={6500} discount={30}/>
 <Header />
  
  </div>
  
  );
}
