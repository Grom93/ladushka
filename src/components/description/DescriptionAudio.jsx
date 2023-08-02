

import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './Description.css';
import {motion} from 'framer-motion'

const DescriptionAudio = (props) => {
  const playlist = [
    { name: 'Kentavrik', img: 'https://sun9-23.userapi.com/impg/X32cDmK_0wWktDMWfXZxcHNN1vgCyMHOA5jiFg/m0Nj6V6CGUk.jpg?size=1200x1600&quality=96&sign=7e6c5fb73cbc3c84b5239be48d12dbf7&type=album',file: './assets/audio/PTT-20230802-WA0000.opus' },
    { name: 'Пирожок', img: './img/photo_2023-06-24_03-28-22.jpg',file: './assets/audio/PTT-20230802-WA0002.opus' },
    
    { name: 'Mamau', img: './img/korol-i-shut.jpg',file: './assets/audio/Korol_i_SHut_-_Kukla_kolduna_62570545.mp3' },
    { name: 'Grom', img: 'https://sun9-23.userapi.com/impg/c858332/v858332984/170275/WxfX34Zoclw.jpg?size=1620x2160&quality=96&sign=200a29411763b1f73c9ebd79ab44249c&type=album',file: './assets/audio/PTT-20230802-WA0003.opus' }
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById('audio');

    if (isPlaying) {
      audio.src = playlist[currentTrackIndex].file;
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  const changeTrack = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };
  const blockVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 0.5,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div className='postcard container2'  variants={blockVariants} initial="hidden" animate="visible">
      <div id="mobile-box">
        <div className="card">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img className="card-img-top" src={playlist[currentTrackIndex].img} alt="Card image cap" style={{width: '358px', height:'400px'}}/>
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </div>
          <div className="card-body text-center">
            <h5 className="h5 font-weight-bold">{playlist[currentTrackIndex].name}</h5>
            <p className="mb-0">{playlist[currentTrackIndex].name}</p>
            <audio id="audio" controls>
              <source src={playlist[currentTrackIndex].file} type="audio/mp3" />
            </audio>
            <Button onClick={toggleAudio}>{isPlaying ? 'Пауза' : 'Воспроизвести'}</Button>
            

            <h5>Плейлист</h5>
            {playlist.map((track, index) => (
              <Button key={index} onClick={() => changeTrack(index)} style={{marginRight:'10px', marginTop:'10px'}}>
                {track.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      </motion.div>
    
  );
};

export default DescriptionAudio;


/*
        <audio id="music" preload="true">
          <source src="../../public/assets/audio/Korol_i_SHut_-_Kukla_kolduna_62570545.mp3"/>
        </audio> */