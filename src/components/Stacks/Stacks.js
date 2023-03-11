import React, {useRef, useEffect} from 'react'
// import { useInView } from 'react-intersection-observer';
import './stacks.css'

const Stacks = () => {
  // const {ref: stacksRef, inView: stacksIsVisible} = useInView()
  const stacksRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if(entry.isIntersecting){
        console.log('Hello')
        entry.target.classList.add('fade-icons')
      }else {
        console.log('Heyyyyy')
        entry.target.classList.remove('fade-icons')
      }
    })
    observer.observe(stacksRef.current)
  }, [])


  return (
    <section className="stacks-section">
        <h2>Basic Knowledge Experiences:</h2>
        <div className='stacks' ref={stacksRef}>
            <i className="stack-icons fa-brands fa-html5"></i>
            <i className="stack-icons fa-brands fa-css3-alt"></i>
            <i className="stack-icons fa-brands fa-js"></i>
            <i className="stack-icons fa-brands fa-react"></i>
            {/* <i className="stack-icons fa-brands fa-bootstrap"></i> */}
            {/* <i className="stack-icons fa-brands fa-node"></i>  */}
        </div>
    </section>
  )
}

export default Stacks