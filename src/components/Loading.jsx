import {
    Modal,
    ModalOverlay,
    ModalContent,
    Center,
    CircularProgress
  } from '@chakra-ui/react'
  import React from 'react'
  //import { useSelector } from "react-redux"
  
  //This function is for declaring the loading state 

  function Loading() {
    const OverlayOne = () => (
  
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
    //const { loading } = useSelector((store) => store.ecomData)
  
  
    return (
      <>
        {
          loading && <Modal isCentered isOpen>
            <OverlayOne />
            <ModalContent bg="none" boxShadow={"none"} >
              <Center>
                <CircularProgress isIndeterminate color='green.300' />
              </Center>
            </ModalContent>
          </Modal>
        }
  
      </>
    )
  }
  export default Loading;