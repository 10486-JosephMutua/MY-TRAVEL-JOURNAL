import React from "react";
import "./style.css";
import Header from"./Component/Header";
import Entry2 from"./Entry";
export default function App(){
  return(<>
<Header />
<Entry2
img="https://plus.unsplash.com/premium_photo-1661962643046-198516c2bec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW91bnQlMjBmdWppfGVufDB8fDB8fHww"
country="JAPAN"
name="Mount Fuji"
date="12 Jan, 2021 - 24 Jan, 2021"
text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."

/>

<Entry2 
img="https://media.istockphoto.com/id/539241036/photo/sydney-by-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=_IY7m5MVYGtPcMV4-0Ovjuibz8VpXXSBRn0xludQHuM="
country="AUSTRALIA"
name="Sydney Opera House"
date="27 May,2021-12 June,2021"
text="The sydney Opera House is a multi-venue performing arts center in Sydney.Located in the banks of the sydney Harbour it is often regarded as one of the 20th century's most famous and distinctive buildings."
/>
<Entry2
img="https://media.istockphoto.com/id/2097298832/photo/seven-sisters-waterfall-in-the-beautiful-geiranger-fjord.webp?a=1&b=1&s=612x612&w=0&k=20&c=4KzLEyRV9j9znyQ6jxIgLXDjr1B4v4EYAvpqwG_AMaY="
country="NORWAY"
name="Geirangerfjord"
date="01 Oct,2021-18 Nov,2021 "
text="The Geiranger Fjord is a fjord in th sunnmore region of more ogRornsdal county,Norway.It is located entirely in the stranda Municipslity."/>

</>
 )
}
