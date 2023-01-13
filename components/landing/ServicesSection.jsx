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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ServicesSection = () => {
  return (
    <div className="relative bg-white py-24">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <Heading
          title={'Our Services'}
          subtext={'Our strength lies in our ability to design innovative architecture and restructuring conventional designs to accommodate to the needs of modern times.'}
        />
        <div className="mt-20">
          <div className="lg:grid lg:gap-12 lg:grid-cols-3">
            <div className="hidden lg:block grid-cols-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-3 py-7 text-sm font-medium border-l-4'
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </div>
            {/* <div className="flex items-center justify-between lg:hidden">
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='text-lg uppercase text-indigo-600'
                      >
                        {item.name}
                      </a>
                    ))}
                  </div> */}
            <div className="h-32 lg:h-full lg:grid-cols-2 lg:col-span-2 bg-black">
              hello
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection