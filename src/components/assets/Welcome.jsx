import React, { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

function Welcome({ description }) {
    const toast = useToast();
    const toastIdRef = React.useRef();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function addToast() {
        toastIdRef.current = toast({
            description: description,
            status: 'success',
            duration: 1000,
            isClosable: true,
            position: 'bottom',
        });
    }

    useEffect(() => {
        addToast();
    }, [addToast]);

    return <></>;
}

export default Welcome;
