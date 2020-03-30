import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const PageNavigation = ({ num, pageMax, href, numOfIndexes, as }) => {
    const pageNumber = num / 12

    //creating tha linksssss
    //hard coded here..

    //find num of pages before and after current
    const createPageIndexes = (num, pageMax, numOfIndexes) => {
       const middle = Math.trunc(numOfIndexes / 2)

       if (num > middle) {
         if (num > pageMax - middle) {
            
          // bcos length +1!
            const after = pageMax + 1
            const before = after - numOfIndexes
            console.log([before, after])
            return [before, after]

         } else return [num - middle, num + middle + 1]
       } else {

          const before = num - 1 === 0 ? num : num -1
          // + 1 because of length, +1 because index starts with 1, not 0
          const after = numOfIndexes + 2 - before
          return [before, after]
       }
    }

    //produce the content
    const produceContent = (beforeAfter, pageNumber) => {

        let toReturn = []
        for (let i = beforeAfter[0]; i < beforeAfter[1]; i++ ) {
            const temp = <Link href={href} as={`${as}${i}`} key={i}>
                            <PageLink page={i === pageNumber && true}>{i}</PageLink>
                         </Link>
            toReturn = [...toReturn, temp]
        }

        return toReturn
    }

    const beforeAfter = createPageIndexes(pageNumber, pageMax, numOfIndexes)
    const content = produceContent(beforeAfter, pageNumber)

    return (
        <Container>
            <PageIndex>
              {content}
            </PageIndex>
        </Container>
    )
}

export default PageNavigation

const PageLink = styled.a`
  padding:2vh;
  font-weight: 500;
  color: ${props => props.page ? '#000' : '#fff'};
  background-color: ${props => props.page ? '#fff' : 'rgba(152, 152, 152, 0.8)'};
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #000;
  }
`

const PageIndex = styled.div`
  height: 50%;
  width: 50%;
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.alignItems('center')};
  ${({ theme }) => theme.justifyContent('center')};
`

const Container = styled.nav`
  height: 10vh;
  width: 100%;
  background-color: ${({ theme }) => theme.footColor};;
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.justifyContent('center')};
  ${({ theme }) => theme.alignItems('center')};

  @media only screen and ${({ theme }) => theme.sizes.mobile} {
    
      a {
        font-size: 0.5rem;
        padding: 1.5vh;
      }
  }
`