import React from 'react'
import './discovery.css'
import { Carousel } from '@/components/ui/carousel'
import {
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  


const Discovery = () => {
    return (
        <>
        <Carousel>
            <CarouselContent>
                <CarouselItem>1</CarouselItem>
                <CarouselItem>2</CarouselItem>
                <CarouselItem>3</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>

        hi
        </>
    )
}

export default Discovery