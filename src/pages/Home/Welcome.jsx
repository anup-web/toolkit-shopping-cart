import React from 'react'
import Banner from './Banner'
import Freeshipping from './Freeshipping'
import Shopbycategory from './Shopbycategory'
import Topnewarrival from './Topnewarrival'
import Onlinebanner from './Onlinebanner'
import Recomendedproducts from './Recomendedproducts'

const Welcome = () => {
  return (
    <div className='home-nav'>
        <Banner />
        <Freeshipping />
        <Shopbycategory />
        <Topnewarrival />
        <Onlinebanner />
        <Recomendedproducts />
    </div>
  )
}

export default Welcome