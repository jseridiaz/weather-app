import React from 'react'
import SectionContainer from '../../Components/section/SectionContainer'
import ArticleModule from '../../Components/ArticleModule/ArticleModule'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <>
      <SectionContainer className='flex-container' idName='section-abaut-us'>
        <ArticleModule
          idName='firstParraf'
          textH2={'All about this APP'}
          textP='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quaerat natus nihil alias nulla officiis nisi non corporis, consectetur cum architecto reprehenderit nemo perspiciatis iste distinctio. Consequatur recusandae fuga inventore.'
        />
        <ArticleModule
          idName='secondParraf'
          textP='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magnam aut corporis, quo veritatis consequatur necessitatibus recusandae impedit itaque earum, laborum aliquid qui nam consectetur possimus quas sit, beatae voluptatem.'
        />
      </SectionContainer>
    </>
  )
}

export default AboutUs
