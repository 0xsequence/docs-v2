import{r as t,j as s}from"./index-DvPQu5E4.js";const a=i=>{const e=t.useRef(null),r=t.useRef(null);return t.useEffect(()=>{const c=()=>{r.current&&e.current&&(r.current.style.display="block",e.current.style.display="none",r.current.src+="?autoplay=1")},n=e.current;return n.addEventListener("click",c),()=>{n.removeEventListener("click",c)}},[]),s.jsxs("div",{className:"video-container",children:[s.jsx("img",{ref:e,className:"preview-image",src:i.videoPreviewSrc,alt:"Preview"}),s.jsx("video",{ref:r,className:"video-frame",width:"560",height:"315",controls:!0,muted:!0,src:i.videoSrc,type:"video/mp4",style:{display:"none"}})]})};export{a as V};
