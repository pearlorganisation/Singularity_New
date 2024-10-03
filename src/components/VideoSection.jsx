// legal page video section

import React, { useRef, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import IntroThumbnail from "../assets/singularity/intro_thumbnail.png";

const VideoSection = () => {
    const [playButton, setPlayButton] = useState(true)
    const videoRef = useRef()

    const playBtn = (arg) => {
        videoRef.current.play()
        setPlayButton(false)

    }
    const pauseBtn = (arg) => {
        videoRef.current.pause()
        setPlayButton(true)


    }
    return (
        <div className="bg-gradient-to-r rounded from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-1 h-full">
            <div className="w-full h-full bg-black grid place-items-center group">
                {
                    playButton ? <button onClick={() => {
                        playBtn()
                    }} className="w-[5rem] h-[5rem] z-30  absolute rounded-full bg-indigo-500/70 text-white grid place-items-center"><FaPlay size={30} /></button>
                        : <button onClick={() => {
                            pauseBtn()
                        }} className="w-[5rem] h-[5rem] z-30 group-hover:visible invisible absolute rounded-full bg-indigo-500/70 text-white grid place-items-center"><FaPause size={30} /></button>
                }
                <video

                    poster={IntroThumbnail}
                    loop
                    ref={videoRef}
                    className="mx-auto h-full "
                    src='https://rr5---sn-qxaelned.c.drive.google.com/videoplayback?expire=1710934554&ei=6p_6ZeamBuubp84P__eqmAE&ip=103.182.161.55&id=e79997dbad5cf6a4&itag=18&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=5M&mm=32,26&mn=sn-qxaelned,sn-h5576nss&ms=su,onr&mv=m&mvi=5&pl=24&ttl=transient&susc=dr&driveid=1GuUgHhZ1mZ-NNvsRTcA3IGiI6O9jUecI&app=explorer&eaua=Aaz2Nyfyfhw&mime=video/mp4&vprv=1&prv=1&dur=102.121&lmt=1708065433245556&mt=1710923331&fvip=5&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRgIhAI-Ya6SR6S1gfFO-uQ8f5nPJldGEzZ_wRY2uFT5_Ao8WAiEAnVhre9XYbaY5FDgGK6UaB_5TFPm5uDV3parHVOLv4Xw=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=ALClDIEwRQIhAKtYE3oJdm8wv3EKDJortvDBAy6cp0BjRzQSECr560IXAiAArHpe58PA04gRqvahGQFzRo1szAQLpzXC49LKOmeIJw==&cpn=MgQ1E5DGL8Z619Tf&c=WEB_EMBEDDED_PLAYER&cver=1.20240317.00.00'
                />

            </div>
        </div>
    )
}

export default VideoSection