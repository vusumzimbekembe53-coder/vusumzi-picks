import { useGLTF, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Table = () => {
  const { scene } = useGLTF('/smalltable.glb')
  const tableRef = useRef()

  useFrame((state, delta) => {
    if (tableRef.current) {
      tableRef.current.rotation.y += delta * 0.25
    }
  })

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.1}
      floatIntensity={0.25}
      floatingRange={[-0.15, 0.15]}
    >
      <primitive
        ref={tableRef}
        object={scene}
        scale={2}
        position={[0, -1, 0]}
      />
    </Float>
  )
}

export default Table