import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
const menu =() => (
        <div style={{
            background:'#f4f4f4',
            paddingTop:'10px'
        }}>
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent:'space-evenly'
        }}>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About</Link></li>
           <li><Link to="/services">Services</Link></li>
           <li><Link to="/blog">Blog</Link></li>
        
        </ul>
         </div>
        
    )


export default menu