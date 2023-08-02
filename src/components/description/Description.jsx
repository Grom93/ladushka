import React from 'react'
import DescriptionStart from './DescriptionStart'
import DescriptionAudio from './DescriptionAudio'
import {motion} from 'framer-motion'

const Description = () => {

  const [isVisible, setIsVisible] = React.useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };
  React.useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 50000000);
    }
  }, [isVisible]);
  
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        yoyo: Infinity,
      },
    },
    hidden: {
      opacity: 1,
    }
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
    <div className=''>
      {!isVisible && (
        <motion.button
          className='btnP'
          variants={buttonVariants}
          whileHover="hover"
          initial="visible"
          animate="hidden"
          onClick={handleClick}
          style={{backgroundColor: "#ffc0cb"}}
        >
          Мамау
        </motion.button>
      )}
      {isVisible && (
        <DescriptionStart  blockVariants/>
        
      )}
      {isVisible && (
      <DescriptionAudio />)}
    
    </div>
  )
}

export default Description