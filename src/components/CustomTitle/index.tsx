import React from 'react'
import { Divider } from 'antd'
import './index.less'

interface titleHeaderPropsT {
    title: string
}

const TitleHeader = (props: titleHeaderPropsT) => {
    const { title } = props
    return (
        <div>
            <Divider type="vertical" orientation="left" style={{width: "4px", backgroundColor: "#3E95F2", marginRight: "10px", top: "-0.06em"}} />
            <span className="title">{title}</span>
        </div>
    )
}

export default TitleHeader
