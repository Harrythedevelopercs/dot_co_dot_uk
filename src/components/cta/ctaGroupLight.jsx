// Components
import { CTA } from "@/components"

export function CTAGroupLight() {
    return (
        <>
            <CTA css="hover:bg-black hover:border hover:border-white hover:[boxShadow:0px_5px_15px_rgba(255,_118,_117,_0.3)] bg-gradient hover:bg-none text-white" />
            <CTA icon="call-pink" css="bg-transparent border-2 text-black border-black hover:text-lightBlue hover:border-lightBlue [&>img]:brightness-0 [&>img]:invert-0 [&:hover>img]:brightness-[inherit] [&:hover>img]:invert" text="302-665-3381" link="tel:302-665-3381" />
        </>
    )
}