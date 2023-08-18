import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection