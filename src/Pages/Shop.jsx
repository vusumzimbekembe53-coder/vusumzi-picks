import React from 'react'
import products from '../data/data'
import Product3DViiewer from '../Components/Product3DViiewer'

const Shop = () => {

 function addToCart(product) {
  alert(`${product.name} added to cart`)
}

  return (
    <main className='bg-[#F9F6F0] '>
      <h1 className="font-bold uppercase font-serif md:text-6xl text-4xl">
        The Complete Collection
      </h1>
      <p className="text-xl font-serif text-[#C86D51]">
        Explore our curated selection of architectural furniture, ceramics, and structural wall accents.
         Interact with every piece in 3D before bringing it home.
      </p>

      <div className="grid grid-cols-1  md:grid-cols-4 gap-6">
        {products.map((product)=>(
          <article key={product.id} className="space-y-3">
            <Product3DViiewer modelPath={product.model} />

            <h2 className="font-bold text-xl text-[#1A1918]">
              {product.name}
            </h2>

            <p className='text-[#6E6B65]'>

              ${product.price.toFixed(2)}
            </p>

           <button
              onClick={() => addToCart(product)}
              className="bg-[#1A1918] text-white px-5 py-3 cursor-pointer rounded-xl hover:bg-[#C86D51] transition-colors"
            >
              Add to cart
            </button>

          </article>
        ))}
      </div>



    </main>
  )
}

export default Shop
