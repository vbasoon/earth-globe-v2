import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNightMap from "../../assets/textures/8k_earth_nightmap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import { TextureLoader } from "three";


export default function Earth(props) {

  const [colorMap, nightMap, normalMap, specularMap, cloudsMap ] = useLoader(TextureLoader, [EarthDayMap, EarthNightMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap])
  return (
    <>
      <ambientLight intensity={1}/>
      <mesh>
        <sphereGeometry args={[1.005, 32, 32]}/>
        <meshPhongMaterial 
          map={cloudsMap} 
          opacity={0.4} 
          depthWrite={true} 
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap}/>
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
        <OrbitControls 
          enableZoom={true} 
          enablePan={true} 
          enableRotate={true} 
          zoomSpeed={0.6} 
          panSpeed={0.4} 
          rotateSpeed={0.4}
          //target={}
        />
      </mesh>
    </>
  )
}