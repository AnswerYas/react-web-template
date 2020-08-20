import React, { useState } from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

export default (props: any) => {
    const [hasError, setError] = useState(false)
    const history = useHistory()

    const handleClick = () => {
        history.push('/')
        setError(false)
    }
    return (
        <>
            {hasError ? (
                <Result
                    status="500"
                    title="500"
                    subTitle="Sorry, the server is wrong."
                    extra={
                        <Button type="primary" onClick={handleClick}>
                            Back Home
                        </Button>
                    }
                />
            ) : (
                props.children
            )}
        </>
    )
}
