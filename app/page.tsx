import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      page
      <img width={200} height={200} src="https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-lang-que-viet-nam.jpg" alt="Capybara"/>
      <Image
      src="https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-lang-que-viet-nam.jpg" 
      height={200}
      width={200}
      alt="Capybara">
      </Image>
      <Image
      src="https://th.bing.com/th/id/R.bb7b2a0492d096038b260feef8e8ab6a?rik=X%2bv4069YuVZLxA&pid=ImgRaw&r=0" 
      height={200}
      width={200}
      alt="Capybara">
      </Image>
      <Image
      src="https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-lang-que-viet-nam.jpg" 
      height={200}
      width={200}
      alt="Capybara">
      </Image>
    </div>
  )
}