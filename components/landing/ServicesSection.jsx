import { useState } from 'react'
import Heading from '../ui/Heading'

import {
  InboxIcon,
  UsersIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Construction', icon: HomeIcon, href: '#', current: true },
  { name: 'Architecture', icon: UsersIcon, href: '#', current: false },
  { name: 'Consulting', icon: FolderIcon, href: '#', current: false },
  { name: 'Metal Roofing', icon: CalendarIcon, href: '#', current: false },
  { name: 'Painting', icon: InboxIcon, href: '#', current: false },
  { name: 'Electrical', icon: ChartBarIcon, href: '#', current: false },
  { name: 'Green Housing', icon: ChartBarIcon, href: '#', current: false },
]

const services = [
  {
    img: 'https://aadi.theironnetwork.org/wp-content/uploads/2016/06/44639686_xxl-1-940x600.jpg',
    title: 'Construction',
    content: 'History of construction is truly remarkable.  From neolithic architecture to modern day buildings,from mud houses to high rise buildings , the tools and methods have evolved drastically.Archaeological records and  surveys provide us with glimpse of structure that were built thousands'
  },
  {
    img: 'https://aadi.theironnetwork.org/wp-content/uploads/2016/06/42904914_xxl-940x600.jpg',
    title: 'Architecture',
    content: 'What is architecture , is it just an outlook , an opinion , a perspective or is it more than that ?? Some of the  early examples of architecture might shed some light.It can be sufficely presumed  by looking at'
  },
  {
    img: 'https://aadi.theironnetwork.org/wp-content/uploads/2016/06/42895685_xxl-1-940x600.jpg',
    title: 'Consulting',
    content: "Planning does not get better by chance it get's better  on the ability to adapt and implement those changes.Project planning is an aspect of construction that require years of experience in construction,keep a project running in budget, handle problems ,creating"
  },
  {
    img: 'https://aadi.theironnetwork.org/wp-content/uploads/2016/06/Roofing-940x600.jpg',
    title: 'Metal Roofing',
    content: "Though not the first thing you notice,yet  a roof  has much to say about a home's style.Roof shapes and material differ widely , depending upon the usage, and from region to region, contingent upon the climatic conditions.Considering the traditional roof"
  },
  {
    img: 'https://aadi.theironnetwork.org/wp-content/uploads/2016/06/Paint-1-940x600.jpg',
    title: 'Painting',
    content: "AADI construction started in 2014 as a painting contractor, ever since then we have been actively engaged at offering diverse range of services, building painting , renovation, industrial painting,home painting and waterproofing.We deal with texture painting,interior as well as exterior"
  },
  {
    img: 'https://aadi.theironnetwork.org/wp-content/uploads/2016/06/37784013_xxl1-940x600.jpg',
    title: 'Electrical',
    content: "Still struggling with old-fashioned and defunct electrical system? Are you looking for customized electrical solution for your home and enterprise that operates hassle free and requires zero maintenance?? As an Electrical contractor we at AADI specialize in  design , remodelling"
  },
  {
    img: 'https://aadi.theironnetwork.org/wp-content/uploads/2016/06/Green-house-940x600.jpg',
    title: 'Green Housing',
    content: "Green housing or green construction refers to a structure whose design, construction and operation is sustainable , resource efficient ,and the design and material used is such that it allows indoor environmental quality enhancement, operations and maintenance optimization, waste reduction,structure"
  }
]

const ServicesSection = () => {
  const [content, setContent] = useState(services[0])

  const selectHandler = (selectItem) => {
    const selectedContent = services.filter(item => item.title === selectItem)
    const contentJson = {
      img: selectedContent[0].img,
      title: selectedContent[0].title,
      content: selectedContent[0].content,
    }

    console.log(selectedContent);
    setContent(contentJson)
  }

  return (
    <div className="relative bg-white py-16">
      <div className="mx-auto max-w-3xl px-6 text-center lg:max-w-7xl lg:px-8">
        <Heading
          title={'Our Services'}
          subtext={'Our strength lies in our ability to design innovative architecture and restructuring conventional designs to accommodate to the needs of modern times.'}
        />
        <div className="lg:grid lg:gap-12 lg:grid-cols-3 pb-60 lg:pb-0">
          <div className="hidden lg:block grid-cols-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                className='border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-7 text-sm font-medium border-l-4 w-full'
                onClick={() => selectHandler(item.name)}
              >
                <item.icon
                  className='text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6'
                  aria-hidden="true"
                />
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center lg:hidden">
            {navigation.map(item => (
              <button
                key={item.name}
                className='text-lg uppercase text-indigo-600 p-4'
                onClick={() => selectHandler(item.name)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="h-32 lg:h-full lg:grid-cols-2 lg:col-span-2">
            {content && (
              <div className='flex flex-col items-center lg:items-start'>
                <img src={content.img} alt={content.title} className='object-cover aspect-2' />
                <h3 className='text-center py-3 text-lg'>{content.title}</h3>
                <p className='text-center lg:text-left'>{content.content}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection