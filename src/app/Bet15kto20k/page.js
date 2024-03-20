

import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

async function getData(){
  try {
  const res =  await fetch('https://nextjsecommbackend.vercel.app/api/15kto20k')
 
  return res.json()
  }
  catch(err){
    console.log(err)
  }
}


 async function bet15kto20k () {
   const data = await getData()
 return(
   <div className = "  container">
 {data.map((item,index)=>{
  
  
  
  
   return(
   <div key={index} className='border-y border-gray-400'>
   <Link className="flex" href={{pathname:'./productdetails',  query:{data:JSON.stringify(item
     
   )}}}>
<img src={item.imgUrl} className=""
width={100}
height={100}
alt='image'/>
<div className='p-3'>
<h1 className='m-2 text-2xl'>{item.MobileName}</h1>



<div className="flex">

<div className="">
{item.VariantAndPrices.map((variant,index)=>{return(<p key={index} className="text-red-400 w-32 text-sm">{variant}</p>)})}
</div>
<div className=" items-center flex">
<h1 className=" text-sm linkAnimationProducts ml-1 text-center"> MORE DETAILS </h1>
</div>
</div>
</div>
</Link>
</div>
)
 })}

  </div>)
}

export default bet15kto20k
