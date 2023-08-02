import React from 'react'
import {motion} from 'framer-motion'
import './Description.css'

import {Container, Row} from "react-bootstrap"



const DescriptionStart = (props) => {
  

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
    
    <Container className='container1'>
      
      
      
        <motion.div className='postcard' variants={blockVariants} initial="hidden" animate="visible">
          <h1 style={{textAlign:'center', paddingTop:'100px'}}>С днём рождения!</h1>
          <div style={{paddingLeft:'400px', paddingRight:"400px", paddingTop:"",}}>
          <p >Я хочу тебя поздравить в этот день с днем рождения! Пожелать счастья в жизни, любви, здоровья! И сказать, что жизнь - хоть и не легка порою, и нам часто приходиться бороться с трудностями, которые она нам преподносит, и часто плакать и страдать из-за потерь и неудач..., но все же она прекрасна, потому что рядом с Печалью по жизни с нами шагает и Радость, рядом с Разочарованием - шагает Преданность и Любовь. И, как бы тебе не было трудно идти по жизненному пути, над твоей головой всегда, улыбаясь светит яркое солнышко,
согревая твое замерзшее сердечко, и давая надежду на удачу! После проливного дождя неудач, выходит из своих чертогов семицветная радуга, даруя вновь успокоение сердцу и мир душе! Замечай все это! И пусть Бог никогда тебя не оставит одного на твоем жизненном пути!</p>
</div></motion.div>
        
        </Container>
        
      
      
    






   /* <div>
    <div>
      
      <motion.div id='div1'

      initial={{
        x:-1000,
        opacity: 0
      }}

      animate={{
        x: 0,
        opacity: 1

      }}

      transition={{
          delay: 1,
          duration: 2
      }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis, magni hic repellat quae consequuntur reiciendis debitis cum natus iure sunt laboriosam excepturi qui nostrum eius possimus eum, doloremque dolores!
      </motion.div>

      <motion.div id='div2'
      initial={{
        opacity: 0
      }}
      animate={{
        y:0,
        opacity: 1
      }}
      transition={{
        delay: 1,
        duration: 2
      }}>

        <motion.img
        src='/'
        className='banner'
        width={250}

        initial={{
          opacity: 0.6
        }}
        transition={{
          duration: 5
        }}

        whileTap={{
          rotate: 360,
        }}/>

      </motion.div>

      <div id='divImg'>
      <motion.div id='div3'
      initial={{
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        skale:1,
        opacity: 1
      }}
      transition={{
        
        duration: 2
      }}>

        <motion.img
        src='/'
        className='ball'
        width={300}

        initial={{
          opacity: 0.6
        }}
        transition={{
          duration: 5
        }}

        whileHover={{
          scale:1.5,
          transition:{
            duration:2
          },
          
        }}/>
        

<motion.img
        drag='x'
        src='/'
        className='ball'
        width={300}

        initial={{
          opacity: 0.6
        }}
        transition={{
          duration: 5
        }}

        

        whileDrag={{
          scale:1.5,
          transition:{
            duration:2
          },
          
        }}/>

      </motion.div>

      <motion.button
      className='btn btn-primary'
      whileHover={{
        scale:1.2,
      }}>Нажми</motion.button>
      </div>


    </div>
    </div>*/
  )
}

export default DescriptionStart