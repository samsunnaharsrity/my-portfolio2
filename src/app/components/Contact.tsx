'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';
import Magnetic from './animations/Magnetic';

import {
  Mail,
  Phone,
  MessageCircle
} from 'lucide-react';


export default function Contact() {


const socials = [
{
alt:'Github',
icon:'/github.png',
href:'https://github.com/samsunnaharsrity'
},
{
alt:'Gmail',
icon:'/gmail.png',
href:'mailto:samsunnaharsrity@gmail.com'
},
{
alt:'WhatsApp',
icon:'/wp.png',
href:'https://wa.me/8801872072303'
},
{
alt:'LinkedIn',
icon:'/linkedin.png',
href:'https://linkedin.com/in/samsunnahar'
}
];



return (

<section
id="contact"
className="
relative
py-24
px-6
max-w-7xl
mx-auto
overflow-hidden
"
>


<div className="
ambient-glow
bottom-0
left-1/2
-translate-x-1/2
opacity-20
"/>



<FadeIn>

<h2 className="
text-5xl
font-extrabold
text-center
mb-16
text-gray-800
">
Contact Me
</h2>

</FadeIn>





<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-10
items-stretch
">





{/* Contact Information */}

<FadeIn direction="right">

<div className="
bg-white
rounded-[2rem]
shadow-xl
border
p-10
h-full
flex
flex-col
justify-center
hover:shadow-2xl
transition
">


<h3 className="
text-3xl
font-bold
text-gray-800
mb-5
">
Let's Work Together 🚀
</h3>



<p className="
text-gray-600
leading-relaxed
mb-10
">
I am open to freelance projects,
collaboration and full-time opportunities.
Feel free to contact me anytime.
</p>





<div className="space-y-6">


{/* Email */}

<div className="flex items-center gap-4">

<div className="
p-3
rounded-xl
bg-brand-primary/10
">

<Mail className="text-brand-primary"/>

</div>


<div>

<h4 className="font-bold text-gray-800">
Email
</h4>

<p className="text-gray-600">
samsunnaharsrity@gmail.com
</p>

</div>

</div>






{/* Phone */}

<div className="flex items-center gap-4">

<div className="
p-3
rounded-xl
bg-brand-primary/10
">

<Phone className="text-brand-primary"/>

</div>


<div>

<h4 className="font-bold text-gray-800">
Phone
</h4>

<p className="text-gray-600">
+8801872072303
</p>

</div>

</div>






{/* WhatsApp */}

<div className="flex items-center gap-4">

<div className="
p-3
rounded-xl
bg-brand-primary/10
">

<MessageCircle className="text-brand-primary"/>

</div>


<div>

<h4 className="font-bold text-gray-800">
WhatsApp
</h4>

<p className="text-gray-600">
+8801872072303
</p>

</div>

</div>



</div>


</div>

</FadeIn>








{/* Form */}

<FadeIn direction="left">


<div className="
glass-card
rounded-[2rem]
p-8
lg:p-10
h-full
">


<form

action="https://formsubmit.co/samsunnaharsrity@gmail.com"

method="POST"

className="space-y-6"

>


<input
type="hidden"
name="_captcha"
value="false"
/>


<input
type="hidden"
name="_subject"
value="New Portfolio Contact Message"
/>


<input
type="hidden"
name="_template"
value="table"
/>


<input
type="hidden"
name="_next"
value="http://localhost:3000/?success=true"
/>





<div>

<label
htmlFor="name"
className="
text-sm
font-bold
text-gray-700
"
>
Name
</label>


<input

id="name"

name="name"

required

type="text"

placeholder="Enter your name"

className="
mt-2
w-full
rounded-2xl
border
bg-white/60
px-5
py-4
outline-none
focus:border-brand-primary
focus:ring-4
focus:ring-brand-primary/10
transition
"

/>

</div>






<div>

<label
htmlFor="email"
className="
text-sm
font-bold
text-gray-700
"
>
Email
</label>


<input

id="email"

name="email"

required

type="email"

placeholder="Enter your email"

className="
mt-2
w-full
rounded-2xl
border
bg-white/60
px-5
py-4
outline-none
focus:border-brand-primary
focus:ring-4
focus:ring-brand-primary/10
transition
"

/>

</div>






<div>

<label
htmlFor="message"
className="
text-sm
font-bold
text-gray-700
"
>
Message
</label>


<textarea

id="message"

name="message"

required

rows={5}

placeholder="Write your message..."

className="
mt-2
w-full
rounded-2xl
border
bg-white/60
px-5
py-4
outline-none
resize-none
focus:border-brand-primary
focus:ring-4
focus:ring-brand-primary/10
transition
"

/>

</div>







<div className="flex justify-end">


<Magnetic>

<motion.button

type="submit"

whileHover={{
scale:1.05
}}

whileTap={{
scale:.95
}}

className="
btn-gradient
px-10
py-4
rounded-2xl
font-bold
shadow-lg
"

>

Send Message ✉️

</motion.button>

</Magnetic>


</div>



</form>


</div>


</FadeIn>



</div>








{/* Social Links */}

<FadeIn>


<div className="
mt-16
flex
justify-center
gap-5
flex-wrap
">


{
socials.map((social)=>(


<Magnetic key={social.alt}>


<a

href={social.href}

target="_blank"

rel="noopener noreferrer"

className="
p-5
bg-white
rounded-2xl
shadow-md
border
hover:shadow-xl
hover:-translate-y-2
transition-all
duration-300
"

>


<Image

src={social.icon}

alt={social.alt}

width={28}

height={28}

/>


</a>


</Magnetic>


))
}


</div>


</FadeIn>




</section>

);

}