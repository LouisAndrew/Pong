import React from 'react'
import styled from 'styled-components'
import SvgSearch from './assets/SvgSearch'

export default function Search() {

    const searchClick = () => {
        document.getElementById('text-input').classList.toggle('active')
    }

    return (
        <Container>
            <TextInput placeholder='Search Here' id='text-input'></TextInput>
            <SvgSearch onClick={searchClick} id='search-icon' />
        </Container>
    )
}

const TextInput = styled.input`
  border: none;
  outline: none;
  padding: 0;
  background-color: rgba(21, 21, 21, 0.6);
  color: #fff;
  font-size: 0.9rem;
  transition: 0.5s;
  position: absolute;
  top: 8vh;
  height: 0;
  right: 4vw;
  transition: 0.5s;

  &.active {
      height: fit-content;
      padding: 1vh;
  }
`

const Container = styled.form`
  ${({ theme }) => theme.fitContainer};
  padding: 2vh 4vw;
  position: relative;

  #search-icon {
      position: absolute;
      height: 100%;
      top: 0;
      right: 4vw;
      transform: scale(1.5);
      transition: 0.5s;
  }

  #search-icon:hover {
      transform: scale(2);
      cursor: pointer;
  }

  @media only screen and ${({ theme }) => theme.sizes.mobile} {
      
      & {
          padding: 1.8vh 2vh;
      }

      #search-icon {
          right: 2vh;
          transform: scale(1);
      }

      input {
          transition: 0.2s;
      }

      input.active {
          font-size: 0.5rem;
          padding: 0.5vh 0.6rem;
      }
  }

  @media only screen and ( orientation: landscape ) and ( max-width: 850px ) {

      #search-icon {
          transform: scale(1);
      }

      & {
          padding: 0 4vw;
      }

      input {
          font-size: 0.5rem;
      }
  }
`