import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Link } from 'react-router-dom'
import Table from '../Three/Table'
import { OrbitControls } from '@react-three/drei'
import Product3DViiewer from '../Components/Product3DViiewer'
import products from '../data/data'
import Our from '../assets/couch.jpg'

const Home = () => {
  return (
    <main className="flex flex-col bg-[#1A1918]">

        <div className="grid md:grid-cols-2 grid-cols-1 h-[650px] items-center text-center">

            <div className="flex font-serif text-amber-50 flex-col ">
                <h1 className="md:text-5xl uppercase font-bold  text-3xl">
                    Sculptural Living, Designed for Space.
                </h1>
                <p className='uppercase p-2 m-4' >
                    Interactive 3D home furniture and decor crafted to transform your interior landscape.
                     Experience every detail before it enters your home.
                </p>

                <span className='text-center'>
                <Link to='/shop' className='bg-[#9A9A9E] m-2 p-5 rounded-4xl  text-center hover:bg-amber-50 hover:text-gray-600'>
                    Explore Collection
                </Link>
               <a 
                    href="https://wa.me/27699303923"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='bg-[#9A9A9E] m-2 p-5 rounded-4xl text-center hover:bg-amber-50 hover:text-gray-600'
                >
                Order Via WhatsApp
                </a>
                </span>
            </div>

          <div className="w-full h-[400px] md:h-[550px]">
                    <Canvas
                        camera={{ position: [4, 3, 5], fov: 40 }}
                        dpr={[1, 2]}
                        gl={{ antialias: true }}
                    >
                        <ambientLight intensity={1.5} />
                        <directionalLight position={[5, 5, 5]} intensity={2} />

                        <Table />

                        <OrbitControls
                        enableZoom
                        enablePan={false}
                        minDistance={3}
                        maxDistance={8}
                        enableDamping
                        dampingFactor={0.08}
                        />
                    </Canvas>
          </div>
        </div>
    
    <section className='bg-[#F9F6F0] text-[#1A1918] p-8 md:p-12'>
        <h2 className="text-3xl md:text-5xl font-bold m-3 uppercase">
            Featured pieces
        </h2>
        
        <p className="text-[#6E6B65] mb-8">
            Explore our collection in interactive 3D
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 6).map((product)=>(
                <article key={product.id} className='space-y-3'>
                    <Product3DViiewer modelPath={product.model} />

                    <h3 className="font-bold text-lg">
                        {product.name}
                    </h3>

                    <p className='text-[#6E6B65]'>
                        ${product.price.toFixed(2)}
                    </p>
                </article>
            ))}
        </div>
    </section>

    <section className='font-serif bg-[#F9F6F0] text-center h-[450px] grid grid-cols-1 md:grid-cols-2' >
        <div className="w-full">
            <img src={Our} alt="" className='rounded-2xl hover:scale-95 duration-300 transition-normal'/>
        </div>
       <div className="text-center">
         <h1 className='font-bold uppercase text-7xl'>Our Story</h1>
        <h3 className='font-bold uppercase text-[#C86D51]'>Form Meets Utility.</h3>
        <p>
            At Vusumzi Picks, we blend architectural design with functional home decor. 
            Every piece in our studio is selected for its balance of texture, durability, 
            and visual poise. We believe that furniture should extend beyond utility, 
            serving as dynamic sculpture within your everyday living space. 
            By merging tactile materials with modern digital craftsmanship, 
            we invite you to explore, interact, and curate your environment 
            with confidence—ensuring every table, seat, and vessel brings enduring harmony
             and intentional style to your home.
        </p>
       </div>

    </section>

    </main>
  )
}

export default Home