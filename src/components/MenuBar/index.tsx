import React, { useEffect } from 'react'
import './index.less'
import HomeIcon from '@/assets/icons/home.png'
import ControlIcon from '@/assets/icons/control.png'
import PurifyIcon from '@/assets/icons/purify.png'
import RecordIcon from '@/assets/icons/record.png'
import SpaceIcon from '@/assets/icons/space.png'
import SpecIcon from '@/assets/icons/spec.png'

import PurifyActiveIcon from '@/assets/icons/purify-active.png'
import RecordActiveIcon from '@/assets/icons/record-active.png'
import SpaceActiveIcon from '@/assets/icons/space-active.png'
import SpecActiveIcon from '@/assets/icons/spec-active.png'
import ControlActiveIcon from '@/assets/icons/control-active.png'
import { useHistory, Link } from 'react-router-dom'
import classnames from 'classnames'

const MenuBar = ({ baseRoute = '/efficiency' }) => {
    const history = useHistory()
    const currentPath = history.location.pathname
    const menus = [
        {
            src: HomeIcon,
            activeSrc: HomeIcon,
            path: `${baseRoute}/overview`,
            disabled: false,
        },
        {
            src: SpaceIcon,
            activeSrc: SpaceActiveIcon,
            path: `${baseRoute}/system`,
            disabled: false,
        },
        {
            src: SpecIcon,
            activeSrc: SpecActiveIcon,
            path: `${baseRoute}/design`,
            disabled: false,
        },
        {
            src: RecordIcon,
            activeSrc: RecordActiveIcon,
            path: `${baseRoute}/solution`,
            disabled: false,
        },
        {
            src: ControlIcon,
            activeSrc: ControlActiveIcon,
            path: `${baseRoute}/deduction`,
            disabled: false,
        },
        {
            src: PurifyIcon,
            activeSrc: PurifyActiveIcon,
            path: `${baseRoute}/resource`,
            disabled: false,
        },
    ]
   
    return (
        <div className="menu-bar">
            {menus.map((item) => (
                <div
                    className={classnames(['menu-bar-item', { active: currentPath === item.path }])}
                    key={item.path}
                >
                    <Link to={item.path}>
                        <img
                            className="icon"
                            src={currentPath === item.path ? item.activeSrc : item.src}
                        />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default MenuBar
