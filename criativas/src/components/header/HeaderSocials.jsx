import React from 'react'
import { icons } from 'react-icons'
import{AiFillLinkedin} from 'react-icons/ai'
import {GoMarkGithub} from 'react-icons/go'
import {ImDribbble} from 'react-icons/im'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target ="blank"><AiFillLinkedin/></a>
        <a href="https://github.com" target ="blank"><GoMarkGithub/></a>
        <a href="https://dribbble.com" target ="blank"><ImDribbble/></a>

    </div>
  )
}

export default headerSocials