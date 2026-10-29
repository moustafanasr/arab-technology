/** Optional WebGL installation: three.js decorative scene.
 * One renderer, bounded DPR, no interaction hijacking, GPU work paused when hidden.
 * Unsupported devices or blocked CDN gracefully show the CSS fallback rings.
 */
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobile=window.matchMedia('(max-width: 680px)').matches;
if(!reduced&&!mobile){
  const canvas=document.getElementById('three-canvas');
  if(canvas){
    try{
      const THREE=await import('https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js');
      const gl=document.createElement('canvas').getContext('webgl2')||document.createElement('canvas').getContext('webgl');
      if(!gl)throw Error('WebGL unavailable');
      const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});
      renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6));
      const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(35,1,.1,100);camera.position.set(0,0,11);
      const group=new THREE.Group();scene.add(group);
      const material=new THREE.MeshBasicMaterial({color:0x6aafca,wireframe:true,transparent:true,opacity:.17});
      const icosa=new THREE.Mesh(new THREE.IcosahedronGeometry(3.1,2),material);group.add(icosa);
      const ringMaterial=new THREE.MeshBasicMaterial({color:0xc8dfed,wireframe:true,transparent:true,opacity:.18,side:THREE.DoubleSide});
      const ring=new THREE.Mesh(new THREE.TorusGeometry(3.55,.007,3,180),ringMaterial);ring.rotation.x=.9;group.add(ring);
      const ring2=new THREE.Mesh(new THREE.TorusGeometry(2.8,.008,3,160),new THREE.MeshBasicMaterial({color:0xeeb63c,transparent:true,opacity:.32}));ring2.rotation.x=1.1;ring2.rotation.y=.6;group.add(ring2);
      // sparse technical datum points; no visual noise.
      const verts=[];for(let i=0;i<110;i++){let phi=Math.acos(2*Math.random()-1),theta=2*Math.PI*Math.random();let r=3.1+Math.random()*.8;verts.push(r*Math.sin(phi)*Math.cos(theta),r*Math.sin(phi)*Math.sin(theta),r*Math.cos(phi));}
      const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));
      const dots=new THREE.Points(geometry,new THREE.PointsMaterial({color:0xe8b955,size:.025,transparent:true,opacity:.48}));group.add(dots);
      const pointer={x:0,y:0};let visible=true,raf=0,last=0;
      const resize=()=>{const rect=canvas.getBoundingClientRect();if(rect.width<1||rect.height<1)return;renderer.setSize(rect.width,rect.height,false);camera.aspect=rect.width/rect.height;camera.updateProjectionMatrix();};
      const draw=(time)=>{raf=requestAnimationFrame(draw);if(!visible)return;if(time-last<25)return;last=time;group.rotation.y+=.0012;group.rotation.x+=.0006;group.rotation.y+=(pointer.x*.08-group.rotation.y% (Math.PI*2))*.0003;group.rotation.x+=(pointer.y*.03)*.0005;renderer.render(scene,camera);};
      const observer=new IntersectionObserver(entries=>{visible=entries[0]?.isIntersecting??true;},{threshold:0});observer.observe(canvas);
      const onMouse=e=>{pointer.x=(e.clientX/window.innerWidth-.5);pointer.y=(e.clientY/window.innerHeight-.5);};
      window.addEventListener('pointermove',onMouse,{passive:true});window.addEventListener('resize',resize,{passive:true});
      document.addEventListener('visibilitychange',()=>{visible=!document.hidden;});
      resize();raf=requestAnimationFrame(draw);
      window.addEventListener('pagehide',()=>{cancelAnimationFrame(raf);observer.disconnect();window.removeEventListener('pointermove',onMouse);renderer.dispose();geometry.dispose();material.dispose();ringMaterial.dispose();},{once:true});
    }catch(e){console.info('Optional 3D canvas unavailable; CSS scene remains active.');}
  }
}
