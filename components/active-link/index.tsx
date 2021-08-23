import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children } from 'react'

type ActiveLinkTypes = {
    href: string;
    activeClassName: string;
    children?: any;
    as?: string;
}

const ActiveLink = ({ children, activeClassName, href, ...props }: ActiveLinkTypes) => {
    const { asPath } = useRouter()
    const child = Children.only(children)
    const childClassName = child.props.className || ''
    
    // pages/index.js will be matched via props.href
    // pages/about.js will be matched via props.href
    // pages/[slug].js will be matched via props.as
    const className =
        asPath === href || asPath === props.as
            ? `${childClassName} ${activeClassName}`.trim()
            : childClassName

    return (
        <Link href={href} {...props}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    )
}

ActiveLink.propTypes = {
    activeClassName: PropTypes.string,
}

export default ActiveLink