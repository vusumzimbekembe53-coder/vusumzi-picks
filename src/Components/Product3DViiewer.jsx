import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Stage } from '@react-three/drei'
import { useMemo } from 'react'
import { AmbientLight } from 'three'

function Model({ modelPath }){
    const {scene} = useGLTF(modelPath)

//Clone the model so it cn be reused safely
const clonedScene =useMemo(
    ()=> scene.clone(true),
    [scene]
)

return <primitive object={clonedScene} />

}

const Product3DViiewer = ({modelPath} ) => {
  return (
    <div className='w-full h-64 bg-[#F0ECE1] rounded-xl overflow-hidden'>
        <Canvas camera={{position:[0,2,5],fov:45}}>
            <ambientLight intensity={0.7}/>
            <Stage environment="city" intensity={0.6}>
                <Model modelPath={modelPath} />
            <OrbitControls
                makeDefault
                enablePan={false}
                minDistance={2}
                maxDistance={8}
            />
            </Stage>
        </Canvas>
      
    </div>
  )
}

export default Product3DViiewer
