import Image from "next/image";
import { Navbar } from "@/components/navbar";
import {Details} from "@/components/detail";
import {NFT}from "@/components/nft";
import {MARQUE}from "@/components/logo";
import {CARDS}from "@/components/card";
import {FORM}from  "@/components/form";
import {FOOTER} from "@/components/footer"; 
import  {NFTCATEGORIES} from "@/components/nftcategorie";



export default function Home() {
  return (
    <>
      <Navbar/>
      <Details/>
      <MARQUE/>
      <NFT/>
      <CARDS/>
      <NFTCATEGORIES/>
       <FORM/>
      <FOOTER/>
    </>
  
  );
}
