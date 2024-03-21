

import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

async function getData(){
  try {
  const res =  await fetch('https://nextjsecommbackend.vercel.app/api/10kto15k')
  
  return res.json()
  }
  catch(err){
    console.log(err)
  }
}


async function bet10kto15k () {
   const data = await getData()
 return(
   <div>
   <div className = " container">
 {data.map((item,index)=>{
  
  
  
  
   return(
   <div key={index} className='border-y border-gray-400'>
   <Link className="flex" href={{pathname:'./productdetails',  query:{data:JSON.stringify(item
     
   )}}}>
<img src={item.imgUrl}
width={100}
height={100}
alt='image'/>
<div className='p-3'>
<h1 className='m-2 text-2xl'>{item.MobileName}</h1>

<div className="flex">

<div className="w-3/4">
{item.VariantAndPrices.map((variant,index)=>{return(<p key={index} className="text-red-500 w-32 text-sm">{variant}</p>)})}
</div>
<div className=" items-center flex">
<h1 className=" linkAnimation ml-1 text-center text-sm"> MORE DETAILS </h1>
</div>
</div>
</div>
</Link>
</div>
)
 })}

  </div>
  </div>)
}

export default bet10kto15k
